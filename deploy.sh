#!/usr/bin/env bash
# ============================================================
#  一年级上册课件 · GitHub Pages 部署脚本
#  用法：
#    1) 仓库已建好： https://github.com/Hanekiba/ynjjx
#    2) REPO_URL 已填好，无需改动
#    3) 在 Git Bash 里运行： bash deploy.sh
#  推送后 GitHub Actions 自动发布到 Pages（首次需在
#  Settings → Pages → Source 选 'GitHub Actions'）。
#  之后每次改完课件，重新运行 bash deploy.sh 即可更新站点。
# ============================================================
set -euo pipefail

# ====== 配置 =================================================
# 改成你的仓库地址，例如：
#   REPO_URL="https://github.com/你的用户名/一年级上册课件.git"
#   （用 SSH 也行：git@github.com:你的用户名/一年级上册课件.git）
REPO_URL="https://github.com/Hanekiba/ynjjx.git"
# GitHub Pages 从该分支的 /(root) 提供页面
BRANCH="main"
# ============================================================

cd "$(dirname "$0")"

# 1) 初始化 git（如尚未初始化）
if [ ! -d .git ]; then
  git init -b "$BRANCH"
  echo "✅ 已初始化 git 仓库（分支 $BRANCH）"
fi

# 2) 写入 .gitignore，避免把源文件 / 记忆 / 演示页传上去
cat > .gitignore <<'EOF'
.workbuddy/
docs/
demo-*.html
gen-build.js
gen-manifest.js
validate.js
CONTEXT.md
人工检错清单.md
EOF

# 3) 确保有提交身份（没有就给一个本地默认值，可随时改）
if [ -z "$(git config user.email 2>/dev/null)" ]; then
  git config user.email "deploy@local"
  git config user.name  "课件部署"
  echo "ℹ️  未检测到 git 身份，已用本地默认值（可改：git config user.name/email）"
fi

# 4) 暂存全部变更（.gitignore 已排除源文件 / 演示页 / 记忆，仅留站点 + 工作流 + README）
git add -A

# 5) 提交（仅在内容有变化时）
if git diff --cached --quiet; then
  echo "✅ 没有需要提交的改动。"
else
  git commit -m "deploy: 更新一年级上册课件 $(date +%Y-%m-%d_%H:%M)"
  echo "✅ 已提交本地改动。"
fi

# 6) 列出将要随仓库上线的文件，方便核对
echo ""
echo "📦 将随仓库上线的文件（共 $(git ls-files | grep -v '^.gitignore$' | wc -l | tr -d ' ') 个）："
git ls-files | grep -v '^.gitignore$' | sed 's/^/   - /'

# 7) 配置远程并推送
if [ -z "$REPO_URL" ]; then
  echo ""
  echo "⚠️  尚未设置 REPO_URL，已只完成本地准备。"
  echo "    下一步："
  echo "      1) 在 github.com 新建一个【空】仓库（不要勾选 README / .gitignore）"
  echo "      2) 复制仓库地址，填进本脚本顶部的 REPO_URL"
  echo "      3) 重新运行： bash deploy.sh"
  exit 0
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "$REPO_URL"
fi

echo ""
echo "🚀 推送到 $BRANCH ..."
git push -u origin "$BRANCH"

echo ""
echo "✅ 推送完成！GitHub Actions 会自动构建并发布到 Pages："
echo "   1) 首次需在仓库 → Settings → Pages → Source 选择 'GitHub Actions'（一次性）"
echo "   2) 等 1~2 分钟，访问： https://hanekiba.github.io/ynjjx/"
echo "   3) 之后每次 bash deploy.sh 推送，站点会自动更新，无需再手动操作"
echo "   手机/平板用浏览器打开该地址即可测试（HTTPS 下朗读功能可用）。"
