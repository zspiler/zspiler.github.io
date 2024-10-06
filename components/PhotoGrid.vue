<template>
    <div v-if="view === 'grid'" class="photo-grid">
        <div 
          @click="goToCarousel(index)" 
          class="photo" 
          v-for="(image, index) in images" :key="image" 
        >         
          <img 
            loading="lazy"
            :src="`/images/resized/${album}/${getResizedImageFilename(image, 640)}`" 
            :srcset="`
              /images/resized/${album}/${getResizedImageFilename(image, 420)} 420w, 
              /images/resized/${album}/${getResizedImageFilename(image, 640)} 640w, 
              /images/resized/${album}/${getResizedImageFilename(image, 1024)} 1024w, 
            `" 
            sizes="20vw"
            :alt="`Image ${index}`" 
          />
          <!-- NOTE: sizes not optimal but this is extremely boring -->
        </div>
    </div>

    <div v-else>
      <!-- TODO make carousel /gallery/../browse, send initial via route -->
      <Carousel v-if="images" :album="album"  :initial-slide="clickedSlide" />
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

  /* minimum of two columns on small screens / mobile */
  @media (max-width: 600px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
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