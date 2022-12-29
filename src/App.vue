<template>
    <navbar></navbar>
    <div>
        <hero-section></hero-section>
        <div class="container">
            <popular-tool></popular-tool>
            <brand-section></brand-section>
            <new-commer-tools></new-commer-tools>
            <testimonial></testimonial>
            <contributor></contributor>
        </div>
        <contacts-categories-section></contacts-categories-section>
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
        ContactsCategoriesSection,
        BrandSection
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0px 108px;
}
</style>
