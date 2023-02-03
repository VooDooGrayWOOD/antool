<template>
    <navbar></navbar>
    <div class="container">
        <vue-scroll-up
            tag="div"
            custom-class="my-scroll-up"
            :scroll-duration="1000"
            :scroll-y="250"
            :always-show="false"
        />
        <hero-section></hero-section>
        <popular-tool></popular-tool>
        <brand-section></brand-section>
        <new-commer-tools></new-commer-tools>
        <testimonial></testimonial>
        <contributor></contributor>
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
import VueScrollUp from 'vue-scroll-up'

export default {
    components: {
        VueScrollUp,
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

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    margin: 0 auto;
    padding: 0 5px;
    max-width: 1210px;
    height: 0;
}

.my-scroll-up {
    align-items: center;
    background-color: var(--input-fill);
    border: rgba(0, 0, 0, 0.658);
    border-radius: 100px;
    bottom: 50px;
    color: var(--subhead-tool);
    cursor: pointer;
    display: flex;
    height: 55px;
    justify-content: center;
    position: fixed;
    right: 20px;
    width: 55px;
    z-index: 99;
}

.my-scroll-up::after {
    border: 2px solid var(--subhead-tool);
    border-radius: 10px;
    content: '';
    display: block;
    height: 25px;
    margin: 0 auto;
    width: 10px;
}

.my-scroll-up::before {
    animation: 2s top infinite;
    border: 1px solid var(--subhead-tool);
    border-radius: 10px;
    content: '';
    display: block;
    height: 10px;
    left: 49%;
    position: absolute;
    width: 0;
}

@keyframes top {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 450px) {
    .vue-scroll-up {
        bottom: 10px;
        transform: translateX(5px) scale(0.7);
    }
}
</style>
