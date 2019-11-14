/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 00:07:35
 * @LastEditTime :2019-11-10 08:20:10
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
// hash法
  const hash = new Map()
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    if (hash.has(nums1[i])) {
      hash.set(nums1[i], hash.get(nums1[i]) + 1)
    } else {
      hash.set(nums1[i], 1)
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const temp = nums2[i]
    const hashKey = hash.get(temp)
    if (hash.has(temp)) {
      res.push(temp)
      if (hashKey > 1) {
        hash.set(temp, hashKey - 1)
      } else {
        hash.delete(temp)
      }
    }
  }

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
//   const res = []
//   if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1]
//   for (let i = 0; i < nums1.length; i++) {
//     const key = nums2.indexOf(nums1[i])
//     if (key !== -1) res.push(nums2.splice(key, 1))
//   }
//   return res
}
console.log(intersect([1, 2], [11, 1, 2, 3, 2]))
