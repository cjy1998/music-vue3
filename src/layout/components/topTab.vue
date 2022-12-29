<template>
  <div class="top">
    <!-- <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
      class="menu"
    /> -->
    <div class="logo">
     <img src="../../assets/image/logo.png" alt="">
      <router-link to="/">好音乐</router-link>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/about">关于</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "About",
          },
        },
        { default: () => "回家" }
      ),
    key: "go-back-home",
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",

    disabled: true,
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",

    disabled: true,
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",

    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
          },
          {
            label: "羊男",
            key: "sheep-man",
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",

        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

const activeKey = ref(null);
</script>

<style scoped>
.top {
  width: 100%;
  height: 70px;
  background-color: #242424;
  display: flex;
  align-items: center;
  justify-content:space-between;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
}
.logo img{
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.logo{
  display: flex;
  align-items: center;
}
.tab{
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-item{
  margin-left: 20px;
  color: #ffffff;
}
.menu {
  color: #ffff !important;
}
</style>
