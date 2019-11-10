/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-05 19:20:17
 * @LastEditTime :2019-11-05 19:34:06
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const re = []
  for (let i = 0; i < nums.length; i++) {
    re[(i + k) % nums.length] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) {
    nums[j] = re[j]
  }
}
console.log(rotate([1, 2, 3, 4, 5], 2))
