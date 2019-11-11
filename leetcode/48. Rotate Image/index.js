/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-11 13:29:03
 * @LastEditTime :2019-11-11 13:41:47
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // 使用数组暂存
    // const len = matrix.length - 1;
    // let changeRow = [];
    // for (var i = 0; i <= len; i++) {
    //     for (var j = 0; j <= len; j++) {
    //         changeRow[j] = changeRow[j] || [];
    //         changeRow[j][len - i] = matrix[i][j];
    //     }
    // }
    // matrix.length = 0;
    // matrix.push(...changeRow); // 重写
    // 原数组操作
    let len = matrix.length - 1;
    for (let row = 0;row < len / 2;row++) {
        for (let col = row;col < len - row;col++) {
            let tmp = matrix[row][col];
            matrix[row][col] = matrix[len - col][row];
            matrix[len - col][row] = matrix[len - row][len - col];
            matrix[len - row][len - col] = matrix[col][len - row];
            matrix[col][len - row] = tmp;
        }
    }
    // 官方题解
    // let len = matrix.length;
    // // 转置矩阵
    // for (let i = 0;i < len;i++) {
    //     for (let j = i;j < len;j++) {
    //         [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    //     }
    // }
    // // 翻转行
    // for (let i = 0;i < len;i++) {
    //     for (let j = 0;j < len / 2;j++) {
    //         [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]];
    //     }
    // }
};
let temp = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(temp);
console.log(temp);
// 执行用时 :60 ms, 在所有 javascript 提交中击败了90.96%的用户
// 内存消耗 :33.4 MB, 在所有 javascript 提交中击败了95.92%的用户
