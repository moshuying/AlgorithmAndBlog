# mykoa

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