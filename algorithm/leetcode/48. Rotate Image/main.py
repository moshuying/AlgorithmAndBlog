#!/usr/bin/env python
# coding=utf-8
'''
#Description :墨抒颖
#Author :墨抒颖
#Date :2019-11-14 21:38:36
#LastEditTime :2019-11-16 10:23:02
#LastEditors :墨抒颖
#Github :https://github.com/moshuying
#Gitee :https://gitee.com/moshuying
#Blogs :https://blog.csdn.net/qq_34846662
#Use :使用说明
'''
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        layers = n//2
        for lay in range(layers):
            for i in range(lay,n-lay-1):
                temp  = matrix[lay][i]
                matrix[lay][i] = matrix[n-1-i][lay]
                matrix[n-1-i][lay] = matrix[n-1-lay][n-1-i]
                matrix[n-1-lay][n-1-i]=matrix[i][n-1-lay]
                matrix[i][n-1-lay]=temp