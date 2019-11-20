## Docker Hello World
Docker 允许你在容器内运行程序，使用docker run命令在容器内运行一个应用程序
输出Hello world
```sh
docker run ubuntu:15.10 /bin/echo "Hello World"
```

* 参数解析
    * docker :Docker的二进制执行文件
    * run :与前面的docker组合来运行一个容器
    * ubuntu:15.10：指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker就会从镜像仓库Docker Hub下载公共镜像
    * /bin/echo “Hello world”：在启动的容器内执行的命令

### 运行交互式的容器
```sh
docker run -it ubuntu:15.10 /bin/bash
```

* 参数解析
    * -t :在新容器内指定一个伪终端或终端
    * -i :允许你对容器内的标准（STDIN）进行交互

我们可以通过运行exit命令或者使用CTRL+D来退出容器
  
### 启动容器（后台模式）
```sh
docker run -d ubuntu:15.10 /bin/sh -c "while true;do echo hello world;sleep 1;done"
```
在容器内使用docker logs命令，查看容器内的标准输出
```sh
docker logs <容器id>
```
### 停止容器
```sh
docker stop <容器id>
```
## 容器使用
docker 客户端非常简单，我们可以直接输出docker命令来查看到Docker客户端的所有命令选项
可以使用docker <command> --help更深入的了解指定的Docker命令的使用方法
例如我们要查看docker stats指令的具体使用方法
```sh
docker stats --help
```
### 运行一个web应用
```sh
docker pull training/webapp # 载入镜像
docker run -d -P training/webapp python app.py
```

* 参数解析
    * -d：让容器在后台运行
    * -P：将容器内部使用的网络端口映射到我们使用的主机上

### 查看web应用容器

使用docker ps 来查看我们正在运行的容器
> docker ps -l 查询最后一次创建的容器：

会多出端口信息POSTS

> 0.0.0.0:32768->5000/tcp

Docker开放了5000端口（默认Python Flask端口）映射到主机端口32768上
我们也可以通过**-p** 参数来设置不一样的端口

```sh
docker run -d -p 5000:5000 training/webapp python app.py
```
### 查看web应用程序日志

docker logs <ID或名字>可以查看容器内部的标准输出

### 查看web应用程序容器的进程

docker top <ID或名字> 来查看容器内部运行的进程

### 检查 WEB 应用程序

docker inspect <ID或名字> 查看 Docker 的底层信息。它会返回一个 JSON 文件记录着 Docker 容器的配置和状态信息

### 移除WEB应用容器

docker rm <ID或容器名> 删除不需要的容器，删除容器时，容器必须是停止状态，否则会报如下错误
>Error response from daemon: You cannot remove a running container bf08b7f2cd897b5964943134aa6d373e355c286db9b9885b1f60b6e8f82b2b85. Stop the container before attempting removal or force remove

# Docker镜像使用

当运行容器时，使用的镜像如果在本地中不存在，docker就会自动从docker镜像仓库中下载，默认是从Docker Hub公共镜像源下载

### 列出镜像列表

```sh
docker images
```

  *  选项说明
      *  REPOSITORY ：表示镜像的仓库源
      *  TAG ：镜像内的标签
      *  IMAGE ID ：镜像ID
      *  CREATED ：镜像创建时间
      *  SIZE ：镜像大小
  
  同一个仓库源可以有多个TAG，代表这这个仓库的源的不同版本，比如ubuntu仓库源里，有15.10、14.04等多个不同的版本，我们使用REPOSITORY:TAG来定义不同的镜像，如果不指定TAG，则默认使用最新的镜像ubuntu:latest
  
### 获取一个新的镜像

```sh
docker pull ubuntu:13.10
```

### 查找镜像

我们可以从Docker Hub网站来搜索镜像，Docker[Docker Hub](https://hub.docker.com/)

```sh
docker sercch httpd
```

* 参数解析
    * NAME ：镜像仓库的名称
    * DESCRIPTION：镜像的描述
    * OFFICIAL ：是否docker官方发布

### 创建镜像

当我们从docker镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

1. 从已经创建的容器中更新镜像，并且提交这个镜像
2. 使用 Dockerfile 指令来创建一个新的镜像

#### 更新镜像

更新镜像之前，我们需要使用镜像来创建一个容器

```sh
docker run -i -t ubuntu:15.10 /bin/bash
```

修改完容器内容后，可以通过docker commit来提交容器副本

```sh
docker commit -m="[提交信息]" -a="[作者名]" e218edb10161  runoob/ubuntu:v2
```

  *  参数说明
      *  -m：提交的描述信息
      *  -a：指定镜像作者
      *  e218edb10161 :容器ID
      *  runoob/ubuntu:v2：指定要创建的目标镜像名

可以使用docker images 命令来查看我们的新镜像 runoob/ubuntu:v2

#### 构建镜像

我们使用docker build，从零开始创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。

```sh

cat Dockerfile 

FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```

每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。
第一条FROM，指定使用哪个镜像源RUN 指令告诉docker 在镜像内执行命令，安装了什么。。。
然后，我们使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像。

```sh
docker build -t runoob/centos:6.7 .
```

* 参数说明
    * -t 指定要创建的目标镜像名
    * . :Dockerfile文件所在的目录，可以指定Dockerfile的绝对路径

使用docker images 查看创建的镜像已经在列表中存在
   
### 设置镜像标签

```sh
docker tag <容器ID> runoob/centos:dev
```

使用 docker images 命令可以看到，指定id的镜像多一个标签。

# Docker容器连接

### 端口映射

```sh
docker run -d -P training/webapp python app.py
```

* 参数解析
    * -P ：是容器内部端口**随机**映射到主机的高端口
    * -p : 是容器内部端口绑定到**指定**的主机端口

```sh
docker run -d -p 5000:5000 training/webapp python app.py
```

另外，我们可以指定容器绑定的网络地址，比如绑定 127.0.0.1。

```sh
docker run -d -p 127.0.0.1:5001:5000 training/webapp python app.py
```

这样我们就可以通过访问 127.0.0.1:5001 来访问容器的 5000 端口。
上面的例子中，默认都是绑定 tcp 端口，如果要绑定 UDP 端口，可以在端口后面加上 /udp。

```sh
docker run -d -p 127.0.0.1:5000:5000/udp training/webapp python app.py
```

docker port 命令可以让我们快捷地查看端口的绑定情况。

```sh
docker prot adoring_stonebraker 5000
```

### Docker容器连接

端口映射并不是唯一把 docker 连接到另一个容器的方法。
docker 有一个连接系统允许将多个容器连接在一起，共享连接信息。
docker 连接会创建一个父子关系，其中父容器可以看到子容器的信息。

#### 容器命名

当我们创建一个容器的时候，docker 会自动对它进行命名。另外，我们也可以使用 --name 标识来命名容器，例如：

```sh
docker run -d -p --name test training/webapp python app.py
```

### Docker删除所有镜像

```sh
docker image prune -a -f
```
