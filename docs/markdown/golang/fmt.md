# fmt使用指南

fmt包实现了格式化I/O。主要分为向外输出内容和获取输入内容两大部分。  
Go 语言中的fmt包含有格式化输入输出的函数，类似于C语言的printf和scanf。格式字符串的规则来源于C但更简单更好用

### [fmt官网传送门]

### 基础语句

在 fmt 包中，有三种标准输出的打印语句：

* Printf 可以给定输出格式
  + Printf(“格式化串定义”, 变量列表)
  + 格式化串定义：即format字符串
  + 变量列表: 可以是任意类型的值变量列表，系统实现的是一通用接口函数

```go 
func Printf(format string, a ...interface{}) (n int, err error)

```
Print 这个函数不需要format字符串，等价于对每一个参数设置为%v
```go
func Print(a ...interface{}) (n int, err error)
```

 Println 等价于Print语句，但输出时会在参数之间加上空格并在输出结束后换行

```go
func Println(a ...interface{}) (n int, err error)
```
示例
::: details Print系列使用示例
  
```go

// %v  基本格式的值
// %+v 当输出结构体时，扩展标志添加成员的名字。
// %#v 值的Go语法表示。
func main() {
	t := &T{7, -2.35, "abc\tdef"}
	fmt.Printf("No01:%v\n", t)  //No01:&{7 -2.35 abc      def}
	fmt.Printf("No02:%+v\n", t) //No02:&{a:7 b:-2.35 c:abc        def}
	fmt.Printf("No03:%#v\n", t) //No03:&main.T{a:7, b:-2.35, c:"abc\tdef"}
	fmt.Printf("No04:%#v\n", timeZone) //No04:map[string]int{"EST":-18000, "CST":-21600, "MST":-25200, "PST":-28800, "UTC":0}
}

var timeZone = map[string]int{
	"UTC": 0 * 60 * 60,
	"EST": -5 * 60 * 60,
	"CST": -6 * 60 * 60,
	"MST": -7 * 60 * 60,
	"PST": -8 * 60 * 60,
}

type T struct {
	a int
	b float32
	c string
}
```
:::



## 函数列表

```go
func Printf(format string, a ...interface{}) (n int, err error)
func Print(a ...interface{}) (n int, err error)
func Println(a ...interface{}) (n int, err error)
func Sprintf(format string, a ...interface{}) string
func Sprint(a ...interface{}) string
func Sprintln(a ...interface{}) string
func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error)
func Fprint(w io.Writer, a ...interface{}) (n int, err error)
func Fprintln(w io.Writer, a ...interface{}) (n int, err error)
func Scanf(format string, a ...interface{}) (n int, err error)
func Scan(a ...interface{}) (n int, err error)
func Scanln(a ...interface{}) (n int, err error)
func Sscanf(str string, format string, a ...interface{}) (n int, err error)
func Sscan(str string, a ...interface{}) (n int, err error)
func Sscanln(str string, a ...interface{}) (n int, err error)
func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err error)
func Fscan(r io.Reader, a ...interface{}) (n int, err error)
func Fscanln(r io.Reader, a ...interface{}) (n int, err error)
func Errorf(format string, a ...interface{}) error
```

## 参数详解

| 参数 | 功能 |
|:--:|:--:|
| %v | 按值的本来值输出 |
| %+v | 在 %v 基础上，对结构体字段名和值进行展开 |
| %#v | 输出 Go 语言语法格式的值 |
| %T | 输出 Go 语言语法格式的类型和值 |
| %% | 输出 % 本体 |
| %b | 整型以二进制方式显示 |
| %o | 整型以八进制方式显示 |
| %d | 整型以十进制方式显示 |
| %x | 整型以十六进制方式显示 |
| %X | 整型以十六进制、字母大写方式显示 |
| %U | Unicode 字符 |
| %f | 浮点数 |
| %p | 指针，十六进制方式显示 |
| %c | 数值对应的 Unicode 编码字符 |
| %s | 直接输出字符串或者[]byte |
| %t | 输出值的 true 或 false |

## fmt. Sprintf("")

fmt. Sprintf函数用于将格式化的数据转换为字符串。它接受一个格式字符串和一系列参数，并返回一个格式化后的字符串。这个函数的用法类似于 fmt. Printf，但是它将结果作为字符串返回，而不是直接打印出来。

```go
package main

import (
	"fmt"
)

func main() {
	name := "Alice"
	age := 30
	height := 165.5

	// 使用占位符生成格式化字符串
	message := fmt.Sprintf("My name is %s, I am %d years old, and my height is %.2f cm.", name, age, height)
	fmt.Println(message)
}

```

::: error
记住，fmt. Sprintf 不会直接打印内容，而是将格式化后的结果存储为字符串。如果你想直接在控制台输出格式化后的内容，应该使用 fmt. Printf。
:::

[fmt官网传送门]:https://pkg.go.dev/fmt
