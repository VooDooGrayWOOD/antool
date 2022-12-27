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
    import MyButton from "./MyButton.vue"
    export default {
        components: { MyButton }
    }
</script>

<style lang="scss" scoped>
.hero_section {
    align-items: center;
    align-self: stretch;
    background-color: var(--background);
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    justify-content: center;
    mix-blend-mode: normal;
    padding: 80px 195px;
    position: relative;
}
.hero_section_frame {
    background-color: transparent;
    border: 1px none;
    display: flex;
    align-items: center;
    height: auto;
    margin-left: -80px;
    margin-right: -80px;
    position: relative;
}
.hero_text_button {
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    bottom: 115px;
    gap: 30px;
    height: auto;
    position: relative;
}
.headline-subhead {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
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
    
}
.hero_illustration {
    padding-left: 115px;
    width: 589px;
    height: 892px;
}
</style>