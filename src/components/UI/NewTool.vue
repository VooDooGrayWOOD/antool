<template>
    <div class="new_tools">
        <div class="template" v-for="tool in new_tools" :key="tool.id">
            <div class="new_tools_image">
                <img :src="tool.tool_image" alt="bb" />
                <div class="name_new_tools">
                    <p>{{ tool.tool_name }}</p>
                    <p class="subhead_new_tools">{{ tool.tool_subhead_name }}</p>
                </div>
            </div>
            <div class="new_tools_description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="action_icons">
                <div class="action_images" :key="tool.id">
                    <img
                        @click="clickLike"
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
</template>

<script>
import MyButton from './MyButton.vue'
export default {
    props: {
        new_tools: {
            type: Array,
            required: true
        }
    },
    components: { MyButton }
}
</script>

<style lang="scss" scoped>
.new_tools {
    display: block;
    min-width: 392px;
    min-height: 294px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
.new_tools_description p {
    color: var(--tool-descrition);
    padding-top: 30px;
}
.new_tools_image {
    display: flex;
    align-items: flex-start;
    padding: 0px 5px;
}
.name_new_tools {
    padding: 0px 30px;
    color: var(--text-white-80);
}
.subhead_new_tools {
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
