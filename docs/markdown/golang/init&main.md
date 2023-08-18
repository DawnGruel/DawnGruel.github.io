# Init函数和main函数以及Go的命令

## init函数

Go语言中 `init` 函数用于包 `(package)` 的初始化，该函数是go语言的一个重要特性。

有下面的特征：

```
1.init韩式是用于程序执行前做包的初始化的函数，比如初始化包里的变量等
2.每个包可以拥有多个init函数
3.包的每个源文件也可以拥有多个init函数
4.同一个包中多个init函数的执行顺序go语言没哟明确定义（说明）
5.不同包的init函数按照包导入的依赖关系决定该初始化函数的执行顺序
6.init函数不能宝贝其他函数调用，而是在main函数执行前，自动被调用
```

## main函数

Go语言程序的默认入口函数（主函数）：func main() 
函数体用一对花括号 `{}` 包裹

```go
func main() {
  // 函数体
}
```

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

如果init函数中使用了`println()`或者`print()`你会发现在执行过程中这两个不会按照你想象中的顺序执行。这两个函数官方只推荐在测试环境中使用，对于正式环境不要使用。


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