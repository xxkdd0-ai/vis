# 第 6 章：页面布局

本目录就是可以直接放入 `vis/lesson-06/` 的最终前端源码。

## 文件

- `index.html`：第六章页面与全部课程内容
- `style.css`：页面样式与响应式布局
- `script.js`：Tab 切换与所有交互 Demo

## 本地预览

直接双击 `index.html` 即可预览。也可以在项目根目录执行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/lesson-06/`。

## GitHub Pages

将本目录中的三个文件复制到：

```text
vis/lesson-06/
├── index.html
├── style.css
└── script.js
```

如果仓库已经开启 GitHub Pages，部署后页面地址通常为：

`https://你的用户名.github.io/vis/lesson-06/`

本章的章节导航使用相对路径 `../lesson-xx/`，因此放入 `vis/lesson-06/` 后即可与同级章节目录配合使用。

## 技术

纯前端：HTML + CSS + 原生 JavaScript，无后端、无构建工具、无 npm 依赖。
