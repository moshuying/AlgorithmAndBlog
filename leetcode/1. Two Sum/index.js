/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 20:59:37
 * @LastEditTime :2019-11-10 21:31:50
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力法
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+1;j<nums.length;j++){
    //         if(nums[i]===target-nums[j]) return [i,j]
    //     }
    // }
    // return []
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(map.has(target - nums[i])) return [map.get(target - nums[i]),i]
        map.set(nums[i],i)
    }
};
let test = [2, 7, 11, 15]
console.log(twoSum(test,9))