[TOC]
# 前端与算法 leetcode 283. 移动零
---
# 题目描述
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

[283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)
# 概要

# 提示
双指针
# 解析
## 解法一：哈希表
时间复杂度O(n)
先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。如果value值等于1，则删除该元素。[[2]]
## 解法二:双指针
将两个数组排序,两个指针初始值为0,比较两个指针的元素是否相等相等则放到返回数组里,两个指针同时往前,不相等元素小的指针往前,如果相等,那肯定比较过的元素就没用了,两个指针往前,不相等的时候**因为较大的元素在较小的数组里存在**所以把元素小的数组指针往前
## 解法三:暴力法
时间复杂度O(n^2)
遍历第一个数组,然后再第二个数组查找`indexOf`是否有当前元素

### 算法
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
// hash法
  const [hash,res] = [new Map(),[]]
  nums1.forEach(el=>{
    if (hash.has(el)) {
      hash.set(el, hash.get(el) + 1)
    } else {
      hash.set(el, 1)
    }
  })
  nums2.forEach(el=>{
    const hashKey = hash.get(el)
    if (hash.has(el)) {
      res.push(el)
      if (hashKey > 1) {
        hash.set(el, hashKey - 1)
      } else {
        hash.delete(el)
      }
    }
  })
  return res
//   // 双指针法
//   let p1 = 0
//   let p2 = 0
//   let res = []
//   nums1 = nums1.sort((a, b) => a - b)
//   nums2 = nums2.sort((a, b) => a - b)
//   while (p1 < nums1.length && p2 < nums2.length) {
//     if (nums1[p1] == nums2[p2]) {
//       res.push(nums1[p1])
//       p1++
//       p2++
//     } else if (nums1[p1] < nums2[p2]) {
//       p1++
//     } else {
//       p2++
//     }
//   }
//   return res
//   // 暴力法
// const res = []
// if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1]
// for (let i = 0; i < nums1.length; i++) {
//   const key = nums2.indexOf(nums1[i])
//   if (key !== -1) res.push(nums2.splice(key, 1))
// }
// return res
}
```
传入`[1, 2], [11, 1, 2, 3, 2]`的运行结果
```sh
[ 1, 2 ]
```
执行结果
```sh
执行用时 :56 ms, 在所有 javascript 提交中击败了99.55% 的用户
内存消耗 :34.7 MB, 在所有 javascript 提交中击败了53.72%的用户
```
<!-- leetcode,leetcode-cn,[J],283. 移动零, -->
[1]:https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/wei-shi-yao-yong-map-by-vailing-2/
<!-- leetcode,leetcode-cn,[J],350. 两个数组的交集 II, -->
[2]:https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/js-xie-leetcode-by-zhl1232/