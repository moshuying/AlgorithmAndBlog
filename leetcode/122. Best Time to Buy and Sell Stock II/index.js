/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-28 09:52:14
 * @LastEditTime :2019-10-28 11:45:16
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let count = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      count = count + prices[i + 1] - prices[i]
    }
  }
  return count
}
console.log(maxProfit([1, 2, 3, 4, 5, 6]))
