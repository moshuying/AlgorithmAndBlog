class Solution {
  private static void rotate(int[][] matrix) {
    int len = matrix.length;
    for(int i = 0;i<len;i++){
      for(int j = i;j<len;j++){
        int temp = matrix[j][i];
        matrix[j][i]=matrix[i][j];
        matrix[i][j]= temp;
      }
    }
    for(int i = 0;i<len;i++){
      for(int j = 0;j<len/2;j++){
        int temp = matrix[i][j];
        matrix[i][j]=matrix[i][len-j-1];
        matrix[i][len-j-1]= temp;
      }
    }
  }
  public static void main(String[] args) {
    int[][] tp = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    rotate(tp);
    for(int i=0;i<tp.length;i++){
      for(int j=0;j<tp[i].length;j++){
        System.out.print(tp[i][j]+" ");
      }
      System.out.print(" : ");
    }
  }
}
