<template>
    <div class="new_commer_section">
        <div class="new_commer_section_frame">
            <div class="new_commer_text_button">
                <div class="headline-subhead">
                    <p class="subhead_head">Newcomer Tools</p>
                    <p>
                        Wow! see the latest update of the most recommended tools
                        from reliable designers and developers
                    </p>
                </div>
                <my-button>Explore more</my-button>
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
export default {
    components: { MyButton, NewTool },
    data() {
        return {
            new_tools: [
                {
                    id: 1,
                    tool_name: 'Zeplin',
                    tool_subhead_name: 'Free & Paid',
                    tool_image: '../../assets/zeplin.png'
                },
                {
                    id: 2,
                    tool_name: 'PHPStorm',
                    tool_subhead_name: 'Free',
                    tool_image: '../../assets/jb_phpstorm.png'
                },
                {
                    id: 3,
                    tool_name: 'Toolbox',
                    tool_subhead_name: 'Free',
                    tool_image: '../../assets/jb_toolbox_app.png'
                },
                {
                    id: 4,
                    tool_name: 'Procreate',
                    tool_subhead_name: 'Paid',
                    tool_image: '../../assets/procreate.png'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.new_commer_section {
    align-items: center;
    align-self: stretch;
    background-color: var(--background);
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    justify-content: center;
    mix-blend-mode: normal;
    margin-top: 200px;
    padding: 80px 95px;
    position: relative;
}
.new_commer_section_frame {
    background-color: transparent;
    border: 1px none;
    display: flex;
    align-items: center;
    height: auto;
    margin-left: -80px;
    margin-right: -80px;
    position: relative;
}
.new_commer_text_button {
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    bottom: 115px;
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
    font-size: var(--font-size-xxl);
}
.tools {
    margin-left: 50px;
}
</style>
