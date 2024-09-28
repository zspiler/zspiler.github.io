<template>
    <div v-if="modeStore.mode === 'grid'" class="photo-grid">
        <div 
          @click="goToCarousel" 
          class="photo" 
          v-for="image in images" :key="image" 
        >
          <img :src="`/images/${album}/${image}`" :alt="`Image ${image}`">
        </div>
    </div>

    <div v-else>
      <Carousel v-if="images" :image-urls="imageUrls" />
    </div>

</template>

<script setup lang="ts">
const props = defineProps<{
  album: string;
}>();

const modeStore = useModeStore();

const { data } = await useFetch<string[]>(`/api/images/${props.album}`);
const images = data.value ?? [];

const imageUrls = images.map(image => `/images/${props.album}/${image}`);

function goToCarousel() {
  modeStore.setMode('carousel')
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