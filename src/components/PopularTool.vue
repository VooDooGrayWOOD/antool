<template>
    <div class="head">
        <p class="header">Most Popular Tools</p>
        <p class="sub_header">Tools for the best Designers and Developers </p>
        <p class="sub_header">most popularly used in the world</p>
    </div>
    <Tool></Tool>
</template>

<script>
import Tool from './UI/Tool.vue'
    export default {
        components: { Tool }
    }
</script>

<style lang="scss" scoped>
.head {
    margin-bottom: 90px;
}
.header {
    display: flex;
    justify-content: center;
    font-size: var(--font-size-xxl);
    margin-bottom: 25px;
}
.sub_header {
    display: flex;
    justify-content: center;
    font-size: var(font-size-m);
    color: var(--tool-descrition);
}
</style>