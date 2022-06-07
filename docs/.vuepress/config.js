module.exports = {
  title: 'my blog',
  description: 'Just playing around',
  dest: './docs/dist',
  themeConfig: {
    sidebar: [
      {
        title: 'blog',   // 必要的
        path: '/a/b',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/a/sql.md','数据库操作'],
          ['/a/c.md','ccc']
        ]
      },
    ],
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/LiunanYang/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
  }
}
