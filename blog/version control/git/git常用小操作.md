## 关联多个远程库

1.  在本地仓库中打开`.git/config`文件
2.  在`[remote "origin"]`下接一行`url = <你的远程仓库地址>`

参考配置如下
```sh
[remote "origin"]
  url = https://gitee.com/moshuying/AlgorithmAndBlog.git
  url = https://github.com/moshuying/AlgorithmAndBlog.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

## 在liunx下避免多次输入账户密码的方法

添加`git config`

```sh
git config --global credential.helper store
```

重新push后再次push便不用输入用户名和密码

## git clone 速度太慢解决方法
---
>在国内，使用git clone的速度实在太慢，git clone的速度可能会让人难以承受

**适用于各种操作系统**

### 方法1:查找域名对应的ip地址，并修改hosts文件

>这种方法最简便快速,但是也最不稳定,经常都是早上快下午就慢的出奇甚至clone不下来

vi /etc/hosts
在末尾追加如下设置
```
140.82.113.4 github.com
185.199.108.153 assets-cdn.github.com
151.101.185.194 github.global.ssl.fastly.net
```

### 科学上网
这个不必多说,科学上网解决一切问题