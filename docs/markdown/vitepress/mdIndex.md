# Markdown语法收录（VitePress版）

## 目录

如果需要生成目录直接在文档开头键入以下内容  

::: details 输入

```
 [[toc]]
```

:::
显示效果： 
[[toc]]

## 标题锚点、链接、图片

链接：内部和外部链接都受到特殊处理
### 标题 
会自动应用关联链接
::: details 输入

```markdown
[单选复选框](#单选复选框)
## test {#单选复选框}
```

:::

显示效果：  
  [单选复选框](#单选复选框)  
  ## test {#单选复选框}
  vitepress经过改造可以适配异与标题的锚点

### 链接

::: details 输入

```markdown
[曦粥的博客](https://DawnGruel.github.io)
 
<https://DawnGruel.github.io>
```

:::

显示效果：  
  [曦粥的博客](https://DawnGruel.github.io)  
  <https://DawnGruel.github.io>

### 脚注

::: details 输入
  

```markdown
  VitePress是使用vite的新的文档编辑工具,我们通过该工具搭建了 曦粥的博客[^1]

  [^1]:https://DawnGruel.github.io
  ```

:::

显示效果：  
VitePress是使用vite的新的文档编辑工具, 我们通过该工具搭建了 曦粥的博客[^1]

[^1]:https://DawnGruel.github.io

### 图片的展示

::: details 输入

```markdown
![]()
![首页图片](https://cdn.discordapp.com/attachments/1082939359281561664/1124244511615352832/dawngruel_Internet_AI_all-encompassing_tech-savvy_flat_style_wi_88bf9f02-00ff-494c-af2e-3c54cfd4a017.png)

```

:::

显示效果：  

![首页图片](https://cdn.discordapp.com/attachments/1082939359281561664/1124244511615352832/dawngruel_Internet_AI_all-encompassing_tech-savvy_flat_style_wi_88bf9f02-00ff-494c-af2e-3c54cfd4a017.png)

## 字体与格式

### 字体

Markdown 可以使用以下几种字体：

用1个 * 或 _ 表示斜体  
用2个 * 或 _ 表示粗体  
用3个 * 或 _ 表示粗斜体  

::: details 输入

```markdown
正常文字  
*斜体文字*  
**粗体文字**  
***粗斜体文字***  
```

:::
显示效果：  

正常文字  
*斜体文字*  
**粗体文字**  
***粗斜体文字***  

### 删除线

::: details 输入

```markdown
~~tencent.com~~
```

:::

显示效果：  
~~tencent.com~~

### 下划线

下划线可以通过HTML的标签来实现
::: details 输入

```markdown
<u>带下划线文本</u>
```

:::

显示效果：  
<u>带下划线文本</u>

### 分隔线

可以在一行中用三个以上的星号*、减号-、底线_来建立一个分隔线，行内不能有其他东西，你也可以在星号或减号蹭插入空格。下面这种写法都可以建立分隔线：

::: details 输入

```markdown
***
* * *
******
- - -
------
```

:::

显示效果：
***
* * *
******
- - -
------

## 区块

::: details 输入
```
> 区块引用  
>> Markdown教程  
>>> 学的不仅是技术更是梦想  
```
:::
显示效果：  
> 区块引用  
>> Markdown教程  
>>> 学的不仅是技术更是梦想  

## 代码块

### 简单代码块

::: details 输入
\`console.log('Hello Vitepress!')\`
:::
显示效果：  
 `console.log('Hello Vitepress!')`

### 基础代码块

::: details 输入
````
  ```html
<div>
  <span>Hellow World</span>
</div>
```
````
:::

显示效果： 
```html
<div>
  <span>Hellow World</span>
</div>
```
### 高级代码块语法
想了解[高级代码块语法]👈点击前往
## 信息提示框

用来醒目标志信息的提示框 

| 类型 | 参数 |
|:--:|:--: |
| 信息 | info |
| 提示 | tip |
| 警告 | warning |
| 危险 | danger |
| 细节 | details |

### 使用方法
::: details 输入
```
::: tip  
  tip 提示内容1  
:::`

::: tip 这是自定义tip  
  tip 提示内容2  
:::` 

 `<div class="tip custom-block" style="padding-top: 8px"> tip无标题</div>`
```
复制使用时注意👆结尾的细节修正
:::
显示效果：

::: tip
  tip 提示内容1
:::

::: tip 自定义标题
  tip 提示内容2
:::

<div class="tip custom-block" style="padding-top: 8px"> tip无标题</div>

### 全部提示框
::: details 输入

```
::: info  
  This is an info box.  
:::`  

::: tip  
This is a tip.  
:::`  

::: warning   
This is a warning.  
:::`  

::: danger  
This is a dangerous warning.  
:::`  

::: details
  
```javascript
  console.log('Hello, VitePress');
\```
:::`

```
复制使用时注意👆结尾的细节修正
:::

显示效果：
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning 
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
  

```javascript  
  console.log('Hello, VitePress');
```

:::

## Table表格

::: details 输入

```markdown
|标题|标题|标题|标题|
|:---:|:---|---:|---| 
|内容|内容|内容|内容|
```
:::

显示效果：  

|标题|标题|标题|标题|
|:---:|:---|---:|---| 
|内容|内容|内容|内容|

### 对齐方式

> 可以设置表头的对齐方式：  
> * -: 设置内容或标题栏右对齐  
> * :- 设置内容或标题栏左对齐  
> * :-: 设置内容或标题栏居中对齐  

## 单选复选框

::: details 输入
```markdown
<input type="checkbox" checked="true" disabled="true" />复选框已选中
<input type="checkbox"  disabled="true" />复选框未选中
<input type="radio" checked="true" disabled="true" />单选框已选中 
<input type="radio"  disabled="true" />单选框未选中
```
:::
显示效果：

<input type="checkbox" checked="true" disabled="true" />复选框已选中

<input type="checkbox"  disabled="true" />复选框未选中

<input type="radio" checked="true" disabled="true" />单选框已选中 

<input type="radio"  disabled="true" />单选框未选中

## badge(徽章)
徽章可让您向标题添加状态。例如，指定节的类型或支持的版本可能很有用。
::: details 输入 
```html
info <Badge type="info" text="default" />  
tip <Badge type="tip" text="^1.9.0" />  
warning <Badge type="warning" text="beta" />  
danger <Badge type="danger" text="caution" />  
定制   <Badge type="info">可自定义内容</Badge>  
```
:::
显示效果：  

info <Badge type="info" text="default" />  
tip <Badge type="tip" text="^1.9.0" />  
warning <Badge type="warning" text="beta" />  
danger <Badge type="danger" text="caution" />  
定制   <Badge type="info">可自定义内容</Badge>  
## 模拟进度条

::: details 输入
```Html
<div class="info custom-block" style="padding-top: 8px">
  <div style="background-color:rgba(82, 82, 89, 0.68); height:10px; border-radius:5px; width:100%"></div>
</div>
<div class="tip custom-block" style="padding-top: 8px">
  <div style="background-color:#10b981; height:5px; border-radius:5px; width:90%"></div>
</div>
<div class="warning custom-block" style="padding-top: 8px">
  <div style="background-color: #d97706; height:10px; border-radius:5px; width:70%; "></div>
</div>
<div class="danger custom-block" style="padding-top: 8px">
  <div style="background-color:#f43f5e; height:10px; border-radius:5px; width:50%; "></div>
</div>
```
:::

显示效果：

<div class="info custom-block" style="padding-top: 8px">
  <div style="background-color:rgba(82, 82, 89, 0.68); height:10px; border-radius:5px; width:100%"></div>
</div>
<div class="tip custom-block" style="padding-top: 8px">
  <div style="background-color:#10b981; height:5px; border-radius:5px; width:90%"></div>
</div>
<div class="warning custom-block" style="padding-top: 8px">
  <div style="background-color: #d97706; height:10px; border-radius:5px; width:70%; "></div>
</div>
<div class="danger custom-block" style="padding-top: 8px">
  <div style="background-color:#f43f5e; height:10px; border-radius:5px; width:50%; "></div>
</div>

## 符号

Mrkdown支持以下这些符号前面加上反斜杠`\`来帮助插入普通符号：

| 描述 | 反斜线 |反引号|星号|下划线|花括号|方括号|小括号|井字号|加号|减号|英文句点|感叹号|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 符号 | \\ | \` | \* | \_ | \{\} | \[\] | \(\) | \# | \+ | \- | \. | \! |


## 当前支持的开发语言

[支持语言传送门]

## 表情符号

[emoji传送门]

## MarkDown文件包含
你可以将一个 Markdown 文件包含在另一个 Markdown 文件中，甚至可以重写。
::: tip 提示
您还可以在 markdown 路径前加上一个@，将会充当源根目录。默认情况下，它是 VitePress 项目根目录，无需srcDir配置。
:::
例如，您可以使用以下命令包含相对 Markdown 文件：
::: details 输入
\<\!\-\-@include: ./emoji.md\-\-\>  
\<\!\-\-@include: ./emoji.md{3,}\-\-\>  // 第三行开始输出  
\<\!\-\-@include: ./emoji.md{,10}\-\-\>  // 输出至第10行  
\<\!\-\-@include: ./emoji.md{1,10}\-\-\>  // 输出第一行到第十行  
:::

::: warning 警告
请注意，如果您的文件不存在，这不会引发错误。因此，使用此功能时请确保内容按预期呈现。
:::

## 导入代码片段
您可以通过以下语法从现有文件导入代码片段：  

输入：  `<<< ./demo/index.ts`

显示效果：

<<< ./demo/index.ts

还有支持行[突出显示]：

```
<<< @/filepath{highlightLines}
```

输入：`<<< @/markdown/vitepress/demo/index.ts{2}`

显示效果：

<<< @/markdown/vitepress/demo/index.ts{2}

::: tip 提示
默认情况下，是 VitePress 项目根目录，无需配置。  
或者，您也可以从相对路径导入
:::

您还可以使用VS Code 区域来仅包含代码文件的相应部分。#您可以在以下文件路径后提供自定义区域名称：

输入：`<<< @/markdown/vitepress/demo/index.ts#snippet{1}`

显示效果：

<<< @/markdown/vitepress/demo/index.ts#snippet{1}

您还可以在大括号{}内指定语言，如下所示：
```markdown
<<< @/markdown/vitepress/demo/index.ts#snippet{TypeScript}
<!-- with line highlighting: -->
<<< @/markdown/vitepress/demo/index.ts#snippet{1,3 TypeScript}
<!-- with line numbers: -->
<<< @/markdown/vitepress/demo/index.ts#snippet{2-3 TypeScript:line-numbers}
```
如果无法从文件扩展名推断源语言，这将会很有帮助

::: details 输出代码片段

<<< @/markdown/vitepress/demo/index.ts#snippet{TypeScript}
 
 with line highlighting \{1,3 TypeScript\}

<<< @/markdown/vitepress/demo/index.ts#snippet{1,3 TypeScript}

with no line numbers: \{2-3 TypeScript:no-line-numbers\}

<<< @/markdown/vitepress/demo/index.ts#snippet{2-3 TypeScript:no-line-numbers}
:::


<!-- 页面脚注 -->
[高级代码块语法]: ./mdCode.md
[支持语言传送门]: https://github.com/shikijs/shiki/blob/main/docs/languages.md
[emoji传送门]: ./emoji
[突出显示]: ./mdCode.md#行突出显示