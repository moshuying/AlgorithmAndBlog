[TOC]
# 前端与算法 leetcode 
---

## 题目描述

[350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

## 概要

## 提示

## 解析

### 解法一

### 解法二

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
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(map.has(target - nums[i])) return [map.get(target - nums[i]),i]
        map.set(nums[i],i)
    }
};
```

## 传入`[1, 2], [11, 1, 2, 3, 2]`的运行结果

```sh
[ 1, 2 ]
```

## 执行结果

```
执行用时 :68 ms, 在所有 javascript 提交中击败了90.45%的用户
内存消耗 :34.8 MB, 在所有 javascript 提交中击败了33.61%的用户
```

## GitHub仓库

[350. 两个数组的交集 II](https://github.com/moshuying/leetcode-cn/blob/master/leetcode/350.%20Intersection%20of%20Two%20Arrays%20II/index.js)
<!-- ## 引用列表 -->
<!-- leetcode,leetcode-cn,[J],350. 两个数组的交集 II, -->