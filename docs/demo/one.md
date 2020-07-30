---
title:第一篇
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
## 刷一下2345
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