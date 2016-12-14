# 豆瓣电影项目 - 项目计划

## 项目描述
- 电影网站，用于分类展示电影简要信息，亦可查询查看详细信息
- 数据来源：豆瓣电影API

## 项目定位
- SPA、PC端

## 技术栈
- Angular
- Git 分布式版本控制软件
- Gulp 自动构建工具(项目上线时考虑js是否合并，less是否转换成css等)

## 项目结构

```
.
├── app(开发目录，也叫src)
│   ├── index.html(SPA页面)
│   ├── app.js(主模块)
│   ├── assets(基本的css，img，和js)
│   │   ├── css
│   │   ├── img
│   │   └── js
│   ├── common(公共资源，一些公用的服务和指令之类的)
│   │   ├── directives
│   │   └── services
│   ├── home(主页模块)
│   │   └── module.js
│   │   └── view.html
│   └── movie_detail(电影详情页模块)
│   │   └── module.js
│   │   └── view.html
│   └── movie_list(电影列表模块)
│       └── module.js
│       └── view.html
├── node_modules(angular包文件)
├── .gitignore(git忽略文件)
├── gulpfile.js(gulp文件)
├── package.json(npm自动生成文件，里面存放着依赖项，npm init自动生成，npm install 自动下载依赖项文件)
└── README.md(文件基本描述)

```

## 参考资料
- [.editorconfig说明](http://www.alloyteam.com/2014/12/editor-config/)