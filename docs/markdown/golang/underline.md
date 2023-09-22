# 下划线

`_` 本身就是一个特殊的标识符，被称为空白标识符。

它可以像其他标识符那样用于变量的声明或赋值（任何类型都可以赋值给它），但任何赋给这个标识符的值都将被抛弃，因此这些值不能在后续的代码中使用，也不可以使用这个标识符作为变量对其它变量进行赋值或运算。

在编码过程中，你可能会遇到没有名称的变量、类型或方法。虽然这不是必须的，但有时候这样做可以极大地增强代码的灵活性，这些变量被统称为匿名变量。

## 下划线在**import**中

> 在Golang中，import的作用是导入其他package

import 下划线（如：import hello/imp）的作用：  

当导入一个包时，该包下的文件里所有init()函数都会被执行，然而，有些时候我们并不需要把整个包都导入进来，仅仅是是希望它执行init()函数而已。这个时候就可以使用 import 引用该包。即使用【import _ 包路径】只是引用该包，仅仅是为了调用init()函数，所以无法通过包名来调用包中的其他函数。 示例：

```
# 代码结构
    src 
    |
    +--- main.go            
    |
    +--- hello
           |
            +--- hello.go

```
```go
package main

import _ "./hello"

func main() {
    // hello.Print() 
    //编译报错：./main.go:6:5: undefined: hello
}

```

hello.go

```go
package hello

import "fmt"

func init() {

    fmt.Println("imp-init() come here.")

}

func Print() {

    fmt.Println("Hello!")

}
```

输出结果

```
imp-init() come here.
```

补充：

```go
import "database/sql"
import _ "github.com/go-sql-driver/mysql"
```
第二个import就是不直接使用mysql包，只是执行一下这个包的init函数，把mysql的驱动注册到sql包里，然后程序里就可以使用sql包来访问mysql数据库了。

## 下划线在代码中

```go
package main

import (
    "os"
)

func main() {
    buf := make([]byte, 1024)
    f, _ := os.Open("/Users/***/Desktop/text.txt")
    defer f.Close()
    for {
        n, _ := f.Read(buf)
        if n == 0 {
            break    

        }
        os.Stdout.Write(buf[:n])
    }
}

```

解释1：

> 下划线意思是忽略这个变量  
> 比如os. Open，返回值为*os. File，error  
> 普通写法是f, err := os. Open("xxxxxxx")  
> 如果此时不需要知道返回的错误值  
> 就可以用f, _ := os. Open("xxxxxx")  
> 如此则忽略了error变量

解释2：

> 占位符，意思是那个位置本应赋给某个值，但是咱们不需要这个值
> 所以就把该值赋给下划线，意思是丢掉不要
> 这样编译器可以更好的优化，任何类型的单个值都可以丢给下划线
> 这种情况是占位用的，方法返回两个结果，而你只想要一个结果
> 那另一个就用 "_" 占位，而如果用变量的话，不使用，编译器是会报错的
