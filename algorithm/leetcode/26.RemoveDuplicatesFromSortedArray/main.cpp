/*
 * #Description :墨抒颖
 * #Author :墨抒颖
 * #Date :2019-10-28 08:57:42
 * #LastEditTime :2019-10-28 09:05:01
 * #LastEditors :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :https://blog.csdn.net/qq_34846662
 * #Use :使用说明
 */
#include <iostream>
using namespace std;
int removeDuplicates(int* nums, int numsSize){
    if(numsSize == 0 ){ return 0;}
    if(numsSize==1){return 1;}
    int i = 0;
    for(int j = 1;j<numsSize;j++){
        if(nums[j]!=nums[i]){
            nums[++i] = nums[j];
        }
    }
    return i+1;
}
int main(){
  cout<<removeDuplicates()<<endl;
}