<script setup>
const colorMode = useColorMode();
const select = ref('切換模式');
const themes = [
    {'light':'日間模式'},
    {'dark':'夜間模式'}]
</script>
<template>
	<select class="select w-full max-w-xs bg-white dark:bg-slate-800 dark:text-white" @change="colorMode.preference=select" v-model="select">
		<option disabled selected class="text-black dark:text-white">切換模式</option>
		<option v-for="theme of themes" :key="theme">{{ Object.keys(theme)[0] }}</option>
	</select>
	<div class="bg-white dark:bg-slate-800 dark:text-white">
		<NuxtLink class="title" to="/">
			查理的實用小工具V1.0
		</NuxtLink>
		<h1 class="text-3xl">
			Hello world!
		</h1>
		<Header></Header>
		<NuxtPage />
	</div>
</template>
<style lang="postcss">

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

body {
  @apply min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200;
}

input, textarea, button, a, select{
	@apply bg-white dark:bg-slate-800 dark:text-slate-200;
}

::-webkit-calendar-picker-indicator{
	@apply bg-slate-400;
}



</style>