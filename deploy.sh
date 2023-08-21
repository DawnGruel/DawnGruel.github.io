#!/usr/bin/env sh

# 忽略错误
set -e

build() {
    # 构建
    echo "开始构建..."
    npm run docs:build

    echo "开始构建Git提交..."
    git add .
    git commit -m "$commit_message"

    # 如果部署到 https://<USERNAME>.github.io
    echo "推送到远程仓库..."
    git push -f https://github.com/DawnGruel/DawnGruel.github.io.git $branch

    echo "推送完成."
    cd -
}

# 设置参数的默认值
command="${1:-build}"
commit_message="${2:-Default commit message}"
branch="${3:-dev}"

case "$command" in
    "build")
        build
        ;;
    *)
        echo "Usage: $0 [build] [commit_message] [branch]"
        exit 1
        ;;
esac
