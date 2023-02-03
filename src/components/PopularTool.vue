<template>
    <div class="head">
        <p class="header">Most Popular Tools</p>
        <p class="sub_header">Tools for the best Designers and Developers</p>
        <p class="sub_header">most popularly used in the world</p>
        <Tool class="all_tools" :tools="tools"></Tool>
    </div>
    
</template>

<script>
import Tool from './UI/Tool.vue'
import  * as images from '@/assets/index.js'

export default {
    components: { Tool },
    data() {
        return {
            tools: [
                {
                    id: 1,
                    tool_name: 'FIGMA',
                    tool_subhead_name: 'Free',
                    tool_image: images.urlImgFigma
                },
                {
                    id: 2,
                    tool_name: 'Sketch',
                    tool_subhead_name: 'Trial & Paid',
                    tool_image: images.urlImgSketch
                },
                {
                    id: 3,
                    tool_name: 'Visual Studio Code',
                    tool_subhead_name: 'Free',
                    tool_image: images.urlImgVSCode
                },
                {
                    id: 4,
                    tool_name: 'Notion',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: images.urlImgNotion
                },
                {
                    id: 5,
                    tool_name: 'Slack',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: images.urlImgSlack
                },
                {
                    id: 6,
                    tool_name: 'Invision',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: images.urlImgInvision
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    display: grid;
    grid-column: 1 / 12 span;
    grid-row: 2 / 1 span;
    margin: 0 auto;
    padding: 80px 0;
}
.header {
    display: grid;
    place-items: center;
    font-size: var(--font-size-xxl);
    margin: 0 auto;
}
.sub_header {
    display: grid;
    place-items: center;
    font-size: var(font-size-m);
    color: var(--tool-descrition);
}
@media screen and (max-width: 790px) {
    .head {
        grid-column: 1 / 12 span;
        margin: 0 auto;
        text-align: center;
    }
    .header {
        font-size: var(--font-size-xl);
    }
}
</style>
