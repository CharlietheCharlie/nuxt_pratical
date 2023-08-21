<script setup>

const pages = {
  'member': { chineseName: "會員專區", url: "/member" },
  'weather': { chineseName: "天氣", url: "/weather" },
  'todo': { chineseName: "待辦事項", url: "/todo" },
}
const firebaseUser = useFirebaseUser();
const regex = /^([^@]+)@/;

</script>

<template>
  <div class="header">
    <NuxtLink class="title" to="/">
      查理的實用小工具V1.0
    </NuxtLink>
    <Mode class="mode"></Mode>

    <ul>
      <div v-if="firebaseUser" class="log logged">
      <button @click="signOutUser()" v-if="firebaseUser"><span>{{ firebaseUser.email.match(regex)[1] }}，登出</span></button>

    </div>
      <li v-for="page in pages">
        <NuxtLink class="bg-white dark:bg-slate-800 dark:text-white" :to="page.url">{{ page.chineseName }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  justify-content: space-between;
  display: flex;

  .mode {
    align-self: center;
    position: relative;


  }
}

ul {
  display: flex;
  position: relative;
  .log{
    position: absolute;
    left: -10vw;
    top:50%;
    transform: translateY(-50%);
    span:hover {
      text-decoration: underline;
    }
  }
  li {
    display: block;
    box-sizing: border-box;
    width: 10vw;
    height: 100%;

    :hover {
      background-color: rgb(206, 190, 46);
    }

    a {
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }
}</style>
