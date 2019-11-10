/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 22:25:48
 * @LastEditTime :2019-11-10 23:47:23
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
    let E = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    rows.forEach((el) => el = E);
    columns.forEach((el) => el = E);
    boxes.forEach((el) => el = E);
    const func = (key) => {
        if (key) {
            return 1;
        } else {
            return key + 1;
        }
    };
    for (let i = 0;i < 9;i++) {
        for (let j = 0;j < 9;j++) {
            let num = board[i][j];
            if (num !== '.') {
                num = parseInt(num, 10);
                let boxix = Math.round((i / 3) * 3 + j / 3); // parseInt((i / 3) * 3 + j / 3, 10);
                rows[i][num] = func(rows[i][num]);
                columns[j][num] = func(columns[j][num]);
                boxes[boxix][num] = func(boxes[boxix][num]);
                if (rows[i][num] > 1 || columns[j][num] > 1 || boxes[boxix][num] > 1) {return false;}
            }
        }
    }
    return true;
};
console.log(isValidSudoku([['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]));
