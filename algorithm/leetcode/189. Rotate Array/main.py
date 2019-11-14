#!/usr/bin/env python
# coding=utf-8
'''
#Description :墨抒颖
#Author :墨抒颖
#Date :2019-11-12 22:14:06
#LastEditTime :2019-11-12 22:50:23
#LastEditors :墨抒颖
#Github :https://github.com/moshuying
#Gitee :https://gitee.com/moshuying
#Blogs :https://blog.csdn.net/qq_34846662
#Use :使用说明
'''
class Solution:
    def rotate(self, nums, k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # k %= len(nums)
        # nums[:] = nums[-k:] + nums[:-k]
        k %= len(nums)
        for _ in range(k):
          nums.insert(0,nums.pop())
app = Solution()
List = [1,2,3,4,5,6,7]
app.rotate(List,3)
print(List)