<template>
    <div class="contributor_section">
        <div class="contributor_section_frame">
            <div class="contributor_section_text_button">
                <div class="headline-subhead">
                    <p class="subhead_head">Become a contributor?</p>
                    <p class="sub_head">
                        Join us and get tips & tricks to become a great
                    </p>
                    <p class="sub_head">Designer and Developer</p>
                </div>
                <div class="search_div">
                    <input class="input_search" type="text" placeholder="Enter your email..." />
                    <my-button class="input_button">Join Us</my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
    components: {
        MyButton
    }
}
</script>

<style lang="scss" scoped>
.contributor_section {
    background-color: var(--background);
    display: grid;
    grid-column: 1 / 12 span;
    place-items: center;
    height: 400px;
    margin: 0 auto;
}
.contributor_section_frame {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
}

.contributor_section_text_button {
    display: grid;
    grid-row: 1;
}

.headline-subhead {
    display: grid;
    place-items: center;
    gap: 20px;
    margin: 0 auto;
    padding-bottom: 30px;
    text-align: center;
}

.subhead_head {
    font-size: var(--font-size-xxxl);
}

.sub_head {
    display: grid;
    place-items: center;
    margin: 0 auto;
    font-size: var(font-size-m);
    color: var(--tool-descrition);
}

.search_div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.input_search,
input {
    background: var(--input-fill);
    border-radius: 15px;
    border: none;
    grid-column: 1 / 5 span;
    height: 65px;
}

.input_button {
    grid-column: 5 / 1 span;
    align-self: center;
    justify-self: center;
    left: -10px;
    top: -56px;
}
::-webkit-input-placeholder {
    position: relative;
    left: 20px;
    font-size: var(--font-size-m);
}
</style>
