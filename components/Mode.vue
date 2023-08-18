<template>
    <div>
        <select class="select w-full max-w-xs bg-white dark:bg-slate-800 dark:text-white"
            @change="colorMode.preference = select" v-model="select">
            <option disabled selected class="text-black dark:text-white">切換模式</option>
            <option v-for="theme of themes" :key="theme">{{ Object.keys(theme)[0] }}</option>
        </select>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const select = ref('切換模式');
const themes = [
    { 'light': '日間模式' },
    { 'dark': '夜間模式' }]
</script>

<style lang="scss" scoped>

</style>