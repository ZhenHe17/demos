# breadcrumb-demo

> 一个实现Vue单页应用-面包屑路由的demo，支持浏览器的前进后退键，能够暂存页面数据并在获取新数据后更新页面数据。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

接口使用[JSON Server](https://github.com/typicode/json-server)，使用目录下的db.json作为数据源。
```
$ npm install -g json-server
$ json-server --watch db.json
```
默认端口http://localhost:3000，接口模拟延迟600ms
