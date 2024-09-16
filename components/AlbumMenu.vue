<template>
    <div class="menu">
        <NuxtLink v-for="album in albums" :key="album" :to="`/gallery/${album}`" activeClass="active">
            {{ album }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts"> 
const albums = ['japan', 'sailing']; // TODO API?

</script>

<style scoped lang="less">

.menu {
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    font-size: 20px;
    text-align: center;

    a {
        width: 100px;
        padding: 5px 0;
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: red;
    }

    .active:not(hover) {
        background: red;
        color: white;
    }
}

</style>