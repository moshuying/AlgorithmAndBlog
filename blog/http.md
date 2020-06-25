[TOC]
# http

## http 状态码 {#http_status_code}

>HTTP状态码(响应码)用来表明这个HTTP 请求是否已经成功完成.HTTP响应类型一共分五大类:消息响应,成功响应,重定向,客户端错误,服务器端错误. [mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/HTTP_response_codes)

> 当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。[w3cschool](https://www.w3cschool.cn/http/g9prxfmx.html)

状态码|  	原因短语|	代表含义	|HTTP 版本   
---|---|---|---
**消息响应**|||
100| Continue(继续)|	客户端应当继续发送请求.这个临时响应是用来通知客户端它的部分请求已经被服务器接收,且仍未被拒绝.客户端应当继续发送请求的剩余部分,或者如果请求已经完成,忽略这个响应.服务器必须在请求完成后向客户端发送一个最终响应.|HTTP/1.1 可用
101|	Switching Protocol(切换协议)|	服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到 在Upgrade消息头中定义的那些协议。: 只有在切换新的协议更有好处的时候才应该采取类似措施。例如，切换到新的HTTP版本比旧版本更有优势，或者切换到一个实时且同步的协议以传送利用此类特 性的资源。	|HTTP/1.1 可用
**成功相应**|||
200|	OK(成功)|	请求成功.成功的意义根据请求所使用的方法不同而不同.</br>GET: 资源已被提取,并作为响应体传回客户端.</br>HEAD: 实体头已作为响应头传回客户端</br>POST: 经过服务器处理客户端传来的数据,适合的资源作为响应体传回客户端.</br>TRACE: 服务器收到请求消息作为响应体传回客户端.</br>PUT, DELETE, 和 OPTIONS 方法永远不会返回 200 状态码.	|HTTP/0.9 可用
201|	Created(已创建)	|请求成功，而且有一个新的资源已经依据请求的需要而建立，通常这是 PUT 方法得到的响应码.	|HTTP/0.9 可用
202|	Accepted(已创建)	|服务器已接受请求，但尚未处理。正如它可能被拒绝一样，最终该请求可能会也可能不会被执行。在异步操作的场合下，没有比发送这个状态码更方便的做法了。:返回202状态码的响应的目的是允许服务器接受其他过程的请求（例如某个每天只执行一次的基于批处理的操作），而不必让客户端一直保持与服务器的连接直到批处理操作全部完成。在接受请求处理并返回202状态码的响应应当在返回的实体中包含一些指示处理当前状态的信息，以及指向处理状态监视器或状态预测的指针，以便用户能够估计操作是否已经完成。	|HTTP/0.9 可用
203|	Non-Authoritative Information(未授权信息)	|服务器已成功处理了请求,但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝,如果不是上述情况,使用200状态码才是最合适的.|HTTP/0.9 and 1.1
204|	No Content(无内容)|	该响应没有响应内容,只有响应头,响应头也可能是有用的.用户代理可以根据新的响应头来更新对应资源的缓存信息.	|HTTP/0.9 可用
205|	Reset Content(重置内容)	|告诉用户代理去重置发送该请求的窗口的文档视图.	|HTTP/1.1 可用
206|	Partial Content(部分内容)	|当客户端通过使用range头字段进行文件分段下载时使用该状态码	|HTTP/1.1 可用
**重定向**|||
300|	Multiple Choice(多种选择)|	该请求有多种可能的响应,用户代理或者用户必须选择它们其中的一个.服务器没有任何标准可以遵循去代替用户来进行选择.	|HTTP/1.0 and later
301|	Moved Permanently(永久移动)|	该状态码表示所请求的URI资源路径已经改变,新的URL会在响应的Location:头字段里找到.	|HTTP/0.9 可用
302|	Found(临时移动)|	该状态码表示所请求的URI资源路径临时改变,并且还可能继续改变.因此客户端在以后访问时还得继续使用该URI.新的URL会在响应的Location:头字段里找到.	|HTTP/0.9 可用
303	|See Other(查看其他位置)|	服务器发送该响应用来引导客户端使用GET方法访问另外一个URI.	|HTTP/0.9 and 1.1
304|	Not Modified(未修改)|	告诉客户端,所请求的内容距离上次访问并没有变化. 客户端可以直接从浏览器缓存里获取该资源.	|HTTP/0.9 可用
305|	Use Proxy(使用代理)|	所请求的资源必须统过代理才能访问到.由于安全原因,该状态码并未受到广泛支持.	|HTTP/1.1 可用
306|	unused(未使用)|	这个状态码已经不再被使用,当初它被用在HTTP 1.1规范的旧版本中.	|HTTP/1.1 可用
307|	Temporary Redirect(临时重定向)|	服务器发送该响应用来引导客户端使用相同的方法访问另外一个URI来获取想要获取的资源.新的URL会在响应的Location:头字段里找到.与302状态码有相同的语义,且前后两次访问必须使用相同的方法(GET POST).|HTTP/1.1 可用
308|	Permanent Redirect(永久重定向)|	所请求的资源将永久的位于另外一个URI上.新的URL会在响应的Location:头字段里找到.与301状态码有相同的语义,且前后两次访问必须使用相同的方法(GET POST).<br/> **注意: 这是个试验性的状态码,这里是规范草案.Firefox14已经实现对该状态码的支持.**| HTTPbis(试验草案)
**客户端错误**|||
400|	Bad Request(错误请求)|	因发送的请求语法错误,服务器无法正常读取.	|HTTP/0.9 可用
401|	Unauthorized(未授权)	|需要身份验证后才能获取所请求的内容,类似于403错误.不同点是.401错误后,只要正确输入帐号密码,验证即可通过.	|HTTP/0.9 可用
402|	Payment Required(需要付款)|	该状态码被保留以供将来使用.创建此代码最初的目的是为数字支付系统而用,然而,到现在也没投入使用.|	HTTP/0.9 and 1.1
403	|Forbidden(禁止访问)|	客户端没有权利访问所请求内容,服务器拒绝本次请求.	|HTTP/0.9 可用
404|	Not Found(未找到)|	服务器找不到所请求的资源.由于经常发生此种情况,所以该状态码在上网时是非常常见的.	|HTTP/0.9 可用
405|	Method Not Allowed(不允许使用该方法)|	该请求使用的方法被服务器端禁止使用,RFC2616中规定, GET 和 HEAD 方法不能被禁止.|	HTTP/1.1 可用
406|	Not Acceptable(无法接受)|	在进行服务器驱动内容协商后,没有发现合适的内容传回给客户端.	|HTTP/1.1 可用
407|	Proxy Authentication Required(要求代理身份验证)	|类似于状态码 401,不过需要通过代理才能进行验证.|HTTP/1.1 可用
408|	Request Timeout(请求超时)|	客户端没有在服务器预备等待的时间内完成一个请求的发送.这意味着服务器将会切断和客户端的连接. 在其他浏览器中,这种响应更常见一些, 例如Chrome 和 IE9, 目的是为了使用 HTTP 预连机制 加快浏览速度 (查看bug 881804, Firefox在未来版本中会实现这种机制). 同时注意,一些服务器不发送此种响应就直接切断连接.	|HTTP/1.1 可用
409|	Conflict(冲突)|	该请求与服务器的当前状态所冲突.	|HTTP/1.1 可用
410|	Gone(已失效)|	所请求的资源已经被删除.	|HTTP/1.1 可用
411|	Length Required(需要内容长度头)|	因服务器在本次请求中需要 Content-Length 头字段,而客户端没有发送.所以,服务器拒绝了该请求.	|HTTP/1.1 可用
412|	Precondition Failed(预处理失败)	|服务器没能满足客户端在获取资源时在请求头字段中设置的先决条件.	|HTTP/1.1 可用
413|	Request Entity Too Large(请求实体过长)|	请求实体大小超过服务器的设置的最大限制,服务器可能会关闭HTTP链接并返回Retry-After 头字段.|	HTTP/1.1 可用
414|	Request-URI Too Long(请求网址过长)|	客户端请求所包含的URI地址太长,以至于服务器无法处理.	|HTTP/1.1 可用
415|	Unsupported Media Type(媒体类型不支持)|	服务器不支持客户端所请求的媒体类型,因此拒绝该请求.	|HTTP/1.1 可用
416|	Requested Range Not Satisfiable(请求范围不合要求)|	请求中包含的Range头字段无法被满足,通常是因为Range中的数字范围超出所请求资源的大小.	|HTTP/1.1 可用
417|	Expectation Failed(预期结果失败)|	在请求头 Expect 中指定的预期内容无法被服务器满足.	|HTTP/1.1 可用
418|I'm a teapot(服务器拒绝冲泡咖啡)|该错误是超文本咖啡壶控制协议的参考，和 1998 年愚人节的玩笑。|
422|Unprocessable Entity(语法正确服务器理解但无法处理)|服务器理解请求实体的内容类型，并且请求实体的语法是正确的，但是服务器无法处理所包含的指令。|
425|Too Early()|服务器不愿意冒风险来处理该请求，原因是处理该请求可能会被“重放”，从而造成潜在的重放攻击。|
426|Upgrade Required(拒绝处理，升级后可以)|426 Upgrade Required 是一种HTTP协议的错误状态代码，表示服务器拒绝处理客户端使用当前协议发送的请求，但是可以接受其使用升级后的协议发送的请求。|
428|Precondition Required|表示服务器端要求发送条件请求。一般的，这种情况意味着必要的条件首部——如 If-Match ——的缺失。<br/>当一个条件首部的值不能匹配服务器端的状态的时候，应答的状态码应该是 412 Precondition Failed，前置条件验证失败。|
429|Too Many Requests(发送过多请求)|在一定的时间内用户发送了太多的请求，即超出了“频次限制”。在响应中，可以提供一个  Retry-After 首部来提示用户需要等待多长时间之后再发送新的请求。|
431|Request Header Fields Too Large(首部字段过大)|响应码 431 Request Header Fields Too Large 表示由于请求中的首部字段的值过大，服务器拒绝接受客户端的请求。客户端可以在缩减首部字段的体积后再次发送请求。<br/>该响应码可以用于首部总体体积过大的情况，也可以用于单个首部体积过大的情况。<br/>这种错误不应该出现于经过良好测试的投入使用的系统当中，而是更多出现于测试新系统的时候|
451|Unavailable For Legal Reasons(因法律原因不可用)|服务器由于法律原因，无法提供客户端请求的资源，例如可能会导致法律诉讼的页面。|
**服务器端错误**|||
500|	Internal Server Error(内部服务器错误)|	服务器遇到未知的无法解决的问题.	|HTTP/0.9 可用
501|	Implemented(未实现)|	服务器不支持该请求中使用的方法,比如POST 和 PUT.只有GET 和 HEAD 是RFC2616规范中规定服务器必须实现的方法.	|HTTP/0.9 可用
502|	Bad Gateway(网关错误)|	服务器作为网关且从上游服务器获取到了一个无效的HTTP响应.	|HTTP/0.9 可用
503	|Service Unavailable(服务不可用)|	由于临时的服务器维护或者过载,服务器当前无法处理请求.这个状况是临时的,并且将在一段时间以后恢复.如果能够预计延迟时间,那么响应中可以包含一个Retry-After:头用以标明这个延迟时间.如果没有给出这个Retry-After:信息，那么客户端应当以处理500响应的方式处理它.同时,这种情况下,一个友好的用于解释服务器出现问题的页面应当被返回,并且,缓存相关的HTTP头信息也应该包含,因为通常这种错误提示网页不应当被客户端缓存.	|HTTP/0.9 可用
504|	Gateway Timeout (网关超时)|	服务器作为网关且不能从上游服务器及时的得到响应返回给客户端.	|HTTP/1.1 可用
505|	HTTP Version Not Supported(HTTP版本不受支持)|	服务器不支持客户端发送的HTTP请求中所使用的HTTP协议版本.	|HTTP/1.1 可用 
511|Network Authentication Required(需要通过验证才能使用该网络)|网络运营商们有时候会在准许使用网络之前要求用户进行身份验证、接受某些条款，或者进行其他形式的与用户之间的互动（例如在网络咖啡厅或者机场）。他们通常用用户设备的  MAC 地址来进行识别。|

## Content-Disposition

>在常规的HTTP应答中，Content-Disposition 响应头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。[mdn ]

### 作为消息主体中的消息头

```
Content-Disposition: inline // 默认值 回复中的消息体会以页面的一部分或者整个页面的形式展示
Content-Disposition: attachment // 意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，将filename的值预填为下载后的文件名，假如它存在的话
Content-Disposition: attachment; filename="filename.jpg"
```

触发另存为对话框的服务器应答

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Save me!</HTML>
```

### 作为multipart body中的消息头

在HTTP场景中。第一个参数总是固定不变的form-data；附加的参数不区分大小写，并且拥有参数值，参数名与参数值用等号(=)连接，参数值用双引号括起来。参数之间用分号(;)分隔。

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

以下是一个HTML表单的示例，展示了在 multipart/form-data format 格式的报文中使用Content-Disposition 消息头的情况：

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```
[测试按钮](#http_status_code)