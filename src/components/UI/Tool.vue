<template>
<div class="tool">
    <div class="template" v-for="tool in tools" :key="tool.id">
        <div class="tools_image">
            <img :src="tool.tool_image" alt="bb"/>
            <div class="name_tools">
                <p>{{tool.tool_name}}</p>
                <p class="subhead_tools">{{tool.tool_subhead_name}}</p>
            </div>
        </div>
        <div class="tools_description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="action_icons">
            <div class="action_images" :key="tool.id">
                <img @click="clickLike" src="@/assets/icons_like.png" alt="icons_like">
                <img src="@/assets/folder-add.png" alt="folder-add">
            </div>
            <div>
                <p class="action_button">Visit</p>
            </div>
        </div>
    </div>
</div>
<div class="load_container">
    <my-button class="btn_load_more">Load more</my-button>
</div>
</template>

<script>
import MyButton from '../MyButton.vue'
    export default {
  components: { MyButton },
        data() {
            return {
                tools: [
                    { id: 1, tool_name: 'FIGMA', tool_subhead_name: 'Free', tool_image: "./assets/figma.png" }, 
                    { id: 2, tool_name: 'Sketch', tool_subhead_name: 'Trial & Paid', tool_image: "../../assets/logos_sketch.svg"},
                    { id: 3, tool_name: 'Visual Studio Code', tool_subhead_name: 'Free', tool_image: "../../assets/logos_visual-studio-code.svg"},
                    { id: 4, tool_name: 'Notion', tool_subhead_name: 'Free & Paid', tool_image: "../../assets/notion.png"},
                    { id: 5, tool_name: 'Slack', tool_subhead_name: 'Free & Paid', tool_image: "../../assets/icons_slack.svg"},
                    { id: 6, tool_name: 'Invision', tool_subhead_name: 'Free & Paid', tool_image: "../../assets/logos_invicion-icon.svg"},
                ]
            }
        },
        methods: {
            clickLike() {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.tool {
    display: block;
    min-width: 392px;
    min-height: 294px;  
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}
.template {
    margin: 0px 25px 100px;
    padding: 33px;
}

.template:hover {
    border: 1px solid gray;
    background-color: var(--tool-hover-template);
    border-radius: 15px;
    transform: translateY(-30px);
    color: var(--text-white-80);
    .action_button {
        align-items: center;
        font-family: var(--font-family-poppins);
        font-size: var(--font-size-m);
        background-color: var(--call-to-action);
        border: 1px none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        gap: 12px;
        height: 48px;
        justify-content: center;
        mix-blend-mode: normal;
        padding: 0px 50px;
        pointer-events: auto;
        position: relative;
        border: none;
        box-shadow: none;
        transition: all 0.3s ease;
        width: fit-content;
    }
}
.tools_description p {
    color: var(--tool-descrition);
    padding-top: 30px;
}
.tools_image {
    display: flex;
    align-items: flex-start;
    padding: 0px 5px;
}
.name_tools {
    padding: 0px 30px;
    color: var(--text-white-80);
}
.subhead_tools {
    color: var(--subhead-tool);
}
.action_icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
}
.action_images img {
    padding: 0px 12px 0px 0px;
}

.load_container {
    display: flex;
    justify-content: center;
}

.btn_load_more {
    border: 1px solid var(--button-load-more-border);
    background-color: var(--background);
    color: var(--call-to-action);
}
</style>