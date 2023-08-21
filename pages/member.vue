<template>
    <div class="member">
        <h1>Membership</h1>
        <Auth v-if="!firebaseUser"></Auth>
        <div v-if="firebaseUser">
            <pre>{{ userData }}</pre>
            <button @click="fetchData()">取得</button>
            <button @click="add($firestoreDb, 'data', { frontendValue: 0 })">加入</button>
            <pre>{{ firebaseUser?.uid }}</pre>
        </div>
    </div>
</template>

<script setup>

const { $firestoreDb } = useNuxtApp();
const firebaseUser = useFirebaseUser();
const userData = ref();

const fetchData = async () => {
    if (firebaseUser.value) {
        console.log(firebaseUser);
        userData.value = await queryByCollection($firestoreDb, "data");
    }
}

</script>

<style lang="scss" scoped>
.member {
    min-width: 300px;
    width: 50vw;
    margin: 6vw auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 3vw;

    h1 {
        font-size: 6vw;
        font-family: 'Dancing Script', cursive;
    }


}
</style>