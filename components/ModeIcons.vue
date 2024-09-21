<template>
    <div class="icons">
        <GridIcon :selected="modeStore.mode === 'grid'" @click="modeStore.setMode('grid')" />
        <CarouselIcon :selected="modeStore.mode === 'carousel'" @click="modeStore.setMode('carousel')" />
    </div>
</template>

<script setup lang="ts">
import GridIcon from '~/components/icons/GridIcon.vue'
import CarouselIcon from '~/components/icons/CarouselIcon.vue'

const modeStore = useModeStore()
</script>

<style scoped lang="less">
.icons {
    display: flex;
    gap: 5px;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
}
</style>