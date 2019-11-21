# liunx下远程anaconda 搭建/构建环境,连接,移植/拷贝环境
---
## 构建
1. mkdir anaconda 
2. wget https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh
3. sudo bash Anaconda3-2019.03-Linux-x86_64.sh
4. enter yes 空格
5. vi ~/.bashrc 加入 export PATH=/root/anaconda3/bin:$PATH
6. source ~/.bashrc
7. conda list
8. 重启

## 创建环境
1. conda create --name py36_Ailog python=3.6 
2. source activate py36_Ailog
3. conda install numpy
4. conda install pandas
5. conda install pymysql
6. conda install gensim
7. conda install joblib
8. conda install scikit-learn
9. 测试连接

## 连接

File->Settings->设置->add->SSH Interpreter进行配置

1. 47.107.231.9 root [password]
2. Python编译器位置[conda info -e 记得带上python具体执行文件的路径] <Project root>/home/temp [如果要经常用的话就不要放到根目录的/tmp下]

## 移植环境
1. 将/root/anaconda3/envs/Ailog_py36打包：tar zcvf py36.tar.gz /root/anaconda3/envs/Ailog_py36
2. 在另一台服务器上安装anaconda
3. 将py36.tar.gz解压到/root/anacondas/envs/目录下：然后使用命令conda info -e 查看
4. 接下来可以激活环境source activate Ailog_py36然后conda list 查看里面已经有现成的包了（全程无需连接网络）
5. 接下来保存anaconda的安装包和py36.tar.gz就可以移植到其它服务器去进行测试了
