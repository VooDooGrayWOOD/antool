<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/Group 159.png" alt="antools">
            <h1>antools.</h1>
        </div>
        <div class="nav_btn">
                <div 
                    class="btn"
                    >Home
                </div>
                <div 
                    class="btn"
                    >Categories
                </div>
                <div 
                    class="btn"
                    >My Collections
                </div>
                <div 
                    class="btn"
                    >Blog
                </div>
            <div>
                    <div 
                        class="btn"
                    >
                        Log In
                    </div>
                    <my-button
                        >
                        <div class="btn_signup">
                            Sign Up
                        </div> 
                    </my-button>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue"
    export default {
        components: { MyButton }
    }
</script>

<style lang="scss">
.navbar {
    height: 100px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    width: 38px;
    height: 38px;
    margin-right: 12px;
}

.nav_btn {
    margin-left: auto;
    background-color: transparent;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
}

.btn {
    margin-left: 60px;
    text-align: center;
    cursor: pointer;
}
.btn:hover {
    transform:  scale(0.95);
}
</style>