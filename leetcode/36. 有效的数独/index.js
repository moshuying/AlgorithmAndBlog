/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 22:25:48
 * @LastEditTime :2019-11-11 12:53:23
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// eslint-disable-next-line complexity
var isValidSudoku = function (board) {
    let [rows, columns, boxes] = [[], [], []];
    for (let i = 0; i < 9; i++) {
        rows[i] = {};
        columns[i] = {};
        boxes[i] = {};
    }
    const fun = (r, x, y) => (r[x][y] ? r[x][y]++ : (r[x][y] = 1));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num !== '.') {
                let n = parseInt(num, 10);
                // js中1/3*3计算结果为1 但是按理说应该是0.999无限(浮点误差) 而java中1/3*3则取值为0,浮点数默认舍去0
                let boxix = Math.floor(Math.floor((i / 3)) * 3) + Math.floor(j / 3);
                fun(rows, i, n);
                fun(columns, j, n);
                fun(boxes, boxix, n);
                if (rows[i][n] >= 2 || columns[j][n] >= 2 || boxes[boxix][n] >= 2) {
                    return false;
                }
            }
        }
    }
    return true;
};
console.log(
    isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
);
