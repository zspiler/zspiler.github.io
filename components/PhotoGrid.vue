<template>
    <div v-if="view === 'grid'" class="photo-grid">
        <div 
          @click="goToCarousel(index)" 
          class="photo" 
          v-for="(image, index) in images" :key="image" 
        >
          <img :src="`/images/${album}/${image}`" :alt="`Image ${image}`">
        </div>
    </div>

    <div v-else>
      <!-- TODO make carousel /gallery/../browse, send initial via route -->
      <Carousel v-if="images" :image-urls="imageUrls" :initial-slide="clickedSlide" />
    </div> 

</template>

<script setup lang="ts">
import imageList from '~/static/data/imageList.json';

const props = defineProps<{
  album: string;
}>();

const view = ref('grid');

const clickedSlide = ref(0);

const images = (imageList as Record<string, string[]>)[props.album] ?? [];
const imageUrls = images.map(image => `/images/${props.album}/${image}`);

function goToCarousel(index: number) {
  clickedSlide.value = index;
  view.value = 'carousel';
}

</script>

<style scoped lang="less">

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4px; 
  padding: 10px;
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto; 
}

.photo {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
  
  &:hover {
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; 
  }

  &:hover img {
    transform: scale(1.1);
  }
}
</style>