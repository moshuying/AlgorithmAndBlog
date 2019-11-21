# centos7 安装docker(手动和脚本安装）换源  卸载
Docker 要求 CentOS 系统的内核版本高于 3.10 ，查看本页面的前提条件来验证你的CentOS 版本是否支持 Docker 。
通过 uname -r 命令查看你当前的内核版本
```sh
uname -r
```
## 移除旧的版本 
```sh
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
#安装一些必要的系统工具：
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
#添加软件源信息：
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
#更新 yum 缓存：
sudo yum makecache fast
#安装 Docker-ce：
sudo yum -y install docker-ce
#启动 Docker 后台服务
sudo systemctl start docker
#测试运行 hello-world
docker run hello-world
```
## 使用脚本安装Docker
```sh

#确保 yum 包更新到最新。
sudo yum update
#执行 Docker 安装脚本。
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
#启动 Docker 进程。
sudo systemctl start docker
#验证 docker 是否安装成功并在容器中执行一个测试的镜像。
sudo docker run hello-world
docker ps
```
## 换源

CentOS 有个很方便的软件安装工具yum，但是默认安装完CentOS，系统里使用的是国外的CentOS更新源，这就造成了我们使用默认更新源安装或者更新软件时速度很慢的问题，甚至更新失败。 
为了使用yum工具能快速的安装更新软件，我们需要将默认的yum更新源配置为国内的更新源。 
网上很多教程都是更改yum更新源的配置文件，位于centos目录/etc/yum.repos.d/下，但是需要更改该目录下的CentOS-Base.repo文件好几个地方，看起来麻烦一些。
```sh
#备份
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
#下载新的CentOS-Base.repo 到/etc/yum.repos.d/
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
#或者
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
#之后运行yum makecache生成缓存
yum makecache
```