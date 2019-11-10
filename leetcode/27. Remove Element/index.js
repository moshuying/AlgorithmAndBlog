/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-23 08:44:17
 * @LastEditTime :2019-10-23 10:32:08
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
const arr = [1, 3, 9, 6]
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (nums.length === 0) return 0
  let { length } = nums
  let [i, j] = [0, 0]
  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    } else {
      length--
    }
    j++
  }
  nums.length = length
  return length
}
console.time('start')
console.log(removeElement(arr, 3))
console.timeEnd('start')
console.log(arr)
