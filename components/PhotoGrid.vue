<template>
    <div class="photo-grid">
        <div class="photo" v-for="image in images" :key="image" ><img :src="`/images/${album}/${image}`" :alt="`Image ${image}`"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  album: string;
}>();

const { data: images } = await useFetch<string[]>(`/api/images/${props.album}`);
</script>

<style scoped lang="less">

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px; 
  padding: 10px;
  width: 100%;
  max-width: 1000px; 
  margin: 0 auto; /* center the grid */
}

.photo {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the container without distortion */
    transition: transform 0.3s ease; /* Smooth zoom effect on hover */
  }

  &:hover img {
    transform: scale(1.1); /* Slight zoom-in effect */
  }
}


</style>