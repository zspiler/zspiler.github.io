<template>
    <div class="container">
        <div class="embla" ref="emblaRef">
            <div class="embla-container">
                <div v-for="(image, index) in images" class="embla-slide">
                    <img 
                        :src="`/images/original/${album}/${image}`" 
                        :srcset="`
                        /images/resized/${album}/${getResizedImageFilename(image, 420)} 320w, 
                        /images/resized/${album}/${getResizedImageFilename(image, 640)} 640w, 
                        /images/resized/${album}/${getResizedImageFilename(image, 1024)} 1024w, 
                        /images/resized/${album}/${getResizedImageFilename(image, 1920)} 1920w
                        `" 
                        sizes="100vw, (min-width: 640px) 50vw, (min-width: 1024px) 400px"
                        :alt="`Image ${index}`" 
                    />
                    <label class="counter">{{ index + 1 }} / {{ images.length }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import imageList from '~/static/data/imageList.json';

const props = defineProps<{
  album: string;
  initialSlide?: number;
}>();

const [emblaRef, emblaApi] = emblaCarouselVue({duration: 0})

const images = (imageList as Record<string, string[]>)[props.album] ?? [];

function logSlidesInView(emblaApi) {
    console.log(emblaApi.slidesInView())
    console.log(emblaApi);
}

onMounted(() => {
    if (emblaApi.value) {
        emblaApi.value.on('slidesInView', logSlidesInView)
        if (props.initialSlide) {

            // NOTE hack to open carousel at Nth slide
            emblaApi.value.scrollTo(props.initialSlide)
            emblaApi.value.reInit({duration: 25}) 
        }
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