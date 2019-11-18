[TOC]
# VSCode 使用Settings Sync同步配置(最新版傻瓜教程)

> 之前无意中听到有人说,vsCode最大的缺点就是每次换个电脑或者临时去个新环境,就要配置一下各种插件,好不麻烦,以至于面试都不敢说自己用vsCode 说着无心,听着有意,因为我也发现了这个问题,索性认真找了一下网上的教程,发现网上的教程教程有些落后,过程复杂而且不容易成功,干脆自己去看最新文档,发现现在同步设置的方法简直不要太简单

## 准备工作

正常运行的VSCode,以及一个gitHub账号

## 安装Settings Sync

>点击VSCode的插件栏搜索Settings Sync然后安装

![安装setting sync](https://img-blog.csdnimg.cn/20190813211115707.png)

>安装完之后会弹出一个登陆界面,这里点击login with  github
>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813211155640.png)

>点击后会自动弹出一个登陆页面,登上你的github账户即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813211241469.png)
>如果你之前有用过setting sync的话,这里会自动显示你最近使用的的gist id (貌似vscode insiders支持更好一点)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019081321125032.png)
>如果没有自动添加gist id的话就手动点击插件的设置添加gist

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813211257867.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODQ2NjYy,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813211304531.png)

>这里如果你是在vscode insider下面第一次使用这个软件,不用去创建什么gits Tonken,直接F1或者ctrl + shift + p搜索sync
再选择 Sync: Upload / Update Settings 后会直接生成一个gits id(记得存好这个id 将来可能用的是)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813211320437.png)
>然后会自动上传你当前的插件及设置信息,点开插件栏选择此插件的设置就可以看到自动生成的gits id了,保存好这个id 在其他的的电脑上就可以使用这个id同步设置了,

![在这里插入图片描述](https://img-blog.csdnimg.cn/201908132113265.png)

>如果你不是很熟练使用这个的话,或者插件更新的不频繁的话,我个人建议关掉自动同步,自己手动上传和下载设置




