<template>
<navbar></navbar>
  <div>
    <HeroSection></HeroSection>
    <PopularTool></PopularTool>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from "./components/Navbar.vue"
import PopularTool from "./components/PopularTool.vue"
  export default {
    components: { Navbar, HeroSection, PopularTool }
  }
</script>

<style lang="scss" scoped>

</style>