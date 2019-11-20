@[TOC](目录)
# Mock.js
---
生成随机数据，拦截 Ajax 请求

> Mock.js特点 [来自Mock.js的官方网站](http://mockjs.com/)
1. 前后端分离
2. 开发无侵入
3. 数据类型丰富
4. 增减单元测试的真实性
5. 用法简单
6. 方便扩展

建议先看完官方文档再来继续阅读这里,绝大多数问题都在官方文档中有解释

### iviewAdmin中Mock.js使用范例

```js
import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
import orgData from './data/org-data'
import { treeData } from './data/tree-select'
const Random = Mock.Random
export const getWherehouse = req => {
let Wherehouse = []
let i = 0
doCustomTimes(50, () => {
    // push时单独调用Mock,无法使用Mock的自增函数,只好曲线救国了
    i++
    Wherehouse.push(Mock.mock({
            'No': i,
            'itemName': '@cname',
            'codding': 'PCDE-@natural(00001,10000)',
            'price': '@natural(50,10000)',
            'updatetime': '@datetime',
            'notes': '这是无关紧要的随机备注:@cword(10)'
        }))
    })
    return Wherehouse
}
```

