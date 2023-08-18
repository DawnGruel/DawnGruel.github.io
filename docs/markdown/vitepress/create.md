# 搭建自己的VitePress

文档编撰时使用的[VitePress]版本<Badge type="danger" text="v1.0.0-beta.3" />

## 前言

::: details 这段并不重要，当然想看也可以

  曦粥工作从2017年到如今2023年了，从来没有好好整理过自己的博客和文档，自己太懒了。

  最近有些时间决定开始好好搭建自己的博客了。

  当然写这段不是真的闲的无聊，我是在实验这个内置插件，看完就收起吧~。
  :::

## 合适的工具

  第一个想到的是使用vue的[VuePress], 因为之前有使用该工具搭建过
  
  然而在准备着手准备搭建项目的时候，发现vue3更新后，出了新的[VitePress]，
  
  那这还想啥，即便是**beta**版本那也上啊，虽然vue3还没好好看看，但是新东西当然要上新工具.

::: tip
  **用即是学，光看文档没卵用**。
:::

## 选择平台

  [GITHUB] + [GitHub-Page]这个组合是我这次的目标。

## 正式构建

  工具和目标平台已经有了，前期的工作已经准备完毕，接下来先查看GitHub-Page相关的描述

### GitHub平台配置注意事项

创建存储库  
前往GitHub并创建一个名为username.github.io 的新公共存储库，其中username是您在 [GITHUB]上的用户名（或组织名称）。

如果存储库的第一部分与您的用户名不完全匹配，它将无法工作，因此请确保正确。
::: tip 例如我的网站
[曦粥的博客-https://dawngruel.github.io]
:::
当然我起名的仓库名是有大小写的（DawnGruel），不过访问时http都是小写

### 安装VitePress

::: code-group
``` sh[npm]
$ npm install -D vitepress

```
``` sh[pnpm]
$ pnpm add -D vitepress
```

``` sh[yarn]
$ yarn add -D vitepress

```
:::

### 设置向导

VitePress 附带一个命令行设置向导，可帮助您构建基本项目。安装后，通过运行以下命令启动向导：  
<img src="../../src/img/vitepress-init.png" alt="vitepress初始化配置" />

### 文件结构

如果构建的是完全独立的VitePress站点，我们可以在./目录下初始化，如果你是在当前项目内部一起安装VitePress，建议将站点搭建在（./docs）中，方便doc和项目本身做个隔离

当然这里我选择的项目结构./docs,初始化生成的文件结构应如下图所示:
```

.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json

```

该`docs`目录被视为VitePress 站点的**根目录**。该`.vitepress`目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的保留位置。

::: tip 提示
默认情况下  

VitePress 将其开发服务器存储存储放在中.vitepress/cache  

并将生产构建输出存储放在中.vitepress/dist  

如果使用 Git，您应该将它们添加到您的.gitignore文件中。这些位置也可以配置
:::

## 运行并启动

  构建完成后你的项目目录中应该出现了`package.json`文件
  打开后将能看到如下代码
```json[package.json]
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}

```

`docs:dev` 脚本将启动本地开发服务器并进行即时热更新。使用以下命令运行它：

::: code-group

```sh [npm]
$ npm run docs:dev

```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev

```

:::

除了以上脚本之外，您还可以直接调用 VitePress：
::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs

```

:::

如果正常运行，你的命令行应当出现如下内容：

```sh
vitepress v1.0.0-beta.3

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

开发服务器应该运行在 `http://localhost:5173` . 在浏览器中访问 URL 以查看正在运行的新网站！

[VitePress]: https://vitepress.dev
[VuePress]: https://vuepress.vuejs.org
[曦粥的博客 https://dawngruel.github.io]: https://dawngruel.github.io
[GITHUB]: https://github.com
[GitHub-Page]: https://pages.github.com
