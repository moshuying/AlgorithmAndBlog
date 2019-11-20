## 方法1

---

1. 获得容器IP
 
 >  将 **container_name** 换成实际环境中的容器名

```sh
docker inspect <container_name> | grep IPAddress
```

2. iptable转发端口

> 将容器的 **8000** 端口映射到docker主机的 **8001** 端口

```sh
iptables -t nat -A DOCKER -p tcp --dport 8001 -j DNAT --to-destination 172.17.0.19:8000
```

## 方法2
---

1. 提交一个运行中的容器为镜像

```sh
docker commit -a "<container_name>" -m "<a new image>" web  aaa:v1
```

2. 运行镜像并添加端口

```sh
docker run -it --name web_demo -p 8000:80 aaa:v1 /bin/bash
```