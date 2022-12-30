<template>
    <div class="navbar">
        <div class="logo">
            <img src="@/assets/antool_icon.png" alt="antools">
            <h1>antools.</h1>
        </div>
        <div class="nav_btn">
            <div class="nav_btn_items">
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
            </div>
            <div class="sign_login_btn">
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
import MyButton from "./UI/MyButton.vue"
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
    padding: 0 111px;
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
    background-color: transparent;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
}
.nav_btn_items {
    display: flex;
    justify-content: center;
    align-items: center;
}
.sign_login_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
}

.navbar .btn {
    margin-left: 60px;
    text-align: center;
    cursor: pointer;
}
.btn:hover {
    transform:  scale(0.95);
}
</style>