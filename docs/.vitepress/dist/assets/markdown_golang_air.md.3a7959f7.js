import{_ as s,o as n,c as a,O as l}from"./chunks/framework.1156b012.js";const p="/assets/Air_Successful_installation.b0130862.jpg",d=JSON.parse('{"title":"Air热更新使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/golang/air.md","filePath":"markdown/golang/air.md"}'),o={name:"markdown/golang/air.md"},e=l(`<h1 id="air热更新使用指南" tabindex="-1">Air热更新使用指南 <a class="header-anchor" href="#air热更新使用指南" aria-label="Permalink to &quot;Air热更新使用指南&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>首先安装air的最新版本，命令如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com/cosmtrek/air@latest</span></span></code></pre></div><blockquote><p>此处需要使用的是install安装，Air属于本地Go环境的全局插件</p></blockquote><p>安装完成后需要配置mac的环境变量</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span></code></pre></div><p>在文件输入如下配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">alias air=&#39;/Users/xxxx/go/bin/air&#39;</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>在项目根目录下创建 <code>.air.conf</code> 文件，粘贴以下内容保存</p><details class="details custom-block"><summary>.air.conf配置内容</summary><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># [Air](https://github.com/cosmtrek/air) TOML 格式的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 工作目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 . 或绝对路径，请注意 \`tmp_dir\` 目录必须在 \`root\` 目录下</span></span>
<span class="line"><span style="color:#A6ACCD;">root = &quot;.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">tmp_dir = &quot;tmp&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[build]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 只需要写你平常编译使用的shell命令。你也可以使用 \`make\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Windows平台示例: cmd = &quot;go build -o ./tmp/main.exe .&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd = &quot;go build -o ./tmp/main.exe .&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 由 \`cmd\` 命令得到的二进制文件名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Windows平台示例：bin = &quot;tmp/main.exe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">bin = &quot;tmp/main.exe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 自定义执行程序的命令，可以添加额外的编译标识例如添加 GIN_MODE=release</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Windows平台示例：full_bin = &quot;./tmp/main.exe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Linux平台示例：full_bin = &quot;APP_ENV=dev APP_USER=air ./tmp/main.exe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">full_bin = &quot;./tmp/main.exe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 监听以下文件扩展名的文件.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">include_ext = [&quot;go&quot;, &quot;tpl&quot;, &quot;tmpl&quot;, &quot;html&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 忽略这些文件扩展名或目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exclude_dir = [&quot;assets&quot;, &quot;tmp&quot;, &quot;vendor&quot;, &quot;frontend/node_modules&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 监听以下指定目录的文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">include_dir = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 排除以下文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exclude_file = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果文件更改过于频繁，则没有必要在每次更改时都触发构建。可以设置触发构建的延迟时间</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">delay = 1000 # ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发生构建错误时，停止运行旧的二进制文件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stop_on_error = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># air的日志文件名，该日志文件放置在你的 \`tmp_dir\` 中</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">log = &quot;air_errors.log&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[log]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示日志时间</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">time = true</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[color]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 自定义每个部分显示的颜色。如果找不到颜色，使用原始的应用程序日志。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main = &quot;magenta&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">watcher = &quot;cyan&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">build = &quot;yellow&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">runner = &quot;green&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[misc]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 退出时删除tmp目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">clean_on_exit = true</span></span></code></pre></div></details><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在项目内执行如下命令，运行成功</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">air</span></span></code></pre></div><p>运行成功后显示如下内容</p><p><img src="`+p+'" alt="Air安装完成"></p>',17),t=[e];function c(i,r,C,A,y,u){return n(),a("div",null,t)}const m=s(o,[["render",c]]);export{d as __pageData,m as default};
