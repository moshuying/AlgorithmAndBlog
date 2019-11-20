## 创建版本库

```sh
git init 
#添加文件到仓库
git add <file>
git commit -m <message>

```

## 分支

git 鼓励大量使用分支

```sh
git branch #查看分支    
git branch <name> #创建分支
git branch -D <name> #强行删除
git checkout <name>#切换分支
git checkout -b <name>#创建+切换分支
git checkout -b <branch-name> origin/<branch-name> #在本地创建和远程分支对应的分支
git branch --set-upstream <branch-name> origin/<branch-name>
git merge <name>#合并分支到当前分支
git branch -d <name>#删除分支
git log --graph  #查看分支合并图
git stash #暂存工作区
git stash apply #恢复工作区(不删除暂存)
git stash drop #删除工作区暂存
git stash pop #恢复工作区(删除暂存)
git stash list #查看工作区暂存
```

## 版本管理

git add实际上就是把文件修改添加到暂存区
git commit提交更改实际上就是把暂存区的所有内容提交到当前分支
在windows下也可以使用gitk命令查看
```sh
git status #查看修改内容
git diff <file> #查看修改内容
git log #查看提交历史记录
git reset --hard <SHA1(commit id)> #移动版本
git reflog #查找命令
```
## 撤销修改

```sh
git checkout -- <file>
git reset HEAD <file>

git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态
git stash  #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
git reset --hard HASH #返回到某个节点，不保留修改。
git reset --soft HASH#返回到某个节点。保留修改 
```

## 删除文件

```sh
#如果是在版本库中,则不必担心
git rm <file>
```
## 关联远程库

```sh
git remote #查看远程库信息
git remote -v #查看更详细的远程库信息
git remote add origin <address> #关联一个远程仓库
git push -u origin master  #第一次提交带上-u 用于把本地以前的commit推送到关联
git push origin master
git remote rm origin #移除关联
git clone <adderss>  #克隆仓库
```