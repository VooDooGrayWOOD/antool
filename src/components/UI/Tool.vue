<template>
    <div class="tool">
        <div class="template" v-for="tool in tools" :key="tool.id">
            <div class="tools_image">
                <img :src="tool.tool_image" alt="img" />
                <div class="name_tools">
                    <p>{{ tool.tool_name }}</p>
                    <p class="subhead_tools">{{ tool.tool_subhead_name }}</p>
                </div>
            </div>
            <div class="tools_description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="action_icons">
                <div class="action_images">
                    <img
                        src="@/assets/icons_like.png"
                        alt="icons_like"
                    />
                    <img src="@/assets/folder-add.png" alt="folder-add" />
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
import MyButton from './MyButton.vue'
export default {
    props: {
        tools: {
            type: Array,
            required: false
        }
    },
    components: { MyButton },
}
</script>

<style lang="scss" scoped>
.tool {
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 50px 20px;
    margin: 40px auto;
}
.template {
    margin: 0 auto;
    padding: 33px;
}

.template:hover {
    border: 1px solid gray;
    border-radius: 15px;
    background: var(--tool-hover-template);
    transition: background-color 0.5s ease;
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
    align-items: center;
    padding: 0px 5px;
}
.tools_image img {
    font-size: 48px;
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
.action_button {
    color: var(--tool-descrition);
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

@media screen and (max-width: 1000px) {
    .tool {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 930px) {
    .tool {
        grid-template-columns: 1fr;
    }
    .tools_image {
        justify-content: center;
    }
}
</style>
