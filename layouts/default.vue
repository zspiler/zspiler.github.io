<template>
    <a href="/" class="header"> <h1>zspiler</h1> </a>
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
    border: 3px solid red;
    padding: 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

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