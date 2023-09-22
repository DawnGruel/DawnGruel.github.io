# fmt使用指南

fmt包实现了格式化I/O。主要分为向外输出内容和获取输入内容两大部分。  
Go 语言中的fmt包含有格式化输入输出的函数，类似于C语言的printf和scanf。格式字符串的规则来源于C但更简单更好用

## [fmt官网传送门]

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

### 普通占位符

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %v | 相应值的默认格式 | fmt. Printf("%v", name) |
| %+v | 打印结构体时，会添加字段名 | fmt. Printf("%+v", people) |
| %#v | 相应值的Go语法表示 | fmt. Printf("%#v", people) |
| %T | 相应值的类型的Go语法表示 | fmt. Printf("%T", people) |
| %% | 字面上的百分号 | fmt. Printf("%%") |

### 布尔占位符

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %t | true 或 false| fmt. Printf("%t", true) |

### 整数占位符

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %b  | 二进制表示| fmt. Printf("%b", 5)|
| %c| 相应Unicode码点所表示的字符| fmt. Printf("%c", 0x4E2D)|
| %d | 十进制表示 | fmt. Printf("%d", 0x12) |
| %o | 八进制表示 | fmt. Printf("%d", 10) |
| %q  | 单引号围绕的字符字面值，由Go语法安全地转义 | fmt. Printf("%q", 0x4E2D) |
| %x | 十六进制表示，字母形式为小写 a-f | fmt. Printf("%x", 13) |
| %X | 十六进制表示，字母形式为大写 A-F  | fmt. Printf("%x", 13) |
| %U | Unicode格式：U+1234，等同于 "U+%04X"  | fmt. Printf("%U", 0x4E2D) |

### 浮点数和复数的组成部分（实部和虚部）

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %e | (=%.6e) 6位小数点, 科学计数法，例如 -1234.456e+78 | fmt. Printf("%e", 10.2) |
| %E | 科学计数法，例如 -1234.456E+78 | fmt. Printf("%e", 10.2) |
| %f | (=%.6f) 6位小数点, 有小数点而无指数，例如 123.456 | fmt. Printf("%f", 10.2) |
| %g | 根据情况选择 %e 或 %f 以产生更紧凑的（无末尾的0）输出 | fmt. Printf("%g", 10.20) |
| %G | 根据情况选择 %E 或 %f 以产生更紧凑的（无末尾的0）输出 | fmt. Printf("%G", 10.20+2i) |

### 字符串与字节切片

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %s | 输出字符串表示（string类型或[]byte) | fmt. Printf("%s", []byte("oldboy")) |
| %10s | 输出字符串最小宽度为10(右对齐) | fmt. Printf("%10s", "oldboy") |
| %-10s | 输出字符串最小宽度为10(左对齐) | fmt. Printf("%-10s", "oldboy") |
| %.5s | 输出字符串最大宽度为5 | fmt. Printf("%.5s", "oldboy") |
| %5.10s | 输出字符串最小宽度为5，最大宽度为10 | fmt. Printf("%5.10s", "oldboy") |
| %-5.10s | 输出字符串最小宽度为5，最大宽度为10(左对齐) | fmt. Printf("%-5.10s", "oldboy") |
| %5.3s | 输出字符串宽度为5, 如果原字符串宽度大于3, 则截断 | fmt. Printf("%5.3s", "oldboy") |
| %010s | 如果宽度小于10，就会在字符串前面补零 | fmt. Printf("%010s", "oldboy") |
| %q | 双引号围绕的字符串，由Go语法安全地转义 | fmt. Printf("%q", "oldboy") |
| %x | 十六进制，小写字母，每字节两个字符 | fmt. Printf("%x", "oldboy") |
| %X | 十六进制，大写字母，每字节两个字符 | fmt. Printf("%X", "oldboy") |

### 指针

| 占位符 | 说明 | 举例 |
|:--:|:--:|:--:|
| %p | 十六进制表示，前缀 0x | fmt. Printf("%p", &site) |
| %#p | 不带前缀 0x | fmt. Printf("%#p", &site) |

## `fmt.Print`

在 fmt 包中，有三种标准输出的打印语句：

* Printf 可以给定输出格式
  * Printf(“格式化串定义”, 变量列表)
  * 格式化串定义：即format字符串
  * 变量列表: 可以是任意类型的值变量列表，系统实现的是一通用接口函数

```go
func Printf(format string, a ...interface{}) (n int, err error)
 参数列表
  a… 值变量列表
返回值：
返回打印字符数 n
返回error
功能说明：这个函数主要是用来根据系统默认格式字符串和参数表生成一个打印字符串
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
 fmt.Printf("No01:%v\n", t) 
  //No01:&{7 -2.35 abc      def}
 fmt.Printf("No02:%+v\n", t) 
  //No02:&{a:7 b:-2.35 c:abc        def}
 fmt.Printf("No03:%#v\n", t) 
  //No03:&main.T{a:7, b:-2.35, c:"abc\tdef"}
 fmt.Printf("No04:%#v\n", timeZone) 
  //No04:map[string]int{"EST":-18000, "CST":-21600, "MST":-25200, "PST":-28800, "UTC":0}
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

## `fmt.Sprint`

`fmt.Sprint` 函数用于将格式化的数据转换为字符串。它接受一个格式字符串和一系列参数，并返回一个格式化后的字符串。这个函数的用法类似于 `fmt.Printf`，但是它将结果作为字符串返回，而不是直接打印出来。

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

::: danger
记住，fmt. Sprintf 不会直接打印内容，而是将格式化后的结果存储为字符串。如果你想直接在控制台输出格式化后的内容，应该使用 fmt. Printf。
:::

[fmt官网传送门]:https://pkg.go.dev/fmt
