```js
function work() {
  onmessage = ({ data: { jobId, message } }) => {
    console.log("work:", message);
    let result = new Array(100).fill(1);
    postMessage({ jobId, result });
  };
}

function makeWork(file) {
  let pendingJobs = {};
  const worker = new Worker(
    URL.createObjectURL(new Blob([`(${file.toString()})()`]))
  );
  worker.onmessage = ({ data: { result, jobId } }) => {
    pendingJobs[jobId](result);
    delete pendingJobs[jobId];
  };
  return (...message) =>
    new Promise((resolve) => {
      const jobId = String(Math.random());
      pendingJobs[jobId] = resolve;
      worker.postMessage({ jobId, message });
    });
}

const testWorker = makeWork(work);
testWorker().then((res) => {
  console.log("thread", res);
});

```


```js
function workerjs() {
  let num_workers = 10;
  let items_per_worker = 1000000;
  let result = 0;
  let pending_workers = num_workers;
  for (let i = 0, l = num_workers; i < l; i++) {
    let worker = new Worker(URL.createObjectURL(new Blob(['('+corejs.toString()+')()'])));
    worker.postMessage(i * items_per_worker)
    worker.postMessage((i+1)*items_per_worker)
    worker.onmessage = (event) =>{
      result += event.data;
      pending_workers -=1
      if(pending_workers<=0){
        postMessage(result)
        close()
      }
    }
  }
  function corejs() {
    let start;
    onmessage = getStart;
    function getStart(event) {
      start = event.data;
      onmessage = getEnd;
    }
  
    let end;
    function getEnd(event) {
      end = event.data;
      onmessage = null;
      work();
    }
  
    function work() {
      let result = 0;
      for (let i = start; i < end; i += 1) {
        // perform some complex calculation here
        result += 1;
      }
      postMessage(result);
      close();
    }
  }
}
let worker = new Worker(URL.createObjectURL(new Blob(['('+workerjs.toString()+')()'])));
worker.onmessage = (event) =>{
  console.log(event)
}
```


