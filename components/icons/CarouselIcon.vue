<template>
    <div :class="{ 'carousel-icon': true, selected }">
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    selected: boolean;
}>();
</script>

<style scoped lang="less">
.carousel-icon {
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: row;
    gap: 4px;
    cursor: pointer;

    .item {
        flex: 1;
        padding: 3px;
        background-color: rgba(91, 89, 89, 0.652);
        border-radius: 10%;
    }
}

.carousel-icon:hover .item {
    background-color: rgb(255, 44, 90);
}

.carousel-icon.selected .item {
    background-color: rgb(255, 44, 90);
}
</style>