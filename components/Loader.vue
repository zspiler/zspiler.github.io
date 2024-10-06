<template>
    <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face botom"></div>
    </div>
</template>

<style scoped lang="less">
@cube-size: 50px;
.cube {
    width: @cube-size;
    height: @cube-size;
    transform-style: preserve-3d;
    animation: rotateAnimation 6s linear infinite;
}

@keyframes rotateAnimation {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

.face {
    position: absolute;
    width: @cube-size;
    height: @cube-size;
    background: red;
    opacity: 0.5;
}

.front {
    background: red;
    transform: rotateY(0deg) translateZ(calc(@cube-size / 2));
}

.back {
    background: blue;
    transform: rotateY(180deg) translateZ(calc(@cube-size / 2));
}

.right {
    background: green;
    transform: rotateY(90deg) translateZ(calc(@cube-size / 2));
}

.botom {
    background: rgb(255, 255, 161);
    transform: rotateX(90deg) translateZ(calc(@cube-size / 2));
}
</style>