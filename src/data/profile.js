// ============================================================
//  个人信息配置 —— 改这一个文件就能更新整个主页的内容
// ============================================================

export const profile = {
  // 主页大标题（建议用拉丁字母，会以哥特花体显示）
  name: 'JI',
  // 名字下方的一句话头衔
  title: '开发者 · 机魂的侍奉者',
  // 浏览器标签页标题请在 index.html 的 <title> 里修改

  // 开场“沉思者终端”逐行打出的文字
  bootLines: [
    '> 正在唤醒机魂……',
    '> 校验身份印记：JI —— 已确认',
    '> 载入个人档案……完成',
    '> 祷文结束。欢迎你，访客。',
  ],

  // 档案：自我介绍，每个字符串是一段
  about: [
    '在这里写一段自我介绍：你是谁、在做什么、关心什么。两三句话就够了，像一份写给陌生人的简短卷宗。',
    '第二段可以写你的经历或者正在追求的方向。比如在哪里学习或工作，最近在钻研什么技术，或者业余时间在涂装哪支军团。',
  ],

  // 档案右侧的条目（左边是名称，右边是内容）
  facts: [
    { label: '所在星区', value: '地球 · 亚洲' },
    { label: '服役年限', value: '3 个标准泰拉年' },
    { label: '所属部门', value: '在此填写学校或公司' },
    { label: '效忠对象', value: '开源与好代码' },
  ],

  // 技艺：分组列出技能
  skills: [
    {
      rite: '前端仪式',
      note: '构建凡人可见的界面',
      items: ['React', 'TypeScript', 'CSS / 动效', 'Vite'],
    },
    {
      rite: '后端祷文',
      note: '与深层机魂对话',
      items: ['Node.js', 'Python', 'SQL', 'REST / API 设计'],
    },
    {
      rite: '神殿维护',
      note: '让一切持续运转',
      items: ['Git', 'Linux', 'Cloudflare', 'Docker'],
    },
  ],

  // 远征：项目经历，按时间从新到旧排列
  projects: [
    {
      year: '2026',
      name: '个人主页',
      desc: '你正在看的这个页面。React 构建，部署在 Cloudflare 上，风格取自第四十一个千年的哥特帝国。',
      link: 'https://github.com/j1465158724-jpg/JI',
      linkText: '查看源码',
    },
    {
      year: '2025',
      name: '项目名称二',
      desc: '一句话说明这个项目解决了什么问题、你在其中负责什么、用了哪些技术。',
      link: '',
      linkText: '',
    },
    {
      year: '2024',
      name: '项目名称三',
      desc: '同上。没有链接的项目把 link 留空即可，按钮会自动隐藏。',
      link: '',
      linkText: '',
    },
  ],

  // 联络频道
  contacts: [
    { channel: 'GitHub', value: 'j1465158724-jpg', href: 'https://github.com/j1465158724-jpg' },
    { channel: '电子邮件', value: 'you@example.com', href: 'mailto:you@example.com' },
  ],

  // 页脚落款
  closing: '愿机魂安宁，愿代码无误。',
};
