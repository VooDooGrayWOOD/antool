<template>
    <navbar></navbar>
    <div>
        <HeroSection></HeroSection>
        <div class="container">
            <PopularTool></PopularTool>
            <BrandSection></BrandSection>
        </div>
    </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'
import PopularTool from './components/PopularTool.vue'
import BrandSection from './components/BrandSection.vue'
export default {
    components: { Navbar, HeroSection, PopularTool, BrandSection }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0px 108px;
}
</style>
