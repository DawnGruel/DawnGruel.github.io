import{_ as s,o as a,c as o,X as n}from"./chunks/framework.6bc268d3.js";const D=JSON.parse('{"title":"Go程序的基本结构和要素","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/golang/structure_elements.md","filePath":"markdown/golang/structure_elements.md","lastUpdated":null}'),e={name:"markdown/golang/structure_elements.md"},p=n(`<h1 id="go程序的基本结构和要素" tabindex="-1">Go程序的基本结构和要素 <a class="header-anchor" href="#go程序的基本结构和要素" aria-label="Permalink to &quot;Go程序的基本结构和要素&quot;">​</a></h1><p>示例</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="包的概念、导入与可见性" tabindex="-1">包的概念、导入与可见性 <a class="header-anchor" href="#包的概念、导入与可见性" aria-label="Permalink to &quot;包的概念、导入与可见性&quot;">​</a></h2><p>包是结构化代码的一种方式：每个程序都由包（通常简称为 pkg）的概念组成，可以使用自身的包或者从其它包中导入内容。</p><p>如同其它一些编程语言中的类库或命名空间的概念，每个 Go 文件都属于且仅属于一个包。一个包可以由许多以 <code>.go</code> 为扩展名的源文件组成，因此文件名和包名一般来说都是不相同的。</p><p>你必须在源文件中非注释的第一行指明这个文件属于哪个包，如： <code>package main</code> 。 <code>package main</code> 表示一个可独立执行的程序，每个 Go 应用程序都包含一个名为 <code>main</code> 的包。</p><p>一个应用程序可以包含不同的包，而且即使你只使用 main 包也不必把所有的代码都写在一个巨大的文件里：你可以用一些较小的文件，并且在每个文件非注释的第一行都使用 <code>package main</code> 来指明这些文件都属于 main 包。如果你打算编译包名不是为 main 的源文件，如 <code>pack1</code> ，编译后产生的对象文件将会是 <code>pack1.a</code> 而不是可执行程序。另外要注意的是，所有的包名都应该使用小写字母。</p><h2 id="标准库" tabindex="-1">标准库 <a class="header-anchor" href="#标准库" aria-label="Permalink to &quot;标准库&quot;">​</a></h2><p>在 Go 的安装文件里包含了一些可以直接使用的包，即标准库。</p><p>在 Windows 下，标准库的位置在 Go 根目录下的子目录 <code>pkg\\windows_386</code> 中</p><p>在 Linux 下，标准库在 Go 根目录下的子目录 <code>pkg\\linux_amd64</code> 中</p><blockquote><p>（如果是安装的是 32 位，则在 <code>linux_386</code> 目录中）。</p></blockquote><p>一般情况下，标准包会存放在 <code>$GOROOT/pkg/$GOOS_$GOARCH/</code> 目录下。</p><blockquote><p>Go 的标准库包含了大量的包（如：fmt 和 os），但是你也可以创建自己的包。</p></blockquote><div class="info custom-block"><p class="custom-block-title">Tip</p><p>如果想要构建一个程序，则包和包内的文件都必须以正确的顺序进行编译。</p><p>包的依赖关系决定了其构建顺序。</p><p>属于同一个包的源文件必须全部被一起编译，一个包即是编译时的一个单元，因此根据惯例，每个目录都只包含一个包。</p></div><p><strong>如果对一个包进行更改或重新编译，所有引用了这个包的客户端程序都必须全部重新编译。</strong></p><p>Go 中的包模型采用了显式依赖关系的机制来达到快速编译的目的，编译器会从后缀名为 .go 的对象文件（需要且只需要这个文件）中提取传递依赖类型的信息。</p><p>如果 <code>A.go</code> 依赖 <code>B.go</code> ，而 <code>B.go</code> 又依赖 <code>C.go</code> ：</p><p>编译 <code>C.go</code> , <code>B.go</code> , 然后是 <code>A.go</code> . 为了编译 <code>A.go</code> , 编译器读取的是 <code>B.go</code> 而不是 <code>C.go</code></p><p>这种机制对于编译大型的项目时可以显著地提升编译速度。</p><p><strong>每一段代码只会被编译一次</strong></p><p>一个 Go 程序是通过 <code>import</code> 关键字将一组包链接在一起。</p><p>如果需要多个包，它们可以被分别导入：</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或：</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> &quot;fmt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">; import </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是还有更短且更优雅的方法（被称为因式分解关键字，该方法同样适用于 const、var 和 type 的声明或定义）：</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>它甚至还可以更短的形式，但使用 gofmt 后将会被强制换行：</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> (&quot;fmt&quot;; </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当你导入多个包时，最好按照字母顺序排列包名，这样做更加清晰易读。</p><p>如果包名不是以 <code>.</code> 或 <code>/</code> 开头，如 <code>&quot;fmt&quot;</code> 或者 <code>&quot;container/list&quot;</code> ，则 Go 会在全局文件进行查找；</p><p>如果包名以 <code>./</code> 开头，则 Go 会在相对目录中查找；</p><p>如果包名以 <code>/</code> 开头（在 Windows 下也可以这样使用），则会在系统的绝对路径中查找。</p><p>导入包即等同于包含了这个包的所有的代码对象。</p><p>除了符号 <code>_</code> ，包中所有代码对象的标识符必须是唯一的，以避免名称冲突。但是相同的标识符可以在不同的包中使用，因为可以使用包名来区分它们。</p><p>包通过下面这个被编译器强制执行的规则来决定是否将自身的代码对象暴露给外部文件：</p><h2 id="可见性规则" tabindex="-1">可见性规则 <a class="header-anchor" href="#可见性规则" aria-label="Permalink to &quot;可见性规则&quot;">​</a></h2><ul><li><p>当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就<strong>可以被外部包的代码所使用（客户端程序需要先导入这个包）</strong>，这被称为导出（像面向对象语言中的 public）；</p></li><li><p>标识符如果以小写字母开头，则<strong>对包外是不可见的</strong>，但是他们在整个<strong>包的内部是可见并且可用的</strong>（像面向对象语言中的 private ）。</p></li></ul><p>（大写字母可以使用任何 Unicode 编码的字符，比如希腊文，不仅仅是 ASCII 码中的大写字母）。</p><p>因此，在导入一个外部包后，能够且只能够访问该包中导出的对象。</p><p>假设在包 pack1 中我们有一个变量或函数叫做 Thing（以 T 开头，所以它能够被导出），那么在当前包中导入 pack1 包，Thing 就可以像面向对象语言那样使用点标记来调用： <code>pack1.Thing</code> （pack1 在这里是不可以省略的）。</p><p>因此包也可以作为命名空间使用，帮助避免命名冲突（名称冲突）：两个包中的同名变量的区别在于他们的包名，例如 <code>pack1.Thing</code> 和 <code>pack2.Thing</code> 。</p><p>下面的代码展示了如何使用包的别名：</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> fm </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// alias3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   fm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>你可以通过使用包的别名来解决包名之间的名称冲突，或者说根据你的个人喜好对包名进行重新设置，如： <code>import fm &quot;fmt&quot;</code> 。</p><div class="warning custom-block"><p class="custom-block-title">注意事项</p><p>如果你导入了一个包却没有使用它，则会在构建程序时引发错误，如 <code>imported and not used: os</code> ，这正是遵循了 Go 的格言：</p><p>“没有不必要的代码！“</p></div><h2 id="包的分级声明和初始化" tabindex="-1">包的分级声明和初始化 <a class="header-anchor" href="#包的分级声明和初始化" aria-label="Permalink to &quot;包的分级声明和初始化&quot;">​</a></h2><p>你可以在使用 <code>import</code> 导入包之后定义或声明 0 个或多个常量（const）、变量（var）和类型（type），这些对象的作用域都是全局的（在本包范围内），所以可以被本包中所有的函数调用（如 gotemplate.go 源文件中的 c 和 v），然后声明一个或多个函数（func）。</p><h2 id="go命名规范" tabindex="-1">Go命名规范 <a class="header-anchor" href="#go命名规范" aria-label="Permalink to &quot;Go命名规范&quot;">​</a></h2><p>干净、可读的代码和简洁性是 Go 追求的主要目标。</p><p>通过 gofmt 来强制实现统一的代码风格。</p><p>Go 语言中对象的命名也应该是简洁且有意义的。</p><p>像 Java 和 Python 中那样使用混合着大小写和下划线的冗长的名称会严重降低代码的可读性。</p><p>名称不需要指出自己所属的包，因为在调用的时候会使用包名作为限定符。</p><p>返回某个对象的函数或方法的名称一般都是使用名词，没有 <code>Get...</code> 之类的字符，如果是用于修改某个对象，则使用 <code>SetName</code>。</p><p>有必须要的话可以使用大小写混合的方式，如 <code>MixedCaps</code> 或 <code>mixedCaps</code> ，而不是使用下划线来分割多个名称。</p>`,58),l=[p];function c(t,r,i,d,u,m){return a(),o("div",null,l)}const y=s(e,[["render",c]]);export{D as __pageData,y as default};