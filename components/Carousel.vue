<template>
    <div class="container">
        <div class="embla" ref="emblaRef">
            <div class="embla-container">
                <div v-for="(imageUrl, index) in imageUrls" class="embla-slide">
                    <img :src="imageUrl" alt="Image">
                    <label class="counter">{{ index + 1 }} / {{ imageUrls.length }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

defineProps<{
  imageUrls: string[];
}>();

const [emblaRef, emblaApi] = emblaCarouselVue()

function logSlidesInView(emblaApi) {
    console.log(emblaApi.slidesInView())
}

onMounted(() => {
    if (emblaApi.value) {
        emblaApi.value.on('slidesInView', logSlidesInView)
    }
})

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
        emblaApi.value?.canScrollNext() && emblaApi.value.scrollNext()
    } else if (event.key === 'ArrowLeft') {
        emblaApi.value?.canScrollPrev() && emblaApi.value.scrollPrev()
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
    gap: 10px;
    width: 100vw;
}

img {
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100%;
    // max-height: 100%;
    object-fit: cover;
    user-select: none;
}

.counter {
    color: gray;
}

.embla {
    overflow: hidden;
    height: 80%;
    width: 100%;
}

.embla-container {
    height: 80%;
    display: flex;
}

.embla-slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>