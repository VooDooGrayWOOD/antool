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
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    place-items: center;
}
.template {
    margin: 20px;
    padding: 30px;
    border: 1px solid transparent;
}

.template:hover {
    border: 1px solid gray;
    background: var(--tool-hover-template);
    border-radius: 15px; 
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
        padding: 0px 30px;
        pointer-events: auto;
        position: relative;
        border: none;
        box-shadow: none;
        transition: all 0.5s ease;
        width: fit-content;
    }
}
.new_tools_description p {
    margin-left: auto;
    color: var(--tool-descrition);
}
.new_tools_image {
    display: flex;
    align-items: center;
    margin: 0px 5px;
}
.name_new_tools {
    padding: 0 10px;
    color: var(--text-white-80);
}
.subhead_new_tools {
    color: var(--subhead-tool);
    margin: 0;
}
.action_icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

@media screen and (max-width: 530px) {
    .new_tools {
        grid-template-columns: 1fr;
        grid-column: 1 / 12 span;
        gap: 2px;
        margin: 0 auto;
    }
    .template {
        padding: 33px;
    }
}

</style>
