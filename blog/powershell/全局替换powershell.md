
# windows10 全局替换powershell

原理是通过自己书写的文件替换掉window10默认powershell.exe文件

理论上可以通过这种东西打开任意文件，游戏，视频，文件夹，都不例外，都能享受全局快捷键带来的好处

替换操作需要自己制作一个powershell，不过你都看到这篇教程了肯定不会让你空手而归，这里准备好了一个编译好的powershell，启动的文件路径指向powershell 7 的`pwsh.exe`文件，有需要的话把这个文件改成别的文件，也一样的效果

关于源码部分后面再讨论

## 第一步：安装powershell

[从这里获取powershell最新版本](https://github.com/PowerShell/PowerShell/releases)

下载后安装，下一步下一步就行

## 获取文件操作权限

这一步是替换powershell的先决条件，不然就会报没有`TrusedInstaller`权限

解决办法也很简单，桌面（或者其他存文件的地方也许）新建文本文档然后复制以下内容到文本文档里,然后文件后缀名改为`.reg`双击执行，有提示点确定

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\runas]

@="获取TrustedInstaller权限"

[HKEY_CLASSES_ROOT\*\shell\runas\command]

@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

[HKEY_CLASSES_ROOT\Directory\shell\runas]

@="获取TrustedInstaller权限"

"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]

@="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"

"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
```

然后你就能看到右键文件夹或者文件的时候能获取`TrusedInstaller`权限了，在`C:\Windows\System32\WindowsPowerShell\v1.0`目录下好像有限制，右键不出这个东西，所以我们干脆到上级目录，右键`v1.0`文件夹直接获取整个文件夹的操作权限

这个时候先别急，把`powershell.exe`文件复制一份然后重命名一下，万一哪天你不想用新版了，还可以随时改回来

然后就很简单了，打开这个链接（觉得可以麻烦给个star，感激不尽）`https://github.com/moshuying/myAHK/tree/master/extension`下载`powershell.exe`,然后替换掉`C:\Windows\System32\WindowsPowerShell\v1.0`目录下的`powershell.exe`


以后再打开`powershell.exe`时会调用我们指定的`pwsh.exe`,无论是按win+x a打开powershell还是在ide或者控制台集成环境中调用`powershell.exe`都一样的

这样的好处就是统一管理powershell,美化什么的也简单很多

既然说到美化了，这里有一篇不错的美化教程，可以参考下
