/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 18:45:56
 * @LastEditTime :2019-11-10 19:46:04
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针法
  for (let [i, j] = [0, 0]; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
  // 暴力法
  // let count = 0 // 统计0的个数
  // const res = [] // 返回的数组
  // nums.forEach(el => el === 0 ? count++ : res.push(el))
  // for (let i = 0; i < count; i++) {
  //   res.push(0)
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = res[i]
  // }
}
const temp = [0, 1, 0, 3, 12]
moveZeroes(temp)
console.log(temp)
