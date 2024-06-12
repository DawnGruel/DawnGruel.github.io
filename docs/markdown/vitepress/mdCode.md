# 高级代码块语法

## 代码组

您可以像这样对多个代码块进行分组：
::: details 输入

````txt
::: code-group

```html[home.html]
<div>
  <span>Hello, VitePress</span>
</div>
```

```javascript[index.js]
  document.write('Hello, VitePress'); 

```

```css[index.css]
  background-image: url;
```

:::`
````

👆复制使用时注意去除该处空格
:::

显示效果：  
::: code-group

```html [index.html]
<div>
  <span>Hello, VitePress</span>
</div>
```

```javascript [index.js]
  document.write('Hello, VitePress'); 

```

```css [index.css]
  background-image: url;
```

:::

## 行突出显示

:::: details 输入

````txt
```javascript{3}
export default {
  data () {
    return {...}
  }
}
```

````

::::

显示效果：

```javascript{3}
export default {
  data () {
    return {...}
  }
}

```

### 多行突出显示

除了单行之外，您还可以指定多个单行、范围或两者：  
 `行范围：例如{5-8},{3-10},{10-17}`  
`多条单线：例如{4,7,9}`  
`行范围和单行：例如{4,7-13,16,23-27,40}`  

或者，可以使用// [!code hl]注释直接在行中突出显示。
::: details 输入

````txt
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
} // \[!code  hl]
```

````

注意后面只需要一个空格!code，这里有两个空格是为了防止处理。
:::

显示效果：

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
} // [!code hl]
```

## 关注代码块

`// [!code focus]` 在一行上添加注释会使其集中并模糊代码的其他部分。

此外，您可以使用 定义多条要聚焦的行
 `[!code focus:<lines>]`

::: details 输入

````txt
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

:::
注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

显示效果：  

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 彩色差异

在一行上添加注释 `// [!code --]` 或 `// [!code ++]` 将创建该行的差异，同时保留代码块的颜色。
::: details 输入

````txt
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```

````

:::
注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

显示效果：

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 错误和警告

在一行上添加 `// [!code warning]` 或 `// [!code error]` 注释会相应地为其着色。
::: details 输入

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```

:::
注意后面只需要一个空格!code，这里有两个空格是为了防止处理。

显示效果：

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号

您可以通过配置为每个代码块启用行号：

```ts
export default {
  markdown: {
    lineNumbers: true
  }
}
```

您可以在受保护的代码块中添加  
 `// :line-numbers`

 `// :no-line-numbers`

标记以覆盖 config.ts 中设置的值。
::: details 输入

````txt

```ts:line-numbers {1}
// line-numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers {1}
// :no-line-numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'

```
````

:::

显示效果：  

```ts:line-numbers {1}
// line-numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'

```

```ts:no-line-numbers {1}
// :no-line-numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
