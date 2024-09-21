<template>
    <div>
        <h1 class="header">lekowoo</h1>

        <!-- TODO album menu etc. only on gallery path? -->
        <AlbumMenu class="album-menu" />
        <ModeIcons class="mode-icons" />
        <slot />
    </div>
</template>

<style lang="less" scoped>
.header {
    position: fixed;
}

.album-menu {
    position: fixed;
    right: 0;
    top: 50px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    font-size: 20px;
    text-align: center;
}

.mode-icons {
    position: fixed;
    bottom: 0;
    right: 0;
    right: 25px;
}
</style>