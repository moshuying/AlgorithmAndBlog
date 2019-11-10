/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-28 09:05:40
 * @LastEditTime :2019-10-28 09:14:31
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  if (nums.length < 2 && nums[0] !== nums[1]) return 2
  let i = 0
  for (j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}

console.log(removeDuplicates([1, 1, 2]))
