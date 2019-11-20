## docker hadoop
```sh
sudo docker pull kiwenlau/hadoop:1.0
git clone https://github.com/kiwenlau/hadoop-cluster-docker
sudo docker network create --driver=bridge hadoop
cd hadoop-cluster-docker
./start-container.sh
#启动hadoop
./start-hadoop.sh
#运行wordcount
./run-wordcount.sh
```
Hadoop网页管理地址:
NameNode: http://192.168.59.1:50070/
ResourceManager: http://192.168.59.1:8088/
192.168.59.1为运行容器的主机的IP。
[源地址](https://kiwenlau.com/2016/06/12/160612-hadoop-cluster-docker-update/)
#### 安装docker
安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
> yum install -y yum-utils device-mapper-persistent-data lvm2

设置yum源 安装
>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
>yum list docker-ce

启动
>systemctl start docker
>systemctl enable docker
>docker version 

#### docker换源
```sh
vi /etc/docker/daemon.json

{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```
#### 
```bat
bcdedit /set hypervisorlaunchtype off
```