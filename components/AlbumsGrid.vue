<template>
    <div class="grid-container">
        <div class="album-grid">
            <div 
            @click="openAlbum(name)"
            class="album" 
            v-for="({previewPic, name}) in albums" :key="name" 
            >
                <img :src="`/images/original/${name}/${previewPic}`">
                <div class="title">{{name}}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// TODO API
const albums = [ 
    { name: 'japan_18', previewPic: '41410528_715477295465992_1207891247161749266_n_17955959389188583.jpg' }, 
    { name: 'japan_24', previewPic: '403376365_156951194143951_2974837460663147686_n_17986806374289904.jpg' }, 
    { name: 'random', previewPic: '352865443_938671484075106_8142634931235571829_n_17880647843872570.jpg' }, 
    { name: 'sailing', previewPic: '449449166_1604457186797201_1156503381913107565_n_17869152057137039.jpg' }
]

async function openAlbum(albumName: string) {
    await navigateTo({ path: `/gallery/${albumName}` })
}
</script>

<style scoped lang="less">
.grid-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4px; 
  padding: 10px;
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto; 
}

.title {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.8s ease;
    font-size: 1.5rem;

    &:hover {
        opacity: 0;
    }
}

.album {
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
    transition: transform 0.8s ease; 
    // transform: scale(0.8);
  }

  &:hover img {
    // transform: scale(1);
  }
}
</style>