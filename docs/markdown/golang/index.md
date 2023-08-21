# Golang学习指南

## 学习相关网站链接

[Go中文文档](https://www.topgoer.com)  
[Gin框架](https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/%E7%AE%80%E4%BB%8B.html)  

## 关键字

Go只有25个关键字

```Go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type  
continue     for          import       return       var
```

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
