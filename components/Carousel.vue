<template>
    <div class="container">
        <div class="carousel">
            <img :src="`${imageUrls[imageIndex]}`" :alt="`Image`">
        </div>
        <CarouselPreview v-model:image-index="imageIndex" :imageUrls="imageUrls" /> 
    </div>
    
</template>

<script setup lang="ts">
const props = defineProps<{
  imageUrls: string[];
}>();


const imageIndex = ref(0)

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})

function onKeyDown(event: KeyboardEvent) {
    const isArrowKey = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(event.key)
    if (!isArrowKey) return

    event.preventDefault()
    event.stopPropagation()

    if (event.key === 'ArrowRight') {
        imageIndex.value = Math.min(imageIndex.value + 1, props.imageUrls.length - 1)
    } else if (event.key === 'ArrowLeft') {
        imageIndex.value = Math.max(imageIndex.value - 1, 0) 
    }
}
</script>

<style scoped lang="less">

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    // width: 100%;
    // height: 100%;
    gap: 10px;
    // width: 100vw;
}

.carousel {
    display: flex;
    justify-content: center;
    background-color: blue;
    height: 80%;
}

img {
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

</style>