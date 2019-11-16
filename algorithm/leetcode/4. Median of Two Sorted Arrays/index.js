/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 19:19:51
 * @LastEditTime :2019-11-16 12:05:05
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let temp = nums1.concat(nums2);
  temp.sort((item1, item2) => item1 - item2);
  if (temp.length === 1) {return temp[0];}
  if ((temp.length + 1) % 2 === 0) {
    return temp[(parseInt(temp.length + 1, 10) / 2 - 1)];
  } else {
    return (temp[parseInt((temp.length - 1) / 2, 10)] + temp[parseInt((temp.length - 1) / 2, 10) + 1]) / 2;
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
