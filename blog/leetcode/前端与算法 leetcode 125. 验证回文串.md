[TOC]
# 前端与算法 leetcode 125. 验证回文串
---

## 题目描述
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
```
输入: "A man, a plan, a canal: Panama"
输出: true
```
示例 2:
```
输入: "race a car"
输出: false
```
[125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome)

## 概要

注意题目中提到的只考虑字母和数字字符以及忽略字母的大小写

## 提示

双指针

## 解析

### 解法一:api侠

通过疯狂调用api可以解决该问题,但是速度比较慢

### 解法二:双指针

题目说了考虑字母和数字,忽略大小写,可以先将原来的字符串通过正则替换掉随后全部转换为小写
再设置头尾两个指针一次比对,一旦不一致就返回false

## 算法

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // s = s.match(/\w/g);
  // if (s === null || s.length <= 1) {return true;}
  // return s.join('').toLowerCase() === s.reverse().join('')
  //   .toLowerCase();
  // 双指针法
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let [i, j] = [0, s.length - 1];
  while (i <= j) {
    if (s.charAt(i++) !== s.charAt(j--)) {return false;}
  }
  return true;
};
```

## 传入测试用例的运行结果

```sh
input:"A man, a plan, a canal: Panama"
output:true
```

## 执行结果

```
执行用时 :64 ms, 在所有 javascript 提交中击败了99.91%的用户
内存消耗 :37.3 MB, 在所有 javascript 提交中击败了72.83%的用户
```

### GitHub仓库

[125. 验证回文串](https://github.com/moshuying/AlgorithmAndBlog)

### 查看更多

[查看更多题解](http://sfau.lt/bPbzVVJ)