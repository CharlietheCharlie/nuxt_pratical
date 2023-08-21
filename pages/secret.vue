<template>
    <div>
        <h1>member login</h1>
        <pre>
          {{ firebaseUser }}
        </pre>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
});
const firebaseUser = useFirebaseUser();
</script>

<style lang="scss" scoped>

</style>