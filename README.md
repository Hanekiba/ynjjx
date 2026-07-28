# 一年级上册 · 互动课件

统编（人教）版一年级**上册**语文 / 数学，自制零依赖单文件 HTML 互动课件，用于家庭自学。

- 固定 1920×1080 舞台，自动等比缩放适配手机 / 平板 / 电脑
- 活字动画 + 字理变身、数字点数、一一配对比较、朗读（Web Speech API）
- 支持键盘 ←/→/空格、触屏滑动、右下角「🏠 目录」返回

## 在线访问

推送 `main` 分支后，GitHub Actions 会自动发布到 GitHub Pages：

```
https://hanekiba.github.io/ynjjx/
```

手机 / 平板用浏览器打开该地址即可测试（HTTPS 下朗读功能可用）。

## 目录结构

| 文件 | 说明 |
|---|---|
| `index.html` | 目录首页，点 ▶ 进入各课 |
| `*.html` | 各课课件（语文 + 数学） |
| `gen-manifest.js` | 各课内容清单（改这里增删认字 / 课文） |
| `gen-build.js` | 课件生成器（读取清单产出 HTML） |
| `validate.js` | 生成后自动校验（溢出 / 结构检查） |
| `deploy.sh` | 部署脚本（提交并推送到 main） |
| `.github/workflows/deploy.yml` | 自动发布到 Pages 的工作流 |

> `demo-*.html`、`gen-*.js`、`validate.js`、`.workbuddy/` 等仅为本地开发用，不会发布到站点。

## 本地修改与更新

1. 改内容：编辑 `gen-manifest.js`，然后运行
   ```bash
   node gen-build.js     # 重新生成各课 HTML
   node validate.js      # 自动校验
   ```
2. 发布：在 Git Bash 中运行
   ```bash
   bash deploy.sh
   ```
   脚本会提交改动并推送到 `main`，GitHub Actions 自动重新发布。

首次使用需在仓库 **Settings → Pages → Source 选择 `GitHub Actions`**（一次性），之后每次 push 自动更新。

## 说明

- 朗读依赖设备自带的语音包；右上角可切换声音、调节语速。
- 拼音声调、儿歌 / 课文原文请对照手中课本核对。
