<template>
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead">
                    <p class="subhead_head">Awesome tools for Designer & Developer.</p>
                    <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                </div>
                
        </div>
            <div class="hero_illustration"> 
                <img src="../assets/Illustration.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    align-items: center;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    margin-left: -80px;
    margin-right: -80px;
    position: relative;
    width: 1050px;
}
.hero_text_button {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex: 1;
    flex-direction: column;
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
.hero_illustration {
    width: 589px;
    height: 892px;
}
</style>