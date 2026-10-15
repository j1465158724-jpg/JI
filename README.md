# JI · 个人主页

战锤40k 哥特帝国风格的个人主页，用 React + Vite 构建，部署在 Cloudflare 上。

## 修改内容

所有文字内容都在 **`src/data/profile.js`** 里：名字、头衔、开场终端文字、自我介绍、技能、项目、联系方式。改完保存、推送到 GitHub，Cloudflare 会自动重新部署。

浏览器标签页标题和网页描述在 `index.html` 里。

## 本地运行

需要 Node.js 20.19 或更高版本（推荐 22）。

```bash
npm install
npm run dev      # 本地预览，打开 http://localhost:5173
npm run build    # 打包到 dist/
```

## 部署到 Cloudflare

### 方式一：Cloudflare Workers（推荐，Cloudflare 现在的默认方式）

1. 登录 Cloudflare 控制台 → **Workers 和 Pages** → **创建** → **导入存储库**，选择这个 GitHub 仓库。
2. 构建设置：
   - 构建命令：可以留空（`wrangler.jsonc` 里已配置部署前自动执行 `npm install && npm run build`）
   - 部署命令：`npx wrangler deploy`
3. 保存并部署。打包好的 `dist/` 会作为静态网站发布。

### 方式二：Cloudflare Pages

1. **Workers 和 Pages** → **创建** → **Pages** → **连接到 Git**，选择这个仓库。
2. 框架预设选 **React (Vite)**，或者手动填：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
3. 在环境变量里加 `NODE_VERSION` = `22`，然后保存并部署。

两种方式之后每次推送到 `main` 分支都会自动重新部署。绑定自己的域名在项目的 **设置 → 域和路由** 里添加。

## 项目结构

```
src/
  data/profile.js          ← 个人信息（只需改这里）
  App.jsx                  页面结构：首屏、档案、技艺、远征、联络
  components/
    RoseWindow.jsx         首屏玫瑰花窗
    Cogitator.jsx          开场逐字打出的终端
    PuritySeal.jsx         火漆纯洁封印
    SkullRule.jsx          章节分隔线
  styles.css               全部样式与配色
wrangler.jsonc             Cloudflare Workers 部署配置
```

本站为粉丝向致敬设计，与 Games Workshop 无关，未使用任何官方徽标或素材。
