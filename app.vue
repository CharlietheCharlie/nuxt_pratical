<script setup>

</script>
<template>
	<Header></Header>
	<div class="bg-white dark:bg-slate-800 dark:text-white">
	
		<h1 class="text-3xl">
			Hello world!
		</h1>
		
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