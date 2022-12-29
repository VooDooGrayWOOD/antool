<template>
    <div class="head">
        <p class="header">Most Popular Tools</p>
        <p class="sub_header">Tools for the best Designers and Developers</p>
        <p class="sub_header">most popularly used in the world</p>
    </div>
    <Tool :tools="tools"></Tool>
</template>

<script>
import Tool from './UI/Tool.vue'
export default {
    components: { Tool },
    data() {
        return {
            tools: [
                {
                    id: 1,
                    tool_name: 'FIGMA',
                    tool_subhead_name: 'Free',
                    tool_image: './assets/figma.png'
                },
                {
                    id: 2,
                    tool_name: 'Sketch',
                    tool_subhead_name: 'Trial & Paid',
                    tool_image: '../../assets/logos_sketch.svg'
                },
                {
                    id: 3,
                    tool_name: 'Visual Studio Code',
                    tool_subhead_name: 'Free',
                    tool_image: '../../assets/logos_visual-studio-code.svg'
                },
                {
                    id: 4,
                    tool_name: 'Notion',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: '../../assets/notion.png'
                },
                {
                    id: 5,
                    tool_name: 'Slack',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: '../../assets/icons_slack.svg'
                },
                {
                    id: 6,
                    tool_name: 'Invision',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: '../../assets/logos_invicion-icon.svg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    margin-bottom: 90px;
}
.header {
    display: flex;
    justify-content: center;
    font-size: var(--font-size-xxl);
    margin-bottom: 25px;
}
.sub_header {
    display: flex;
    justify-content: center;
    font-size: var(font-size-m);
    color: var(--tool-descrition);
}
</style>
