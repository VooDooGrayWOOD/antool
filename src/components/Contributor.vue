<template>
    <div class="contributor_section">
        <div class="contributor_section_frame">
            <div class="contributor_section_text_button">
                <div class="headline-subhead">
                    <div>
                        <p class="subhead_head">Become a contributor?</p>
                        <p class="sub_head">
                            Join us and get tips & tricks to become a great
                        </p>
                        <p class="sub_head">Designer and Developer</p>
                    </div>
                    <div class="input_search">
                        <input type="text" placeholder="Enter your email..." />
                        <my-button class="input_button">Join Us</my-button>
                    </div>
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
    place-items: center;
    height: auto;
    margin: 0 auto;
}
// .contributor_section_frame {
//     display: grid;
//     // place-items: center;
//     // height: auto;
// }
// .contributor_section_text_button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

.headline-subhead {
    display: grid;
    place-items: center;
    gap: 20px;
    height: auto;
}

.subhead_head {
    font-size: var(--font-size-xxxl);
}

.sub_head {
    font-size: var(font-size-m);
    color: var(--tool-descrition);
}

.input_search {
    padding-top: 100px;
}

.input_search input {
    background: linear-gradient(
            90deg,
            var(--input-fill),
            rgba(255, 255, 255, 0.05)
        )
        no-repeat;
    width: 570px;
    height: 64px;
    border-radius: 15px;
    border: none;
}

.input_button {
    position: relative;
    z-index: 1;
    left: 403px;
    bottom: 55px;
}
::-webkit-input-placeholder {
    padding-left: 45px;
    font-size: var(--font-size-m);
}
</style>
