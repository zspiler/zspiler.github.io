<template>
    <div class="preview">
        <div class="item" v-for="imageUrl in previewImages">
            <img 
                v-if="imageUrl"
                @click="selectImage(imageUrl)"
                :class="{ 'preview-image': true, 'selected': imageUrls[imageIndex] === imageUrl }"
                :src="imageUrl" 
                :alt="`Image preview`" 
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageUrls: string[];
  imageIndex: number;
}>();

const emit = defineEmits<{
  (e: 'update:imageIndex', value: number): void
}>()

const previewImageCount = 5;

const previewImages = computed(() => {
    return Array.from({ length: previewImageCount }, (_, index) => {
        const middleIndex = Math.ceil(previewImageCount / 2)
        const imageIndex = props.imageIndex - middleIndex + index + 1
        return props.imageUrls[imageIndex] ?? null
    })
});

function selectImage(imageUrl: string) {
    const selectedImageIndex = props.imageUrls.indexOf(imageUrl); // assume urls are unique 😸
    emit('update:imageIndex', selectedImageIndex);
}
</script>

<style scoped lang="less">

.preview {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    height: 50px;
    width: 500px;
    overflow: hidden;

    .item {
        width: 100px;
        height: 50px;
        
        user-select: none;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(1px) grayscale(100%);

            &.selected {
                filter: none;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>