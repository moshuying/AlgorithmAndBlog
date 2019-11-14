/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-10-23 10:57:29
 * @LastEditTime :2019-10-24 20:19:39
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === '') return 0
  let [i, j] = [0, 0]
  const next = []
  const nextfuc = (p, next) => {
    next[0] = -1
    let [j, k] = [0, -1]
    while (j < p.length - 1) {
      if (k === -1 || p[j] === p[k]) {
        if (p[++j] === p[++k]) {
          next[j] = next[k]
        } else {
          next[j] = k
        }
      } else {
        k = next[k]
      }
    }
  }
  nextfuc(needle, next)
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === needle.length) {
    return i - j
  } else {
    return -1
  }
}
console.log(strStr('aa', 'aaaa'))
