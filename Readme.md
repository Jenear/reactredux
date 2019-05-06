# react 技术栈

- react react-router4 redux react-redux

## 初始化 package.json

```
npm init -y
yarn init -y
```

## webpack

```
npm install webpack webpack-dev-server -D
yarn add webpack webpack-dev-server --dev
yarn add webpack webpack-dev-server -D
```

## babel babel 解析

```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin --save-dev
npm add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin --dev
npm add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```

## react

```
npm install react redux react-redux react-router-dom --save
yarn add react redux react-redux react-router-dom
```

## fetch 获取数据

```
npm install es6-promise whatwg-fetch -D
yarn add es6-promise whatwg-fetch -D
fetch是基于promise的
es6-promise如果浏览器不支持es6的promise，用它来实现，whatwg-fetch如果fetch不兼容，这个包可以把fetch转为ajax，如果都支持，这两个包就没有用了
```

## express--后台

```
npm install express -S
yarn add express
```

## scripts

```
"start":"webpack-dev-server --port 5000 --open --progress -colors",
"build":"webpack -p"
--port 5000:改变端口
--progress -colors:增加进度条和颜色
-p:打包后的文件整体压缩
```

## 链接 git 仓库

```
github上新建一个仓库，
然后在项目上进行：git init 命令
然后再输入：git remote add origin https://github.com/Jenear/reactredux.git，
此时就连上了git仓库，可以进行代码提交
```
