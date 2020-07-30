---
home: true
permalink: false
heroImage: /hero.jpg
heroText: 我的博客
tagline: 前端随笔
actionText: 快到碗里来
actionLink: /article/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2020-present Chong25
---
# 内容随便了
<ClientOnly>
<Badge type="tip" text="危险" vertical="middle"/>
  <Badge type="error" text="危险error" vertical="middle"/>
  <Badge type="yellow" text="warn危险" vertical="middle"/>
</ClientOnly>

<<<@/docs/.vuepress/public/snippet.js#ab{1,3}

![Image from alias](~@public/hero.jpg)
[关于](/about/)
# 你们开心就好
## 刷一下
### 洗刷刷
[[toc]]
::: tip Tip
这是一个提示
:::
::: warning Warning
这是一个警告
:::
::: danger STOP
这是一个危险警告
:::
::: details 点击查看代码

```js{3,5-7,9}
console.log("你好，VuePress！");
export default {
  name: "Alex",
  sex: "male",
  age: 23,
  subject: {
    math: 98,
    English: 99,
    Chinese: 89,
    physice: 97,
  },
};
```

:::

:tada: :100:

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |
