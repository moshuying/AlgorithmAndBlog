/*
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-21 22:03:38
 * @LastEditTime :2019-11-21 22:11:52
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
class Solution {
  public int myAtoi(String str) {
      if(str.isEmpty()) return 0 ;
      char[] req = str.toCharArray();
      long res = 0;
      int i=0,s=1,n=str.length();
      while(i<n&&req[i]==' '){i++;}
      if(i<n && req[i]=='+'){i++;}
    else if(i<n&&req[i]=='-'){i++;s=-1;}
    while(i<n&&(req[i]>='0'&&req[i]<='9')){
      if(res!=(int)res){
        return (s==1)?Integer.MAX_VALUE:Integer.MIN_VALUE;
      }
      res=res*10+req[i++]-'0';
    }
    if(res!=(int)res){
      return (s==1)?Integer.MAX_VALUE:Integer.MIN_VALUE;
    }
    return (int)(res*s);
  }
}