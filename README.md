# vue-routine
一个简单的vue套路

```
npm i
gulp
gulp watch
npm start
```

### 依据现有项目 一个vue的目录结构为：
* src/
* src/index.html            项目页面的结构以及引入各种杂七杂八外链资源
* src/index.js              引入组件，处理路由
* src/components/           组件 一个文件夹为一个组件
* src/components/XXX.js     组件的配置
* src/components/XXX.scss   组件外观的描述
* src/components/XXX.html   组件的DOM结构
* src/views/                页面 一个文件夹为一个页面（基本结构同上）

| 目录 | 备注|
|-----|-----|
|src/index.html|项目页面的结构以及引入各种杂七杂八外链资源|
|src/index.js|引入组件，处理路由|
|src/components/|组件 一个文件夹为一个组件|
|src/components/XXX.js|组件的配置|
|src/components/XXX.scss|组件外观的描述|
|src/components/XXX.html|组件的DOM结构|
|src/views/|页面 一个文件夹为一个页面（基本结构同上）|
|public|js生成到这里|
|views|html生成到这里|

### 想说点啥。。。
使用了 css modules 和 sass，但是因为 css modules 无法直接使用sass，所以在调用webpack之前，用gulp编译了一下 sass 并存储在sass文件的同级目录、相同名称、不同后缀，所以在（组件、页面）中的js里可以直接使用 `require(XXX.css)` 而不需要引用 scss|sass
