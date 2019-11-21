> 阿里云服务器等记得到控制台开启防火墙
### 安装
```sh
sudo apt-get update
sudo apt-get install apache2

```
### 配置
#### apache2 默认的几个配置文件

   /etc/apache2/apache2.conf 
   是主要配置文件(这个文件的末尾可以看到，include了其它所有的配置文件)。
   /etc/apache2/ports.conf 
   始终包含在主配置文件中。它用于确定传入连接的侦听端口，默认为80，我们一般都会重新配置新的端口。
   其它配置文件在 /etc/apache2/sites-enabled，/etc/apache2/conf-enabled，/etc/apache2/mods-enabled 目录下。
   apache2的默认web目录：/var/www/html。（在/etc/apache2/sites-enabled/000-default.conf 里可以看到这个 DocumentRoot /var/www/html 配置）
    apache2 的默认用户是 www-data，定义在 /etc/apache2/envvars 文件中。
    设置默认主页的配置文件/etc/apache2/mods-enabled/dir.conf
#### 修改端口，这里我修改为8099
##### 修改它的监听端口
sudo vim /etc/apache2/ports.conf
##### 修改它的主机端口
sudo vim /etc/apache2/sites-available/000-default.conf

#### apache2 的几个简单命令：启动、停止、重启、状态
sudo /etc/init.d/apache2 [ start | stop | restart | status ]
service apache2 [ start | stop | restart | status ]

#### 重启apache2 并查看状态
sudo /etc/init.d/apache2 start
sudo /etc/init.d/apache2 status
```sh

```
### 卸载
```sh
sudo apt-get --purge remove apache-common
sudo apt-get --purge remove apache
 
#找到没有删除掉的配置文件，一并删除
 
sudo find /etc -name "*apache*" |xargs  rm -rf 
sudo rm -rf /var/www
sudo rm -rf /etc/libapache2-mod-jk
sudo rm -rf /etc/init.d/apache2
sudo rm -rf /etc/apache2
 
#删除关联，
 
dpkg -l |grep apache2|awk '{print $2}'|xargs dpkg -P
```