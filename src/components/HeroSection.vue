<template>
  <div class="hero_section">
    <div class="hero_section_frame">
      <div class="hero_text_button">
        <div class="headline-subhead">
          <p class="subhead_head">Awesome tools for Designer & Developer.</p>
          <p>Antool is a web collection of information on paid or free Design and Development tools</p>
        </div>
        <div class="input_search">
          <img class="input_img" src="../assets/search.png" alt="search">
          <input type="text" placeholder="find more than 430+ tools...">
          <my-button class="input_button">Search</my-button>
        </div>
        <div class="social_icon">
          <img src="../assets/facebook.png" alt="facebook">
          <img src="../assets/instagram.png" alt="instagram">
          <img src="../assets/twitter.png" alt="twitter">
        </div>
      </div>
      <div class="hero_illustration">
        <img src="../assets/Illustration.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue"

export default {
  components: {MyButton}
}
</script>

<style lang="scss" scoped>
.hero_section {
    background-color: var(--background);
    display: grid;
    grid-column: 1 / 12 span;
    grid-row: 1 / 1 span;
    margin: 0 auto;
}

.hero_section_frame {
 border: 1px none;
 display: flex;
 align-items: center;
 height: auto;
 position: relative;
}

.hero_text_button {
 display: grid;
 place-items: center stretch;
 gap: 20px;
}

.headline-subhead {
 display: flex;
 flex-direction: column;
 gap: 20px;
 height: auto;
 position: relative;
}

.subhead_head {
 font-size: var(--font-size-xxxl);
}

.input_search input {
 background: linear-gradient(90deg, var(--input-fill), rgba(255, 255, 255, 0.05)) no-repeat;
 width: 497px;
 height: 64px;
 border-radius: 15px;
 border: none;
 left: 0;
 position: absolute;
}

.input_button {
 position: relative;
 z-index: 1;
 left: 330px;
 bottom: 22.5px;
}

::-webkit-input-placeholder {
 padding-left: 45px;
 font-size: var(--font-size-m);
}

.input_img {
 position: relative;
 z-index: 1;
 left: 18px;
 bottom: -20px;
}

.social_icon img {
 width: 58px;
 height: 58px;
 margin: 80px 20px 0 0;
 cursor: pointer;
}

.hero_illustration {
 padding-left: 115px;
 max-width: 589px;
}

@media screen and (max-width: 1020px) {
  .hero_section_frame {
    max-height: 600px;
  }
  .hero_text_button {
    place-items: center;
  }
  .subhead_head {
    font-size: var(--font-size-xxl);
  }
  .hero_illustration {
    display: none;
  }
  .input_search {
    display: none;
  }
}

@media screen and (max-width: 790px) {
  .hero_section {
    text-align: center;
  }
  .subhead_head {
    font-size: var(--font-size-xl);
  }
}
</style>