<template>
<navbar></navbar>
  <div>
    <HeroSection></HeroSection>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import Navbar from "./components/Navbar.vue"
  export default {
    components: { Navbar, HeroSection }
  }
</script>

<style lang="scss" scoped>

</style>