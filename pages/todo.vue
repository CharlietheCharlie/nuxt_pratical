<template>
    <div class="todo-list">
        <h1>Todo List</h1>
        <button class="create" @click="inputsDisplay = !inputsDisplay;" v-show="!inputsDisplay">開始新增</button>
        <transition>
            <div class="inputs" v-show="inputsDisplay">
                <div>
                    <input class="input" @keydown.enter="addThing()" type="text" v-model="newThing.name"
                        placeholder="請輸入事項名稱">
                </div>
                <div>
                    <input class="input" @keydown.enter="addThing()" type="text" v-model="newThing.detail"
                        placeholder="請輸入詳細內容">
                </div>
                <div>
                    期限:<input class="input" @keydown.enter="addThing()" type="date" v-model="newThing.deadline">
                </div>
                <div><button @click="addThing()">新增</button>
                </div>
            </div>

        </transition>
        <div class="todos">
            <Todo v-for="thing, index in things.pin" :key="thing" :thing="thing" :pinned=true
                @delete="things.pin.splice(index, 1)" @pin="things.regular.unshift(thing); things.pin.splice(index, 1);">
            </Todo>

            <Todo v-for="thing, index in things.regular" :key="thing" :thing="thing"
                @delete="things.regular.splice(index, 1)" @pin="things.regular.splice(index, 1); things.pin.push(thing)">
            </Todo>
        </div>
    </div>
</template>

<script setup>
const inputsDisplay = ref(false);
const newThing = ref({
    name: "",
    detail: "",
    deadline: ""
});
const things = reactive({ pin: [], regular: [] });
const addThing = () => {
    if (!Object.values(newThing.value).includes("")) {
        things.regular.push(newThing.value);
        newThing.value = { name: "", detail: "" }
        document.querySelectorAll(".input").forEach(input => {
            input.classList.remove("empty");
        })
        return;
    }
    document.querySelectorAll(".input").forEach(input => {
        if (input.value === "") {
            input.classList.add("empty");
        }
    })
}

</script>

<style lang="scss" scoped>
$button-color: rgb(117, 186, 117);

.todo-list {
    min-width: 300px;
    width: 50vw;
    margin: 6vw auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 3vw;

    .v-enter-active,
    .v-leave-active {
        transition: opacity 1s;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    h1 {
        font-size: 6vw;
        font-family: 'Dancing Script', cursive;
    }

    .create {
        font-size: 1.5vw;
        width: 60%;
        background-color: $button-color;
        line-height: 150%;
        border: 0;


        &:hover {
            background-color: darken($button-color, 10%);
        }
    }

    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vw;

        button {
            border: none;
            cursor: pointer;
            padding: .8vw 1.5vw;

            &:hover {
                background-color: rgb(143, 143, 212);
            }
        }

        .empty {
            border: 1px solid red;
        }
    }

    .todos {
        width: 100%;
        display: flex;
        gap: 2vw;
        flex-direction: column;
    }

}</style>