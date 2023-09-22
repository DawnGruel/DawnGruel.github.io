# Golang学习指南

* Golang官网地址：<https://golang.org>
* Golang官方文档：<https://golang.org/doc>
* Golang中文网：<https://studygolang.com>
* Golang中文文档：<http://docscn.studygolang.com>
* Golang Packages:<https://golang.org/pkg>
* Golang中文Packages：<https://studygolang.com/pkgdoc>

各种Go文档：<https://learnku.com/> 觉得好用的文档地址哦

## 学习相关链接

| 模块 | 描述 |
| :--: | :-- |
| [Gin框架] | webApi框架  |
| [fmt] | go包，格式化输出  |
| [goDoc] | 工具会从 Go 程序和包文件中提取顶级声明的首行注释以及每个对象的相关注释，并生成相关文档 |
| [Air使用指南] | 在**Go**语言开发中实现热重启  |
| [Grom] | 一个神奇的，对开发人员友好的 Golang ORM 库 |
| [viper] | 一个完整的 Go 应用程序配置解决方案  |
| [cobra] | 是一个 Go 语言开发的命令行（CLI）框架，它提供了简洁、灵活且强大的方式来创建命令行程序。  |
| [YAML] | YAML是一种流行的格式，用于以人类友好的格式序列化数据, 类似JSON但更易于阅读。  |

## 文件名

Go 的源文件以 `.go` 为后缀名存储在计算机中，这些文件名均由小写字母组成，如 `main.go` 。如果文件名由多个部分组成，则使用下划线 `_` 对它们进行分隔，如 `main_test.go` 。文件名不包含空格或其他特殊字符。

一个源文件可以包含任意多行的代码，Go 本身没有对源文件的大小进行限制。

## 标识符

你会发现在 Go 代码中的几乎所有东西都有一个名称或标识符。另外，Go 语言也是区分大小写的，这与 C 家族中的其它语言相同。有效的标识符必须以字符（可以使用任何 UTF-8 编码的字符或 _）开头，然后紧跟着 0 个或多个字符或 Unicode 数字，如：X56、group1、_x23、i、өԑ12。

以下是无效的标识符：

> * 1ab（以数字开头）
> * case（Go 语言的关键字）
> * a+b（运算符是不允许的）

## 关键字

Go只有25个关键字

```Go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type  
continue     for          import       return       var
```

之所以刻意地将 Go 代码中的关键字保持的这么少，是为了简化在编译过程第一步中的代码解析。和其它语言一样，关键字不能够作标识符使用。

## 保留字

Go还有37个保留字

```Go

Constants:    true  false  iota  nil

Types:        int  int8  int16  int32  int64  
              uint  uint8  uint16  uint32  uint64  uintptr
              float32  float64  complex128  complex64
              bool  byte  rune  string  error

Functions:   make  len  cap  new  append  copy  close  delete
             complex  real  imag
             panic  recover

```

## 可见性

  1）声明在函数内部，是函数的本地值，类似private  

  2）声明在函数外部，是对当前包可见(包内所有.go文件都可见)的全局值，类似protect  
  
  3）声明在函数外部且首字母大写是所有包可见的全局值,类似public  

## 程序的组成

程序一般由关键字、常量、变量、运算符、类型和函数组成。  

程序中可能会使用到这些分隔符：括号 `()` ，中括号 `[]` 和大括号 `{}` 。

程序中可能会使用到这些标点符号：`.`、`,` 、`;` 、`:` 和 `…`。

程序的代码通过语句来实现结构化。每个语句不需要像 C 家族中的其它语言一样以分号 `;` 结尾，因为这些工作都将由 Go 编译器自动完成。

如果你打算将多个语句写在同一行，它们则必须使用 `;` 人为区分，但在实际开发中我们并不鼓励这种做法。

## Go语言声明

有四种主要声明方式：

> var（声明变量）  
> const（声明常量）  
> type（声明类型）  
> func（声明函数）

Go的程序是保存在多个.go文件中，文件的第一行就是package XXX声明，用来说明该文件属于哪个包(package)，package声明下来就是import声明，再下来是类型，变量，常量，函数的声明。

## Go项目构建及编译

一个Go工程中主要包含以下三个目录：

> src：源代码文件  
> pkg：包文件  
> bin：相关bin文件  

## 编译调试包

> go build examplepackage  
> go test examplepackage  
> go install examplepackage  

[Gin框架]:https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/%E7%AE%80%E4%BB%8B.html  
[Grom]:https://learnku.com/docs/gorm/v2/index/9728
[fmt]:./other/fmt
[goDoc]:https://learnku.com/articles/56426
[Air使用指南]: ./other/air
[viper]:https://github.com/spf13/viper#section-readme
[YAML]: ./other/yaml.md
