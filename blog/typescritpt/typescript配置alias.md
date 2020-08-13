# typescript 配置 alias

1 安装依赖

```sh
npm install --save-dev babel-plugin-module-resolver
# yarn add babel-plugin-module-resolver --dev
```

根目录新增`.babelrc`文件
参考以下内容按您项目中的需要去修改

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@/actions": "./actions",
          "@/components": "./components",
          "@/constants": "./constants",
          "@/pages": "./pages",
          "@/public": "./public",
          "@/reducers": "./reducers",
          "@/utils": "./utils"
        }
      }
    ]
  ]
}
```

修改`tsconfig.json`文件

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["./components/*"],
      "@pages/*": ["./pages/*"],
      "@public/*": ["./public/*"]
    }
  }
}
```
注意`"baseUrl": "./",`不能省去，否则ts报`Option 'paths' cannot be used without specifying '--baseUrl' option.`错误

next.js中配置alias也可以参考如上步骤