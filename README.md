# template

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# template
内置 vue-cli、vue-router、axios、less、less-loader、vant、dayjs，实际开发不够用，自行添加。


## 目录结构

- build // 脚手架 webpack 配置文件
- config // 脚手架配置文件
- src // 项目源码
  - assets // 静态资源
    - images // 图片资源
    - less // 全局 less 配置
  - components // 全局共用组件
    - base // 内置基础组件，已全局引入，直接谁用即可 例子：<h-container></h-container>
    - ImagePreview // 内置图片预览器组件
    - ... // 如有新增，同级新增即可
  - config // 项目配置文件
    - ajaxConfig // ajax 配置
    - vantComponents // vant 组件全局引入配置
  - filters // vue 过滤器
  - i18n // 国际化配置
  - pages // 项目页面配置文件
    - index // 默认创建的主项目
      - components // 项目组件
      - router // vue-router 配置
      - views // 路由对应页面
      - App.vue // 主页面
      - index.html // html 模板
      - index.js // 项目入口
    - // 项目已进行多页面改造，如有需要，创建同级目录即可使用
  - service // ajax 配置
  - utils // 通用工具方法
- static // 项目依赖外部资源

### 增加 static/config 文件夹

webpack 配置已配制好，打包后自动引入对应 js 文件

- development.js 开发环境配置文件
- production.js 生产环境配置文件

### 增加 eslint
