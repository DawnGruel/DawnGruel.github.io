# Init函数和main函数以及Go的命令

## init函数

Go语言中 `init` 函数用于包 `(package)` 的初始化，该函数是go语言的一个重要特性。

有下面的特征：

> 1.init韩式是用于程序执行前做包的初始化的函数，比如初始化包里的变量等  
> 2. 每个包可以拥有多个init函数  
> 3. 包的每个源文件也可以拥有多个init函数  
> 4. 同一个包中多个init函数的执行顺序go语言没哟明确定义（说明）  
> 5. 不同包的init函数按照包导入的依赖关系决定该初始化函数的执行顺序  
> 6.init函数不能被其他函数调用，而是在main函数执行前，自动被调用  

## main函数

main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数（如果有 init () 函数则会先执行该函数）。

```go
func main() {
  // 函数体
}
```

如果你的 main 包的源代码没有包含 main 函数，则会引发构建错误 `undefined: main.main` 。

main 函数既没有参数，也没有返回类型（与 C 家族中的其它语言恰好相反）。

如果你不小心为 main 函数添加了参数或者返回类型，将会引发构建错误：

```sh
func main must have no arguments and no return values results.
```

在程序开始执行并完成初始化后，第一个调用（程序的入口点）的函数是 `main.main()` （如：C 语言），该函数一旦返回就表示程序已成功执行并立即退出。

## init函数和main函数的异同

```
相同点：
  两个函数的字啊定义时不能有任何的参数和返回值，且Go程序自动调用。

不同点：
  init可以应用与任何包中，且可以重复定义多个。
  main函数只能用于main包中，且只能定义一个。

```

两个函数的执行顺序：

对同一个Go文件的init()调用顺序是从上到下的。
对同一package中不同文件是按文件名名字字符串比较“从小到大”顺序调用各文件中的 `init()` 函数。

对于不同的 `package` ，如果不互相依赖的话，按照main包中先 `import` 的后调用 的顺序调用其包中的 `init()` ，如果 `package` 存在依赖，则先调用最早被依赖的 `package` 中的 `init()` ，最后调用 `main()` 函数。

如果init函数中使用了 `println()` 或者 `print()` 你会发现在执行过程中这两个不会按照你想象中的顺序执行。这两个函数官方只推荐在测试环境中使用，对于正式环境不要使用。

## 一般结构简述

```go{ }
package main

import (
   "fmt"
)

const c = "C"

var v int = 5

type T struct{}

func init() { // initialization of package
}

func main() {
   var a int
   Func1()
   // ...
   fmt. Println(a)
}

func (t T) Method1() {
   //...
}

func Func1() { // exported function Func1
   //...
}

```

👆的程序可以被顺利编译但什么都做不了，不过这很好地展示了一个 Go 程序的首选结构。这种结构并没有被强制要求，编译器也不关心 `main` 函数在前还是变量的声明在前，但使用统一的结构能够在从上至下阅读 Go 代码时有更好的体验。

#### 总体思路如下:

> * 在完成包的 import 之后，开始对常量、变量和类型的定义或声明。  
> * 如果存在 init 函数的话，则对该函数进行定义（这是一个特殊的函数，每个含有该函数的包都会首先执行这个函数）。  
> * 如果当前包是 main 包，则定义 main 函数。  
> * 然后定义其余的函数，首先是类型的方法，接着是按照 main 函数中先后调用的顺序来定义相关函数，如果有很多函数，则可以按照字母顺序来进行排序。  

#### 程序的执行（程序启动）顺序如下：

> * 按顺序导入所有被 main 包引用的其它包，然后在每个包中执行如下流程：  
> * 如果该包又导入了其它的包，则从第一步开始递归执行，但是每个包只会被导入一次。  
> * 然后以相反的顺序在每个包中初始化常量和变量，如果该包含有 init 函数的话，则调用该函数。  
> * 在完成这一切之后，main 也执行同样的过程，最后调用 main 函数开始执行程序。  


## 命令

golang环境安装后，你可以在命令行执行go命令查看相关的Go语言命令：

```sh
$ go
Go is a tool for managing Go source code.

Usage:

    go command [arguments]

The commands are:

    build       compile packages and dependencies
    clean       remove object files
    doc         show documentation for package or symbol
    env         print Go environment information
    bug         start a bug report
    fix         run go tool fix on packages
    fmt         run gofmt on package sources
    generate    generate Go files by processing source
    get         download and install packages and dependencies
    install     compile and install packages and dependencies
    list        list packages
    run         compile and run Go program
    test        test packages
    tool        run specified go tool
    version     print Go version
    vet         run go tool vet on packages

Use "go help [command]" for more information about a command.

Additional help topics:

    c           calling between Go and C
    buildmode   description of build modes
    filetype    file types
    gopath      GOPATH environment variable
    environment environment variables
    importpath  import path syntax
    packages    description of package lists
    testflag    description of testing flags
    testfunc    description of testing functions

Use "go help [topic]" for more information about that topic.
```

go env用于打印Go语言的环境信息 

go run命令可以编译并运行命令源码文件

go get可以根据要求和实际情况从互联网上下载或更新指定的代码包及其依赖包，并对它们进行编译和安装

go build命令用于编译我们指定的源码文件或代码包以及它们的依赖包

go install用于编译并安装指定的代码包及它们的依赖包

go clean命令会删除掉执行其它命令时产生的一些文件和目录

go doc命令可以打印附于Go语言程序实体上的文档。我们可以通过把程序实体的标识符作为该命令的参数来达到查看其文档的目的

go test命令用于对Go语言编写的程序进行测试

go list命令的作用是列出指定的代码包的信息

go fix会把指定代码包的所有Go语言源码文件中的旧版本代码修正为新版本的代码

go vet是一个用于检查Go语言源码中静态错误的简单工具

go tool pprof命令来交互式的访问概要文件的内容

[Pascal命名法]:https://baike.baidu.com/item/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95/9464494
