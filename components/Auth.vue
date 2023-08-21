<template>
    <div :class="pop?'outside':''">
    <div class="sign" :class="pop ? 'pop' : ''">
        <button v-if="pop" @click="$emit('showAuth')" type="button"
            class="close m-5 mr-0 bg-white rounded-md p-2 mb-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h1 class="mb-3 font-bold" v-if="pop">Sign Up/Sign In</h1>
        <form class="w-full max-w-sm">
            <div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        E-mail
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="email"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:text-black focus:border-purple-500"
                        id="inline-full-name" type="email" placeholder="請輸入E-mail">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="password"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:text-black focus:border-purple-500"
                        id="inline-password" type="password" placeholder="請輸入6位數(含)以上密碼">
                </div>
            </div>

            <div class="md:flex md:items-center mb-3">
                <div class="md:w-1/3"></div>
                <div class="md:w-1/3">
                    <button @click="signUp()"
                        class="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button">
                        註冊
                    </button>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-1/3">
                    <button @click="signIn()"
                        class="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button">
                        登入
                    </button>
                </div>
            </div>
            <!-- <p class="green md:flex md:justify-center mb-6">{{ signMessage }}</p> -->
            <p class="red md:flex md:justify-center mb-6">{{ firebaseError }}</p>
        </form>

    </div>
</div>
</template>

<script setup>
const props = defineProps({ 'pop': false });
const emits = defineEmits(['showAuth']);
const firebaseUser = useFirebaseUser();
const firebaseError = useFirebaseError();
const email = ref();
const password = ref();
const signMessage = ref("");
const signUp = async () => {
    formCheck();
    const credentials = await createUser(email.value, password.value);
    email.value = "";
    password.value = "";
    if (credentials) {
        signMessage.value = credentials;
        alert("註冊成功");
    }
    setTimeout(() => { signMessage.value = "" }, 3000);
    signOutUser();
}
const signIn = () => {
    formCheck();
    signInUser(email.value, password.value);
    email.value = "";
    password.value = "";

}
const formCheck = () => {
    document.querySelectorAll("input").forEach(input => {
        if (input.value === "") {
            input.classList.add("border-red-500");
        } else {
            input.classList.remove("border-red-500");
        }
    })
}

</script>

<style lang="scss" scoped>
.sign {
    width: 30vw;
    .red{
            color:red;
        }
    .green{
        color: green
    }
    &.pop {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 50vh;
        left: 50vw;
        padding:2vw ;
        transform: translate(-50%, -50%);
        width: 65%;
        height: 60%;
        border: 1px solid rgb(141, 141, 141);
        border-radius: 5px;

        .close {
            align-self: end;
            position: relative;
            right: 0;
        }
      
    }

}
.outside{
    cursor:not-allowed;
    position: absolute;
    width:100vw;
    height: 100vh;
    .sign{
        cursor:default;
    }
    h1{
        font-size: 3vw;
        font-family: 'Dancing Script', cursive;
    }
}
</style>