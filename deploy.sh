#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
echo "开始构建..."
npm run docs:build

# 进入待发布的目录
# echo "进入待发布的目录..."
# cd docs/blog

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo "开始构建Git提交..."
git add .
git commit -m "new file"

# 如果部署到 https://<USERNAME>.github.io
echo "推送到远程仓库..."
git push -f https://github.com/DawnGruel/DawnGruel.github.io.git dev

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<dawngruel>/<REPO>.git master:gh-pages
echo "推送完成."
cd -