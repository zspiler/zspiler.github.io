<template>
        <h1 class="header">lekowoo</h1>
        <!-- TODO album menu etc. only on gallery path? -->
        <AlbumMenu class="album-menu" />
        <ModeIcons class="mode-icons" />
        <slot />
</template>

<style lang="less" scoped>
.header {
    position: fixed;
    color: white;
    mix-blend-mode:exclusion;
    left: 0;
    top: 0;
    height: 50px;
    width: 150px;
    margin: 15px;
    z-index: 1000;
}

.content {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    z-index: 1000;
}

.mode-icons {
    position: fixed;
    bottom: 0;
    right: 0;
    right: 25px;
}
</style>