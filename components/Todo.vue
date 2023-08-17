<template>
    <div class="todo">
        <button class="pin" :class="{ 'pinned': pinned }" @click="pin()">釘選</button>
        <div class="top">
            <h1 v-if="thing">待辦事項:<br>{{ thing?.name }}</h1>
            <input @keydown.enter="editing = false" v-show="editing" type="text" v-model.lazy="thing.name">
            <!-- <button v-if="thing">釘選</button> -->
        </div>
        <div class="mid">
            <h3>詳細內容:<br>{{ thing?.detail }}</h3>
            <textarea @keydown.enter="editing = false" v-show="editing" v-model.lazy="thing.detail" name="" id="" cols="30"
                rows="10"></textarea>
            <h3>期限:<br>{{ thing?.deadline }}</h3>
            <input @keydown.enter="editing = false" v-show="editing" type="text" v-model.lazy="thing.deadline">

        </div>
        <div class="bottom">
            <button v-if="!editing" @click="editing = true">編輯</button>
            <button v-if="!editing" @click="deleteThing()" :disabled="pinned">刪除</button>
            <button v-if="editing" @click="editing = false">確認</button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({ thing: { type: Object }, pinned: { type: Boolean, default: false } });
const emits = defineEmits(['delete', 'pin']);
const thing = ref(props.thing);
const editing = ref(false);
const deleteThing = () => {
    emits('delete');
}
const pin = () => {
    emits('pin');
}

</script>

<style lang="scss" scoped>
.todo {
    border: 1px lightgray solid;
    padding: 1vw;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-break: break-all;
    transition: height 1s;
    line-height: 1.3;

    input,
    textarea {
        border: lightgrey 1px solid;
    }

    button {
        cursor: pointer;
        border: none;
        padding: .5vw 1vw;

        &:hover {
            background-color: rgb(251, 174, 174);
        }

        &:disabled {
            background-color: #cccccc;
            color: #afafaf;
            cursor:not-allowed;
        }
    }

    >div {
        width: 100%;
        display: flex;
        margin-bottom: 1vw;
        gap: 1vw;

    }

    .top {
        flex-direction: column;
    }

    .mid {
        flex-direction: column;
    }

    .bottom {
        justify-content: end;

    }

    .pin {
        position: absolute;
        right: .5vw;
        top: .5vw;

        &.pinned {
            background-color: rgb(147, 147, 247);
            color: white;
        }
    }
}</style>