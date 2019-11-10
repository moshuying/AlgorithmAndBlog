/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-27 09:54:33
 * @LastEditTime :2019-10-27 10:01:43
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trappingRainWater = height => {
  if (height.length < 1) return 0
  let [left, right, ans, leftMax, rightMax] = [0, height.length - 1, 0, 0, 0]
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (ans += leftMax - height[left])
      ++left
    } else {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (ans += rightMax - height[right])
      --right
    }
  }
  return ans
}
console.log(trappingRainWater([0, 1, 2, 3, 4, 5, 3, 2, 1, 5]))
