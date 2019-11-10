/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 18:45:56
 * @LastEditTime :2019-11-10 19:21:26
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
// 执行用时 :68 ms, 在所有 javascript 提交中击败了95.54%的用户
// 内存消耗 :37.2 MB, 在所有 javascript 提交中击败了5.10%的用户
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let count = 0 // 统计0的个数
  // const res = [] // 返回的数组
  // nums.forEach(el => el === 0 ? count++ : res.push(el))
  // for (let i = 0; i < count; i++) {
  //   res.push(0)
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = res[i]
  // }
  for (let [i, j] = [0, 0]; i < nums.length; i++) {
    console.log(nums, i, j)
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
}
const temp = [0, 1, 0, 3, 12]
moveZeroes(temp)
console.log(temp)
