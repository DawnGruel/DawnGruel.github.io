# OS包

Go语言的os包中提供了操作系统函数的接口，是一个比较重要的包。顾名思义，`os`包的作用主要是在服务器上进行系统的基本操作，如文件操作、目录操作、执行命令、信号与中断、进程、系统状态等等。

::: details 函数列表
  
```go{ }
func Chdir(dir string) error
func Chmod(name string, mode FileMode) error
func Chown(name string, uid, gid int) error
func Chtimes(name string, atime time.Time, mtime time.Time) error
func Clearenv()
func Environ() []string
func Exit(code int)
func Expand(s string, mapping func(string) string) string
func ExpandEnv(s string) string
func Getegid() int
func Getenv(key string) string
func Geteuid() int
func Getgid() int
func Getgroups() ([]int, error)
func Getpagesize() int
func Getpid() int
func Getppid() int
func Getuid() int
func Getwd() (pwd string, err error)
func Hostname() (name string, err error)
func IsExist(err error) bool
func IsNotExist(err error) bool
func IsPathSeparator(c uint8) bool
func IsPermission(err error) bool
func Lchown(name string, uid, gid int) error
func Link(oldname, newname string) error
func Mkdir(name string, perm FileMode) error
func MkdirAll(path string, perm FileMode) error
func NewSyscallError(syscall string, err error) error
func Readlink(name string) (string, error)
func Remove(name string) error
func RemoveAll(path string) error
func Rename(oldname, newname string) error
func SameFile(fi1, fi2 FileInfo) bool
func Setenv(key, value string) error
func Symlink(oldname, newname string) error
func TempDir() string
func Truncate(name string, size int64) error
func Create(name string) (file *File, err error)
func NewFile(fd uintptr, name string) *File
func Open(name string) (file *File, err error)
func OpenFile(name string, flag int, perm FileMode) (file *File, err error)
func Pipe() (r *File, w *File, err error)

func (f *File) Chmod(mode FileMode) error
func (f *File) Chown(uid, gid int) error
func (f *File) Close() error
func (f *File) Fd() uintptr
func (f *File) Name() string
func (f *File) Read(b []byte) (n int, err error)
func (f *File) ReadAt(b []byte, off int64) (n int, err error)
func (f *File) Readdir(n int) (fi []FileInfo, err error)
func (f *File) Readdirnames(n int) (names []string, err error)
func (f *File) Seek(offset int64, whence int) (ret int64, err error)
func (f *File) Stat() (fi FileInfo, err error)
func (f *File) Sync() (err error)
func (f *File) Truncate(size int64) error
func (f *File) Write(b []byte) (n int, err error)
func (f *File) WriteAt(b []byte, off int64) (n int, err error)
func (f *File) WriteString(s string) (ret int, err error)
func Lstat(name string) (fi FileInfo, err error)
func Stat(name string) (fi FileInfo, err error)
func (m FileMode) IsDir() bool
func (m FileMode) Perm() FileMode
func (m FileMode) String() string
func (e *LinkError) Error() string
func (e *PathError) Error() string
func FindProcess(pid int) (p *Process, err error)
func StartProcess(name string, argv []string, attr *ProcAttr) (*Process, error)
func (p *Process) Kill() error
func (p *Process) Release() error
func (p *Process) Signal(sig Signal) error
func (p *Process) Wait() (*ProcessState, error)
func (p *ProcessState) Exited() bool
func (p *ProcessState) Pid() int
func (p *ProcessState) String() string
func (p *ProcessState) Success() bool
func (p *ProcessState) Sys() interface{}
func (p *ProcessState) SysUsage() interface{}
func (p *ProcessState) SystemTime() time.Duration
func (p *ProcessState) UserTime() time.Duration
func (e *SyscallError) Error() string

```
  
:::
<!-- 
## Ch系列函数

`func Chdir(dir string) error`

参数列表
dir 目录路径
返回值：返回error 返回错误信息对象
功能说明：这个函数主要是改变当前工作目录 -->
