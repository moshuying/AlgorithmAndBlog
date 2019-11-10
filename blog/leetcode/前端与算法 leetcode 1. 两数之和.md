[TOC]
# 前端与算法 leetcode 1. 两数之和
---

## 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
[1. 两数之和](https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-java-jsshi-xian-shi-jian-fu-za-du/)

## 概要
这道题的意思其实就是找一个`target-nums[i]`的值,而hashMap在这方面很擅长,复杂度最差也是O1
## 提示
HashMap,暴力法
## 解析

### 解法一:暴力法
使用两层循环,外层循环计算当前元素与 targettarget 之间的差值,内层循环寻找该差值,若找到该差值,则返回两个元素的下.
### 解法二:HashMap法
使用一层循环,遍历数组的同时查找`target-nums[i]`的值,找到则立即返回`target-nums[i]`值的下标和i的下标
## 算法

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力法
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+1;j<nums.length;j++){
    //         if(nums[i]===target-nums[j]) return [i,j]
    //     }
    // }
    // return []
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {return [map.get(target - nums[i]), i];}
        map.set(nums[i], i);
    }
};
```

## 传入`[2,7,11,1,12,34,4,15],19`的运行结果

```sh
[1,4]
```

## 执行结果

```
执行用时 :68 ms, 在所有 javascript 提交中击败了90.45%的用户
内存消耗 :34.8 MB, 在所有 javascript 提交中击败了33.61%的用户
```

## GitHub仓库

[1. 两数之和](https://github.com/moshuying/leetcode-cn/blob/master/leetcode/1.%20Two%20Sum/index.js)