<template>
    <div>
        <NuxtLink v-for="album in albums" :key="album" :to="`/gallery/${album}`" activeClass="active">
            {{ album }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts"> 
const albums = ['japan_18', 'japan_24', 'random', 'sailing']; // TODO API?

</script>

<style scoped lang="less">
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
</style>