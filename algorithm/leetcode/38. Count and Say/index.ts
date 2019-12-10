/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-10 20:31:41
 * @LastEditTime :2019-12-10 20:43:13
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n:number): string {
  let prev_person = '1'
  for(let i =1;i<n;i++){
    let next_person:string = ''
    let num:string = prev_person[0]
    let count:number = 1
    // let [next_person,num,count] = ['',prev_person[0],1]
    for(let j = 0;j<prev_person.length;j++){
      if(prev_person[j] === num){
        count+=1
      }else{
        next_person += count + num
        num = prev_person[j]
        count = 1
      }
      next_person += count + num
      prev_person = next_person
    }
  }
  return prev_person
}
console.log(countAndSay(5))