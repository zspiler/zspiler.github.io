<template>
    <div>
        <div class="header">
            <h1>lekowoo</h1>
            <AlbumMenu />
        </div>
        <slot />
    </div>
</template>

<style lang="less" scoped>
.header {
    position: fixed;
}
</style>