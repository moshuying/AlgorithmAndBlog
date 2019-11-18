
# VSCode 远程开发(带免密)
## 简介
>Visual Studio Code(以下简称 VS Code)从1.35.0版本正式提供可以在本地编辑远程开发环境的文件的功能，具体实现如下图
>![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091641388.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODQ2NjYy,size_16,color_FFFFFF,t_70)

安装完成Remote Development后,,可以极大地简化各种情况下的开发和故障排除,您可以
 1. 在您部署的同一操作系统上进行开发，或者使用比本地计算机更大，更快，更专业的硬件。
 2. 在不同的远程开发环境之间快速切换，安全地进行更新，而不必担心影响本地计算机。
 3. 从多台计算机或位置访问现有开发环境。
 4. 调试运行在其他位置（如客户站点或云中）的应用程序。
 >以上都摘自remote-ssh的官方,下面开始正式教程
****
**本次测试在windows下进行,远程服务器为centos7,但理论上可以在任何支持ssh并联网的的机器之间进行**

## 开始前准备

>(必须)Remote Development插件以及可以正常ssh连接的远程计算机
>(非必须)xshell,xftp,gitbash
VSCode直接搜索Remote Development插件并安装即可,ssh的远程计算机使用任意ssh软件可以正常连接即可

## 配置免密远程登录

在本地机器生成秘钥对

#### windos下的控制台默认没有ssh,但是gitbash里有,使用gitbash创建秘钥对

>这一步如果你之前就已经有秘钥了的话,建议跳过

在**gitbash**下输入 
```shell
ssh-keygen -t rsa -C "这里任意输入" 
```
即可生成秘钥对,默认路径在C:\Users\Administrator\.ssh,图中也已经指出了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091728941.png)

现在在远程也使用相同的命令创建秘钥对

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091741145.png)

#### 拷贝公钥到远程服务器上

>这一步的目的是让远程机器的**authorized_keys**中包含我们的公钥内容
>我服务器的authorized_keys中就包含多个公钥,一样都可以免密登录

使用xftp将本地ssh的公钥(id_rsa.pub)拷贝到远程服务器的root目录下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091820514.png)

在xshell中输入**cat ~/id_rsa.pub >> ~/.ssh/authorized_keys**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091827975.png)

到这一步就配置完免密了,接下来回到VSCode中

## Remote Development配置

点击VSCode侧边栏的小屏幕标志再点击齿轮配置你的远程信息

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091840480.png)

这里我选择第一个设置你也可以自己另选配置项

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091848479.png)

Host 显示在连接选项中的名字,
HostName 你的ssh服务器的地址
User 你登录ssh时的用户名
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810091856149.png)

配置完之后保存就可以看到侧边栏中更新了可以连接的服务器,接下来就可以像在本地开发一样进行远程开发了


