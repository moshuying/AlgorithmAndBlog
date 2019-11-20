# taiga 安装配置
---
## 1.简介

本文档介绍了如何部署完整的Taiga服务（每个模块都是Taiga平台的一部分）。
Taiga平台由三个主要组件组成，每个组件在编译时和运行时都有自己的依赖关系：
 + **taiga-back**（backend / api）
 + **taiga-front-dist**（前端）
 + **taiga-events**（websockets网关）（可选）

每个组件都可以在一台独特的机器上运行，或者所有组件都可以安装到不同的机器上。在本教程中，我们将在一台机器上安装所有内容，安装所有三个Taiga组件。这种类型的设置应该足以满足中小型生产环境。

## 2.概述

本教程假设您使用的是干净的，最近更新的**Ubuntu 16.04**映像。
由于前端的性质，Taiga通过域/ public-ip使用，因为前端应用程序在您的浏览器中运行。前端必须能够与后端/ API通信，因此前端和后端都必须可以通过域/ public-ip访问。
**Taiga的安装必须由“常规”用户完成，而不是root用户。**
在本教程中，我们假设以下细节：
+ IP： **80.88.23.45**主机名:( example.com指向80.88.23.45）
+ 用户名： **taiga**
+ 系统ram **>=1GB**（编译lxml所需）
+ 工作目录 **/home/taiga/**（用户默认taiga）

## 2.1 系统架构描述

>这是一个简短的系统架构描述，可帮助您了解Taiga的构建和工作方式。在进一步安装之前，请务必阅读此说明以获得高级概述。

Taiga由2个核心（mandatory）模块组成：
 + **taiga-back**
 + **taiga-front**

**taiga-back**用django，python3编写，并为前端提供API端点。

**taiga-front**主要用angularjs和coffeescript编写，取决于后端。

python后端由gunicorn（端口9001）公开，它是一个Python WSGI HTTP服务器。进程管理器是systemd，它一起运行gunicorn和taiga-back。从技术上讲，后端与数据库（postgresql）通信，通过前端，它允许用户使用Taiga的功能。前端和后端之间的通信使用API完成。

然后后端由nginx公开暴露，nginx充当这种情况的反向代理。前端位于**dist**文件夹中，并由nginx公开公开，nginx充当此案例的静态Web服务器。

## 3先决条件

>
Taiga由三个模块组成，每个模块都需要不同的包和第三方包。本节将收集成功的Taiga安装和配置所需的软件包。在本节中，我们将为所有模块安装所有依赖项，包括可选模块和服务。

#### 基本套餐
---
> 该组件taiga-back使用postgresql（> = 9.4）作为数据库：
> 必须与几个第三方库一起安装Python（3）和virtualenvwrapper pip升级到最新版本

```sh
sudo apt-get update
sudo apt-get install -y build-essential binutils-doc autoconf flex bison libjpeg-dev libfreetype6-dev zlib1g-dev libzmq3-dev libgdbm-dev libncurses5-dev automake libtool curl git tmux gettext nginx rabbitmq-server redis-server postgresql-9.5 postgresql-contrib-9.5 postgresql-doc-9.5 postgresql-server-dev-9.5 python3 python3-pip python3-dev virtualenvwrapper libxml2-dev libxslt-dev libssl-dev libffi-dev
```

##### **在继续安装之前，必须执行此步骤！**

#### 创建一个名为的用户taiga，并为其授予root权限
---
>不要不更改为root用户。必须与taiga用户一起完成安装。

```sh
sudo adduser taiga
sudo adduser taiga sudo
sudo su taiga
cd ~
```
### 3.1配置依赖项

#### 使用初始用户和数据库配置postgresql：

```sh
sudo -u postgres createuser taiga
sudo -u postgres createdb taiga -O taiga --encoding='utf-8' --locale=en_US.utf8 --template=template0
```

#### 创建一个名为的用户taiga，以及RabbitMQ的虚拟主机（taiga-events）

```sh
sudo rabbitmqctl add_user taiga PASSWORD_FOR_EVENTS
sudo rabbitmqctl add_vhost taiga
sudo rabbitmqctl set_permissions -p taiga taiga ".*" ".*" ".*"
```

### 4.后端配置

>本节有助于配置后端（api）Taiga服务及其依赖项。

#### 下载代码

```sh
cd ~
git clone https://github.com/taigaio/taiga-back.git taiga-back
cd taiga-back
git checkout stable
```
#### 创建名为taiga的新virtualenv

```sh
mkvirtualenv -p /usr/bin/python3 taiga
```

#### 安装依赖项

```sh
pip install -r requirements.txt
```

#### 使用初始基本数据填充数据库

```sh
python manage.py migrate --noinput
python manage.py loaddata initial_user
python manage.py loaddata initial_project_templates
python manage.py compilemessages
python manage.py collectstatic --noinput
```

这将创建管理员帐户。登录凭据为admin，密码为123123。

可选： 如果您希望将一些示例数据加载到Taiga中，请执行以下命令，该命令使用示例项目和随机数据填充数据库（对于演示非常有用）：

```sh
python manage.py sample_data
```

#### 将以下配置复制粘贴~/taiga-back/settings/local.py并使用您自己的详细信息进行更新：

```python
from .common import *

MEDIA_URL = "http://example.com/media/"STATIC_URL = "http://example.com/static/"SITES["front"]["scheme"] = "http"SITES["front"]["domain"] = "example.com"

SECRET_KEY = "theveryultratopsecretkey"

DEBUG = FalsePUBLIC_REGISTER_ENABLED = True

DEFAULT_FROM_EMAIL = "no-reply@example.com"SERVER_EMAIL = DEFAULT_FROM_EMAIL

#CELERY_ENABLED = True

EVENTS_PUSH_BACKEND = "taiga.events.backends.rabbitmq.EventsPushBackend"EVENTS_PUSH_BACKEND_OPTIONS = {"url": "amqp://taiga:PASSWORD_FOR_EVENTS@localhost:5672/taiga"}

# Uncomment and populate with proper connection parameters# for enable email sending. EMAIL_HOST_USER should end by @domain.tld#EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"#EMAIL_USE_TLS = False#EMAIL_HOST = "localhost"#EMAIL_HOST_USER = ""#EMAIL_HOST_PASSWORD = ""#EMAIL_PORT = 25

# Uncomment and populate with proper connection parameters# for enable github login/singin.#GITHUB_API_CLIENT_ID = "yourgithubclientid"#GITHUB_API_CLIENT_SECRET = "yourgithubclientsecret"
```

#### 验证

（可选）要确保一切正常，请发出以下命令以在开发模式下运行后端以进行测试：
```sh
workon taiga
python manage.py runserver
```

然后，您必须能够在URL上看到表示端点列表的json：http：// localhost：8000 / api / v1 /。

>在此阶段，后端已成功安装，但要在生产中运行python后端，必须首先配置应用程序服务器。有关详细信息，请参阅本文档后面的内容。

### 5.前端安装

>从Github下载代码：

```sh
cd ~
git clone https://github.com/taigaio/taiga-front-dist.git taiga-front-dist
cd taiga-front-dist
git checkout stable
```
#### 复制示例配置文件：

```sh
cp ~/taiga-front-dist/dist/conf.example.json ~/taiga-front-dist/dist/conf.json
```
#### 按照以下模式编辑示例配置（替换为您自己的详细信息）：
```json
{
        "api": "http://example.com/api/v1/",
        "eventsUrl": "ws://example.com/events",
        "debug": "true",
        "publicRegisterEnabled": true,
        "feedbackEnabled": true,
        "privacyPolicyUrl": null,
        "termsOfServiceUrl": null,
        "GDPRUrl": null,
        "maxUploadFileSize": null,
        "contribPlugins": []}
```
>小心使用浏览器中的复制粘贴以避免http://重复。


有**taiga-front-dist**，前-dist的下载和配置是不够的。下一步是在静态文件Web服务器下公开代码（在dist目录中）。在本教程中，我们使用nginx作为静态文件Web服务器和反向代理。稍后将解释nginx的配置。

