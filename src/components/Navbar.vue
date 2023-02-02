<template>
    <div class='navbar'>
        <div class='logo'>
            <img src='@/assets/antool_icon.png' alt='antools'>
            <h1>antools.</h1>
        </div>
        <div class='nav_btn'>
            <div class='btn'>Home</div>
            <div class='btn'>Categories</div>
            <div class='btn'>Collections</div>
            <div class='btn'>Blog</div>
            <div class='btn'>Log In</div>
            <my-button>
                <div class='btn_signup'>Sign Up</div>
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton }
}
</script>

<style lang='scss'>
.navbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1210px;
}

.logo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1 / 3 span;
    place-items: center start;
}

.nav_btn {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column: 5/ 8 span;
    place-items: center;
    white-space: nowrap;
    letter-spacing: 0.00px;
    line-height: 22.4px;
}

.btn:hover {
    transform: scale(0.95);
}

.btn_signup {
    display: grid;
    place-items: center end;
}

@media screen and (max-width: 790px) {
    .logo {
    grid-column: 2 / 4 span;
}
    .nav_btn {
        display: none;
    }
}

</style>