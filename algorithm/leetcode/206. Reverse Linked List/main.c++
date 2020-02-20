
#include <iostream>
using namespace std;
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
ListNode* reverseList(ListNode* head) {
    cout<<head->val<<endl;
    return new ListNode(1);
}
int main(){
    ListNode * temp =new ListNode(10);
    ListNode * res = reverseList(temp);
    
    cout << res->val << endl;
    // cout << temp.val << endl;
    return 0;
}
