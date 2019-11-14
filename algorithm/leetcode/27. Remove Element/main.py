#!/usr/bin/env python
# coding=utf-8
'''
#Description :墨抒颖
#Author :墨抒颖
#Date :2019-10-23 10:36:31
#LastEditTime :2019-10-23 10:41:18
#LastEditors :墨抒颖
#Github :https://github.com/moshuying
#Gitee :https://gitee.com/moshuying
#Blogs :https://blog.csdn.net/qq_34846662
#Use :使用说明
'''

# class Solution:
def removeElement( nums, val: int) -> int:
  i = 0
  for j in range (0,len(nums)):
    if nums[j]!=val:
      nums[i] = nums[j]
      i+=1
  return i
print(removeElement([1,2,3,6,8],3))
