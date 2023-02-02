<template>
    <navbar></navbar>
    <div class='container'>
        <hero-section></hero-section>
        <popular-tool></popular-tool>
        <brand-section></brand-section>
        <new-commer-tools></new-commer-tools>
        <testimonial></testimonial>
        <contributor></contributor>
        <!-- <contacts-categories-section></contacts-categories-section> -->
    </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'
import PopularTool from './components/PopularTool.vue'
import BrandSection from './components/BrandSection.vue'
import NewCommerTools from './components/NewCommerTools.vue'
import Testimonial from './components/Testimonial.vue'
import Contributor from './components/Contributor.vue'
import ContactsCategoriesSection from './components/ContactsCategoriesSection.vue'

export default {
    components: {
        Navbar,
        HeroSection,
        PopularTool,
        BrandSection,
        NewCommerTools,
        Testimonial,
        Contributor,
        ContactsCategoriesSection
    }
}
</script>

<style lang='scss' scoped>
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1210px;
    height: 0;
}
</style>
