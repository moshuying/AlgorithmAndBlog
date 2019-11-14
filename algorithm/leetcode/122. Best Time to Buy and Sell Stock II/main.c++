/*
 * #Description :墨抒颖
 * #Author :墨抒颖
 * #Date :2019-10-28 09:52:22
 * #LastEditTime :2019-10-28 11:42:20
 * #LastEditors :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :https://blog.csdn.net/qq_34846662
 * #Use :使用说明
 */
#include <iostream>
using namespace std;
int maxProfit(int* prices, int pricesSize){
    int count=0;
    for(int i=0;i<pricesSize-1;i++){
        if(prices[i+1]>prices[i]){
            count+=prices[i+1]-prices[i];
        }
    }
    return count;
}

int main(){
    int size = 6;
    int arr[7]={1,2,3,4,5,6};
    int *p = arr;
    cout<<maxProfit(p,size)<<endl;
    return 0;
}