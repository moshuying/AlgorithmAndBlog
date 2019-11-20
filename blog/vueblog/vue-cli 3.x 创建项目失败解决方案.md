# @vue/cli 3.x 创建项目失败解决方案
> 已经提了issues但暂未回复或解决
## 报错信息

> command failed: yarn --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist

## 报错原因

经bug修复后查明是yarn问题,yarn不能使用`https://registry.npm.taobao.org`源,所以报出了该错误,yarn在安装完毕后会修改默认包使用方式为yarn,而vue提供的源yarn又不支持使用,所以报错

## 复现bug

将`C:\Users\Administrator\.vuerc`文件中`packageManager`修改为`yarn`即可复现该bug

## 修复方法

该bug可能有一些并发原因,修复方法如下,请参考使用
### 前置条件

确保vue-cli,npm,node都是新版本,node在8+以上版本

## 方法一:清除npm缓存

```sh
npm cache clean --force
```

### 方法二:设置chromedriver

```sh
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```

### 方法三:修改npm,yarn源

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 方法四:修改默认包管理器

找到`C:\Users\Administrator\.vuerc`这个文件
设置`packageManager`为`npm`