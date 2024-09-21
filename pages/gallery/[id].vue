<template>
    <PhotoGrid :album="album"/>
</template>

<script setup lang="ts">
const route = useRoute()

const album = route.params.id as string
</script>