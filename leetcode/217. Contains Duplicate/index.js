/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-28 17:29:36
 * @LastEditTime :2019-10-28 17:45:26
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => [...new Set(nums)].length !== nums.length
