[TOC]
# 前端与算法 leetcode 26. 删除排序数组中的重复项
---
# 题目描述
[26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/)
# 概要
一提到原地删除数组,就能立即想到双指针法,这道题本身也没什么难度,日常水题,
# 提示
双指针
# 解析
没有思路的时候,耐心一点即可

### 算法
```js

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  if (nums.length < 2 && nums[0] !== nums[1]) return 2
  let i = 0
  for (j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}
```
传入`112`的运行结果
```sh
2
```
执行结果
```sh
执行用时 :76 ms, 在所有 javascript 提交中击败了97.75% 的用户
内存消耗 :36.4 MB, 在所有 javascript 提交中击败了92.29%的用户
```


