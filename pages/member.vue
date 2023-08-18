<template>
    <div>
        <pre>{{ pages }}</pre>
        <button @click="fetchData()">123{{ $gg }}</button>
    </div>
</template>

<script setup>
const { $firestoreDb,$gg } = useNuxtApp();
import { add, del, queryByCollection } from '../server/lib/firestore';
const pages = ref();
const fetchData = async()=>{
    
     pages.value = await queryByCollection($firestoreDb,"pages");
}
</script>

<style lang="scss" scoped></style>