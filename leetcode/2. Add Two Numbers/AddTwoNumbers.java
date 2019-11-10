package AddTwoNumbers;
class ListNode {
  int val;
  ListNode next;
  ListNode(int x){val = x;}
}
public class AddTwoNumbers{
  public static void main(String[] args) {
    ListNode L1 = init(243);
    ListNode L2 = init(564);
    System.out.println(addTwoNumbers(L1,L2).next.next.val);
      System.out.println(addTwoNumbers(L1,L2).next.val);
      System.out.println(addTwoNumbers(L1,L2).val);
  }
  public static ListNode addTwoNumbers(ListNode l1,ListNode l2){
      ListNode re = init(toNumber(l1)+toNumber(l2));
      return re;
  }
  public static int toNumber(ListNode L1){
      int temp = 0;
      temp+=L1.val;
      temp*=10;
      temp+=L1.next.val;
      temp*=10;
      temp+=L1.next.next.val;
      return temp;
  }
  public static ListNode init(int num1){
      ListNode temp1 = new ListNode(num1%10);
      num1/=10;
      temp1.next=new ListNode(num1%10);
      num1/=10;
      temp1.next.next=new ListNode(num1);
    return temp1;
  }
}