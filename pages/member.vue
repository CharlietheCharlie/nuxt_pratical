<template>
    <div>
        <pre>{{ pages }}</pre>

    </div>
</template>

<script setup>
import { add, del } from '../server/lib/firestore';
const pages = ref();
onMounted(async()=>{
     console.log(await del("pages",'2fjmhuFZpRNSQoHrzNG5'));
})
</script>

<style lang="scss" scoped></style>