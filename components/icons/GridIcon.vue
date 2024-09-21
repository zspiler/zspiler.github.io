<template>
    <div :class="{ 'grid-icon': true, selected }">
        <div class="item"></div>
        <div class="item"></div>
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
.grid-icon {
    width: 25px;
    height: 25px;
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(2, 1fr);
    cursor: pointer;
    overflow: hidden;

    .item {
        padding: 3px;
        background-color: rgba(91, 89, 89, 0.652);
        border-radius: 10%;
    }
}

.grid-icon:hover .item {
    background-color: rgb(255, 44, 90);
}

.grid-icon.selected .item {
    background-color: rgb(255, 44, 90);
}
</style>