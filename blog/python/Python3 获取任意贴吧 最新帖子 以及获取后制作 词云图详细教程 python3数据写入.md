# Python3 获取任意贴吧 最新帖子 以及获取后制作 词云图详细教程 python3数据写入markdown
### 需要准备的环境
pycharm [pycharm Windows下载链接](https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows)
Acaconda [64Windows Anaconda下载链接](https://repo.continuum.io/archive/Anaconda3-2018.12-Windows-x86_64.exe)
#### 注意检查Pycharm中是否正确导入了各种Python包
Pycharm中的Python包在 file-->Setting-->Project:lx2-->Project Interpretr下
****
#### 完整代码展示
---
```python
import os
import re
import jieba
import urllib.request
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from urllib.request import urlopen
from urllib import parse


def loadPage(url, filename):
    """
        作用：根据url发送请求，获取服务器响应文件
        url: 需要爬取的url地址
        filename : 处理的文件名
    """
    print("正在下载 " + filename)
    html = urlopen(url).read().decode("utf-8")
    return html

def writePage(html, filename):
    """
        作用：将html内容写入到本地
        html：服务器相应文件内容
    """
    print("正在保存 " + filename)
    # 文件写入
    with open(new_file_name+kw+filename, "w", encoding="utf-8") as f:
        f.write(html)
    print("-" * 30)


def tiebaSpider(url, beginPage, endPage):
    """
        作用：贴吧爬虫调度器，负责组合处理每个页面的url
        url : 贴吧url的前部分
        beginPage : 起始页
        endPage : 结束页
    """
    for page in range(beginPage, endPage + 1):
        pn = (page - 1) * 50
        filename = "第" + str(page) + "页.html"
        fullurl = url + "&pn=" + str(pn)
        print(fullurl)
        html = loadPage(fullurl, filename)
        writePage(html, filename)

def newpage(url):
    """
        作用：获取贴吧最新消息并展示出来
        fullurl : 完全连接
        data_topic_name：最新主题
        data_made_time：创建时间
        data_main_info：
    """
    fullurl = url + key + "&ie=utf-8&pn="
    header = ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.")
    urllib.request.build_opener().addheaders = [header]
    urllib.request.install_opener(urllib.request.build_opener())
    data = urllib.request.urlopen(fullurl).read().decode()
    data_topic_name = re.compile('title="主题作者:(.*?)"').findall(data)
    data_made_time = re.compile('title="创建时间">(.*?)</span>').findall(data)
    data_main_info = re.compile('<a rel="noreferrer" href="/p/.*?" title="(.*?)"').findall(data)
    data_end_name = re.compile('title="最后回复人:(.*?)"').findall(data)
    data_img_picture = re.compile('class="thumbnail vpic_wrap"><img src="" attr=".*?" data-original="(.*?)"').findall(data)
    for picture in range(0, len(data_img_picture)):
        imgurl = data_img_picture[picture]
        file_name = new_file_name+kw+str(picture) + ".jpg"
        urllib.request.urlretrieve(imgurl, filename=file_name)
    mademakdowntitle(biaochang)
    markdownbiao(biaochang, data_made_time)
    markdownbiao(biaochang, data_topic_name)
    markdownbiao(biaochang, data_main_info)
    markdownbiao(biaochang, data_end_name)
    tiezhun = "热门贴主"
    tiezi = "热门帖子"
    huoyue = "贴吧活跃"
    tiebayuntu(data_topic_name, tiezhun)
    tiebayuntu(data_main_info, tiezi)
    tiebayuntu(data_end_name, huoyue)

def markdownbiao(biaochang,dataname):
    """
        作用：判断目录是否存
        fullurl : 完全连接
        data_topic_name：最新主题
        data_made_time：创建时间
        data_main_info：主体信息
    """
    i = 0
    for i in range(0,biaochang):
        if i == 0:
            file.write(str(jianduan))
        elif i < biaochang:
            file.write(dataname[i-1]+str(jianduan))
        else:
            file.write(str(jianduan))
    file.write("\n")

def mademakdowntitle(biaochang):
    for biaoge in range(0, biaochang):
        if biaoge == 0:
            file.write(jianduan)
        elif biaoge < biaochang:
            file.write(str(biaoge) + jianduan)
        else:
            file.write(jianduan)
    file.write("\n")
    for timebiao in range(0, biaochang - 1):
        if timebiao == 0:
            file.write(jianduan)
        elif timebiao < biaochang:
            file.write("----" + jianduan)
        else:
            file.write(jianduan)
    file.write("\n")

def mknewdir(name):
    """
        作用：判断目录是否存
        fullurl : 完全连接
        data_topic_name：最新主题
        data_made_time：创建时间
         data_main_info：主体信息
    """
    isExists = os.path.exists(name)
    if not isExists:
        # 如果不存在则创建目录
        # 创建目录操作函数
        os.makedirs(name)
        print(name + "目录创建成功")
        return True
    else:
        # 如果目录存在则不创建，并提示目录已存在
        print(name + "目录目录已存在")
        return False

def tiebayuntu(data_name,picture_name):
    text = str(data_name)
    cut_text = jieba.cut(text)
    result = " ".join(cut_text)
    wc = WordCloud(
        font_path='FZMengRTJW.TTF',  # 字体路劲
        background_color='white',  # 背景颜色
        width=1920,                 #输出图片的宽度
        height=1080,                #输出图片的高度
        max_font_size=100,  # 最大字体大小
        min_font_size=10,   # 最小
        # mask=plt.imread('./jingyu.png'),  # 背景图片
        max_words=1000
    )
    wc.generate(result)
    wc.to_file(new_file_name+kw+picture_name+".png")
    plt.figure('贴吧热热门贴主')
    plt.axis('off')

if __name__ == "__main__":
    #输入部分
    kw = input("请输入需要爬取的贴吧名:")
    new_file_name = "./"+kw+"/"
    # 创建目录
    mknewdir(new_file_name)
    beginPage = int(input("请输入起始页："))
    endPage = int(input("请输入结束页："))
    #如果只爬取首页 则可自定义表长 否则默认为30
    if (beginPage == 1)&(endPage == 1):
        biaochang = int(input("请输markdown入表长"))
    else:
        biaochang = 30

    file = open(new_file_name+kw+"yanshi.md", "w", encoding="utf-8")

    jianduan = "|"
    biaochang = biaochang + 1

    url = "http://tieba.baidu.com/f?"
    key = parse.urlencode({"kw": kw})  # .encode("utf-8")
    fullurl = url + key
    print("key=", key)
    newpage(url)
    tiebaSpider(fullurl, beginPage, endPage)
html = urlopen("http://tieba.baidu.com/f?kw=python&pn=100")

file.close()
```
#### 关键代码解读
~~~python
if __name__ == "__main__":
    #输入部分
    kw = input("请输入需要爬取的贴吧名:")
    new_file_name = "./"+kw+"/"
    # 创建目录
    mknewdir(new_file_name)
    beginPage = int(input("请输入起始页："))
    endPage = int(input("请输入结束页："))
    #如果只爬取首页 则可自定义表长 否则默认为30
    if (beginPage == 1)&(endPage == 1):
        biaochang = int(input("请输markdown入表长"))
    else:
        biaochang = 30

    file = open(new_file_name+kw+"yanshi.md", "w", encoding="utf-8")

    jianduan = "|"
    biaochang = biaochang + 1

    url = "http://tieba.baidu.com/f?"
    key = parse.urlencode({"kw": kw})  # .encode("utf-8")
    fullurl = url + key
    print("key=", key)
    newpage(url)
    tiebaSpider(fullurl, beginPage, endPage)
html = urlopen("http://tieba.baidu.com/f?kw=python&pn=100")
~~~
if __name__ == "__main__": 这个是类似于C语言的int main（）,也就是程序入口，在Python中如果有这一段代码，则把Python当做程序来执行，若没有则当做脚本按行执行

~~~python
fullurl = url + key + "&ie=utf-8&pn="
    header = ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.")
    urllib.request.build_opener().addheaders = [header]
    urllib.request.install_opener(urllib.request.build_opener())
    data = urllib.request.urlopen(fullurl).read().decode()
    data_topic_name = re.compile('title="主题作者:(.*?)"').findall(data)
    data_made_time = re.compile('title="创建时间">(.*?)</span>').findall(data)
    data_main_info = re.compile('<a rel="noreferrer" href="/p/.*?" title="(.*?)"').findall(data)
    data_end_name = re.compile('title="最后回复人:(.*?)"').findall(data)
    data_img_picture = re.compile('class="thumbnail vpic_wrap"><img src="" attr=".*?" data-original="(.*?)"').findall(data)
~~~
在以上的代码中

~~~python
header = ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.")
    urllib.request.build_opener().addheaders = [header]
~~~
___
    是模拟浏览器去操作获取网页中的数据，而非脚本
~~~python
  urllib.request.install_opener(urllib.request.build_opener())
    data = urllib.request.urlopen(fullurl).read().decode()
~~~
则是将网页中的数据读取到data中
~~~python
data_topic_name = re.compile('title="主题作者:(.*?)"').findall(data)
~~~
则是在data也就是所有的网页数据中去匹配title="主题作者:"后面的数据，获取到就写在data_topic_name中后面所有的操作均是基于它
##### python中把筛选出的数据写入到markdown表格中
~~~python
def markdownbiao(biaochang,dataname):
    """
        作用：判断目录是否存
        fullurl : 完全连接
        data_topic_name：最新主题
        data_made_time：创建时间
        data_main_info：主体信息
    """
    i = 0
    for i in range(0,biaochang):
        if i == 0:
            file.write(str(jianduan))
        elif i < biaochang:
            file.write(dataname[i-1]+str(jianduan))
        else:
            file.write(str(jianduan))
    file.write("\n")
~~~
这段代码是将python中的数据，写入成markdown中并以表格格式写入
~~~python
def mademakdowntitle(biaochang):
    for biaoge in range(0, biaochang):
        if biaoge == 0:
            file.write(jianduan)
        elif biaoge < biaochang:
            file.write(str(biaoge) + jianduan)
        else:
            file.write(jianduan)
    file.write("\n")
    for timebiao in range(0, biaochang - 1):
        if timebiao == 0:
            file.write(jianduan)
        elif timebiao < biaochang:
            file.write("----" + jianduan)
        else:
            file.write(jianduan)
    file.write("\n")
~~~
这段代码是根据输入的表长创建Markdown表格的头部
