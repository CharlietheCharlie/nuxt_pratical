<template>
    <div class="member">
        <h1>Membership</h1>
        <NuxtLink to="/secret">secret</NuxtLink>
        <div v-if="!firebaseUser" class="not-log">
            <form action="post">
                <div>帳號<input placeholder="電子信箱" type="text" v-model="email"></div>
                <div>密碼<input placeholder="6位數(含)以上密碼" type="password" v-model="password"></div> 
            </form>
            <button @click="createUser(email, password)">註冊</button>
            <button @click="signInUser(email, password)">登入</button>

        </div>
        <div v-if="firebaseUser" class="logged">
            <button @click="signOutUser()" v-if="firebaseUser">登出</button>
            <pre>{{ userData }}</pre>
            <button @click="fetchData()">取得</button>
            <button @click="add($firestoreDb, 'data',{frontendValue:0},firebaseUser.uid)">加入</button>
        </div>
        <pre>{{ firebaseUser?.uid }}</pre>

    </div>
</template>

<script setup>


const { $firestoreDb } = useNuxtApp();
const email = ref();
const password = ref();
const userData = ref();
const firebaseUser = useFirebaseUser();


const fetchData = async () => {
    if(firebaseUser){
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

    .not-log {
        display: flex;
        flex-direction: column;
        form{
            display: flex;
            flex-direction: column;
            gap: 1vw;
            margin: 1vw;
            input{
                background-color: #fff;
                margin-left: 1vw;
                color: black;
            }
        }
    }
}
</style>