<template>
    <div class="new_commer_section">
        <div class="new_commer_section_frame">
            <div class="new_commer_text_button">
                <div class="headline-subhead">
                    <p class="subhead_head">Newcomer Tools</p>
                    <div class="subhead">
                    <p>
                        Wow! see the latest update of the most 
                        recommended&nbsp;tools&nbsp;from&nbsp;reliable&nbsp;designers 
                        and developers
                    </p>
                </div>
                </div>
                <my-button >Explore more</my-button>
            </div>
            <div class="tools">
                <NewTool :new_tools="new_tools"></NewTool>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
import NewTool from './UI/NewTool.vue'
import  * as images from '@/assets/index.js'
export default {
    components: { MyButton, NewTool },
    data() {
        return {
            new_tools: [
                {
                    id: 1,
                    tool_name: 'Zeplin',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: images.urlImgZeplin
                },
                {
                    id: 2,
                    tool_name: 'PHPStorm',
                    tool_subhead_name: 'Free',
                    tool_image: images.urlImgPHPStorm
                },
                {
                    id: 3,
                    tool_name: 'Toolbox',
                    tool_subhead_name: 'Free',
                    tool_image: images.urlImgToolbox
                },
                {
                    id: 4,
                    tool_name: 'Procreate',
                    tool_subhead_name: 'Paid',
                    tool_image: images.urlImgProcreate
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.new_commer_section {
    background-color: var(--background);
    border: 1px none;
    display: grid;
    grid-column: 1 / 12 span;
    grid-row: 4 / 1 span;
    gap: 30px;
    height: auto;
    place-items: center;
    mix-blend-mode: normal;
    margin: 200px auto;
}
.new_commer_section_frame {
    background-color: transparent;
    border: 1px none;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
}
.new_commer_text_button {
    background-color: transparent;
    border: 1px none;
    display: grid;
    place-items: center start;
    gap: 20px;
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
    font-size: var(--font-size-xxl);
}

@media screen and (max-width: 830px) {
    .new_commer_section {
        grid-column: 1 / 12 span;
    }
    .new_commer_text_button, .headline-subhead {
        place-items: center;
        text-align: center;
        font-size: var(--font-size-s);
    }
    .subhead {
        padding: 10px;  
        width: 100%;
    }
    .new_commer_section_frame {
        grid-template-columns: 1fr;
        place-items: center;
    }
}
</style>
