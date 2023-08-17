<template>
    <div>
        <pre>{{ pages }}</pre>

    </div>
</template>

<script setup>
import { add, del, queryByCollection } from '../server/lib/firestore';
const pages = ref();
onMounted(async()=>{
     pages.value = await queryByCollection("pages");
})
</script>

<style lang="scss" scoped></style>