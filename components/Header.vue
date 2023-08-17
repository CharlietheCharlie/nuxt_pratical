<script setup>

const pages = {
  'member':{chineseName:"會員專區",url:"/member"},
  'weather':{chineseName:"天氣",url:"/weather"},
  'todo':{chineseName:"待辦事項",url:"/todo"},
}

</script>

<template>
  <div class="header">
    <ul>
      <li v-for="page in pages"><NuxtLink class="bg-white dark:bg-slate-800 dark:text-white" :to="page.url">{{ page.chineseName }}</NuxtLink></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header{
  position: absolute;
  right: 0;
  top: 0;
}
ul{
  display: flex;

  li{
    box-sizing: border-box;
    width:10vw;
    height: 4vw;
    :hover{
      background-color: rgb(206, 190, 46);
    }
    a{
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width:100%;
      height: 100%;
    }
  }
}
</style>
