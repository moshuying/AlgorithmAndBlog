/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let temp = nums1.concat(nums2)
    temp.sort((item1,item2)=>{
        return item1-item2
    })
    if(temp.length===1)return temp[0]
    if((temp.length+1)%2===0){
        return temp[(parseInt(temp.length+1)/2-1)]
    }else{
        return (temp[parseInt((temp.length-1)/2)]+temp[parseInt((temp.length-1)/2)+1])/2
    }
};