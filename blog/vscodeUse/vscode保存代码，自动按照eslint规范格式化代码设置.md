
# vscode保存代码，自动按照eslint规范格式化代码设置
---
>编辑器代码风格一致，是前端代码规范的一部分。同一个项目，或者同一个小组，保持代码风格一致很必要。就拿vue项目来说，之前做的几个项目，很多小伙伴代码格式化用的是vue-beautify ,这个格式化工具有个明显的缺点，就是三元不等式明明可以一行显示，非得格式化成3行，import用{}引入多个变量或者函数，非得格式化成好几行，看起来很是别扭。因此，好的格式化工具和团队代码风格一致，显得格外重要。我建议我们整个小组运用同一个编辑器，同一种代码校验，同一个格式化方式。下面我来介绍一下使用vscode+eslint 自动保存，自动格式化的一种方式！

## eslint 自动格式化

先说一个前提吧，你在package.json中安装了eslint的依赖，不然配置无用。

```json
"eslint": "^6.1.0",
"eslint-friendly-formatter": "^6.4.1",
"eslint-loader": "^6.4.1",
"eslint-plugin-html": "^6.4.1",
```

上面说的是一个前提，下面来说一下具体的配置步骤：


**首先**，在我们项目跟目录添加.eslintrc.js 文件，用于校验代码，编写eslint相关规则，关于eslint的一些具体规则，请查看eslint文档


下面列一下我们项目中常用的eslint规则：

```json

module.exports = {
root: true,
//　添加插件
"plugins": [
"vue"
],
'extends': [
'plugin:vue/essential',
'@vue/standard'
],
rules: {
// allow async-await
'generator-star-spacing': 'off',
// allow debugger during development
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
'vue/no-parsing-error': [2, {
'x-invalid-end-tag': false
}],
'no-undef': 'off',
'camelcase': 'off',
// 允许控制台输出
'no-console': 'off',
'accessor-pairs': 2,
'arrow-spacing': [2, { 'before': true, 'after': true }],
'block-spacing': [2, 'always'],
'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
// 'camelcase': [2, { 'properties': 'always' }],
'comma-dangle': [2, 'never'],
'comma-spacing': [2, { 'before': false, 'after': true }],
'comma-style': [2, 'last'],
'constructor-super': 2,
'curly': [2, 'multi-line'],
'dot-location': [2, 'property'],
'eol-last': 2,
'eqeqeq': [2, 'allow-null'],
'generator-star-spacing': [2, { 'before': true, 'after': true }],
'handle-callback-err': [2, '^(err|error)$' ],
'indent': [2, 2, { 'SwitchCase': 1 }],
'jsx-quotes': [2, 'prefer-single'],
'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
'keyword-spacing': [2, { 'before': true, 'after': true }],
'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
'new-parens': 2,
'no-array-constructor': 2,
'no-caller': 2,
'no-class-assign': 2,
'no-cond-assign': 2,
'no-const-assign': 2,
'no-control-regex': 2,
'no-delete-var': 2,
'no-dupe-args': 2,
'no-dupe-class-members': 2,
'no-dupe-keys': 2,
'no-duplicate-case': 2,
'no-empty-character-class': 2,
'no-empty-pattern': 2,
'no-eval': 2,
'no-ex-assign': 2,
'no-extend-native': 2,
'no-extra-bind': 2,
'no-extra-boolean-cast': 2,
'no-extra-parens': [2, 'functions'],
'no-fallthrough': 2,
'no-floating-decimal': 2,
'no-func-assign': 2,
'no-implied-eval': 2,
'no-inner-declarations': [2, 'functions'],
'no-invalid-regexp': 2,
'no-irregular-whitespace': 2,
'no-iterator': 2,
'no-label-var': 2,
'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
'no-lone-blocks': 2,
'no-mixed-spaces-and-tabs': 2,
'no-multi-spaces': 2,
'no-multi-str': 2,
'no-multiple-empty-lines': [2, { 'max': 1 }],
'no-native-reassign': 2,
'no-negated-in-lhs': 2,
'no-new-object': 2,
'no-new-require': 2,
'no-new-symbol': 2,
'no-new-wrappers': 2,
'no-obj-calls': 2,
'no-octal': 2,
'no-octal-escape': 2,
'no-path-concat': 2,
'no-proto': 2,
'no-redeclare': 2,
'no-regex-spaces': 2,
'no-return-assign': [2, 'except-parens'],
'no-self-assign': 2,
'no-self-compare': 2,
'no-sequences': 2,
'no-shadow-restricted-names': 2,
'no-spaced-func': 2,
'no-sparse-arrays': 2,
'no-this-before-super': 2,
'no-throw-literal': 2,
'no-trailing-spaces': 2,
'no-undef': 2,
'no-undef-init': 2,
'no-unexpected-multiline': 2,
'no-unmodified-loop-condition': 2,
'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
'no-unreachable': 2,
'no-unsafe-finally': 2,
'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
'no-useless-call': 2,
'no-useless-computed-key': 2,
'no-useless-constructor': 2,
'no-useless-escape': 0,
'no-whitespace-before-property': 2,
'no-with': 2,
'one-var': [2, { 'initialized': 'never' }],
'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
'padded-blocks': [2, 'never'],
'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
'semi': [2, 'never'],
'semi-spacing': [2, { 'before': false, 'after': true }],
'space-before-blocks': [2, 'always'],
'space-before-function-paren': [2, 'always'],
'space-in-parens': [2, 'never'],
'space-infix-ops': 2,
'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
'template-curly-spacing': [2, 'never'],
'use-isnan': 2,
'valid-typeof': 2,
'wrap-iife': [2, 'any'],
'yield-star-spacing': [2, 'both'],
'yoda': [2, 'never'],
'prefer-const': 2,
'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
'array-bracket-spacing': [2, 'never'],
'vue/jsx-uses-vars': 2
},
parserOptions: {
parser: 'babel-eslint'
}
}
```

其次，vscode中添加eslint：
如图所示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190809222244819.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODQ2NjYy,size_16,color_FFFFFF,t_70)


安装好了之后，会自动根据你上面配置的规则进行代码检查，不合格的会高亮显示，如下图：



经过上面步骤，目前保存还不能自动格式化，下面说下如何自动格式化！

## 自动格式化设置

>1、window电脑：文件 > 首选项 > 设置 打开 VSCode 配置文件
>2、mac电脑code>首选项 >设置


我的设置如下：
```json
{
  "workbench.colorTheme": "Material Theme",
  "window.zoomLevel": 0,
  "liveServer.settings.donotShowInfoMsg": true,
  "git.enableSmartCommit": true,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "all",
  "editor.renderControlCharacters": true,
  "breadcrumbs.enabled": true,
  "workbench.activityBar.visible": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "html",
    "vue"
  ],
  "explorer.confirmDelete": false,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

这样，你就可以保存自动按照配置格式化代码了，体验如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190809222213168.png)


## 关闭eslint检查

1、vue create的项目在vue.config.js中lintOnSave: false
2、以前的项目，vue init webpack的config/index.js 文件。 将useEslint: true 设置为useEslint: false 


## 其他推荐
其他团队也有自己的代码规范方式例如饿了么团队：https://www.npmjs.com/package/eslint-config-elemefe
vue团队：https://github.com/vuejs/eslint-config-vue
关于vscode扩展插件，目前通用的，不错的推荐看这篇文章：https://github.com/varHarrie/Dawn-Blossoms/issues/10
