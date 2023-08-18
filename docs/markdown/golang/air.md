# Air热更新使用指南

## 安装

首先安装air的最新版本，命令如下：

```sh
go install github.com/cosmtrek/air@latest
 ```

> 此处需要使用的是install安装，Air属于本地Go环境的全局插件

安装完成后需要配置mac的环境变量

```sh
vim ~/.zshrc
 ```

在文件输入如下配置

```
alias air='/Users/xxxx/go/bin/air'
```

## 配置

在项目根目录下创建 `.air.conf` 文件，粘贴以下内容保存

::: details .air.conf配置内容
  

```

# [Air](https://github.com/cosmtrek/air) TOML 格式的配置文件

 

# 工作目录

# 使用 . 或绝对路径，请注意 `tmp_dir` 目录必须在 `root` 目录下
root = "."
tmp_dir = "tmp"
 
[build]

# 只需要写你平常编译使用的shell命令。你也可以使用 `make`

# Windows平台示例: cmd = "go build -o ./tmp/main.exe ."
cmd = "go build -o ./tmp/main.exe ."

# 由 `cmd` 命令得到的二进制文件名

# Windows平台示例：bin = "tmp/main.exe"
bin = "tmp/main.exe"

# 自定义执行程序的命令，可以添加额外的编译标识例如添加 GIN_MODE=release

# Windows平台示例：full_bin = "./tmp/main.exe"

# Linux平台示例：full_bin = "APP_ENV=dev APP_USER=air ./tmp/main.exe"

full_bin = "./tmp/main.exe"

# 监听以下文件扩展名的文件.

include_ext = ["go", "tpl", "tmpl", "html"]

# 忽略这些文件扩展名或目录

exclude_dir = ["assets", "tmp", "vendor", "frontend/node_modules"]

# 监听以下指定目录的文件

include_dir = []

# 排除以下文件

exclude_file = []

# 如果文件更改过于频繁，则没有必要在每次更改时都触发构建。可以设置触发构建的延迟时间

delay = 1000 # ms

# 发生构建错误时，停止运行旧的二进制文件。

stop_on_error = true

# air的日志文件名，该日志文件放置在你的 `tmp_dir` 中

log = "air_errors.log"
 
[log]

# 显示日志时间

time = true
 
[color]

# 自定义每个部分显示的颜色。如果找不到颜色，使用原始的应用程序日志。

main = "magenta"
watcher = "cyan"
build = "yellow"
runner = "green"
 
[misc]

# 退出时删除tmp目录

clean_on_exit = true
```

:::

## 使用

在项目内执行如下命令，运行成功

```sh
air
```

运行成功后显示如下内容

![Air安装完成](./img/Air_Successful_installation.jpg)