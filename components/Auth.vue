<template>
    <div>


  
        <div >
  
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
            <!-- <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox">
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div> -->
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
        </form>
        <p class="md:flex md:items-center mb-6">{{ signMessage }}</p>
        </div>
     
    </div>
</template>

<script setup>


const firebaseUser = useFirebaseUser();
const email = ref();
const password = ref();
const signMessage = ref();
const signUp =async ()=>{
    formCheck();
    const credentials =await createUser(email.value, password.value);
    email.value = "";
    password.value = "";
    if(credentials){
        signMessage.value = `${credentials.user.email}註冊成功!`;
        setTimeout(()=>{signMessage.value=""},3000);
    }
}
const signIn = ()=>{
    formCheck();
    signInUser(email.value, password.value);
    email.value = "";
    password.value = "";
  
}
const formCheck = () => {
    document.querySelectorAll("input").forEach(input => {
        if (input.value === "") {
            input.classList.add("border-red-500");
        }else{
            input.classList.remove("border-red-500");
        }
    })
}

</script>

<style lang="scss" scoped></style>