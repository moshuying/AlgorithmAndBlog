/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-23 14:29:32
 * @LastEditTime :2019-10-25 10:03:19
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :KMP算法的javascript实现
 */
const KMP = (haystack, needle) => {
  if (needle === '') return 0
  let [i, j] = [0, 0]
  const next = []
  const nextfuc = (p, next) => {
    next[0] = -1
    let [j, k] = [0, -1]
    while (j < p.length - 1) {
      if (k === -1 || p[j] === p[k]) {
        if (p[++j] === p[++k]) next[j] = next[k]
        else next[j] = k
      } else {
        k = next[k]
      }
    }
    console.log(next)
  }
  nextfuc(needle, next)
  // i===haystack.length时表示主串匹配完成,j===needle.length时表示子串匹配成功
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      // 失配时i不变,j回到next[j]的位置上
      j = next[j]
    }
  }
  if (j === needle.length) {
    // 匹配成功时i总是从字符串开始到匹配结束的位置,j总是为子串的长度
    return i - j
  } else {
    return -1
  }
}
console.time('start')
console.log(KMP('aacab/' +
    'aacd', '/'))
console.timeEnd('start')
