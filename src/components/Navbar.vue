<template>
    <div class="navbar">
        <div class="logo">
            <img src="@/assets/antool_icon.png" alt="antools" />
            <h1>antools.</h1>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li class="link">Home</li>
            <li class="link">Categories</li>
            <li class="link">Collections</li>
            <li class="link">Blog</li>
            <li class="link">Log In</li>
            <my-button class="btn-fullscreen">
                <div class="button_signup">Sign Up</div>
            </my-button>
        </ul>
        <div class="icon">
            <img
                @click="toggleMobileNav"
                v-show="mobile"
                :class="{ 'icon-active': mobileNav }"
                src="@/assets/bars-solid.svg"
                alt="bars"
            />
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                    <div class="icon">
                        <img
                            @click="toggleMobileNav"
                            v-show="mobile"
                            :class="{ 'icon-active': mobileNav }"
                            src="@/assets/cross.svg"
                            alt="close"
                        />
                    </div>
                </li>
                <li class="link">Home</li>
                <li class="link">Categories</li>
                <li class="link">Collections</li>
                <li class="link">Blog</li>
                <li class="link">Log In</li>
                <my-button class="btn-signup-div">
                    <div class="btn_signup">Sign Up</div>
                </my-button>
            </ul>
        </transition>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton },
    name: 'navigation',
    data() {
        return {
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWitdh: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        checkScreen() {
            this.windowWitdh = window.innerWidth
            if (this.windowWitdh <= 950) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    }
}
</script>

<style lang="scss">
.navbar {
    font-family: var(--font-family-poppins);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1210px;
    @media (min-width: 1140px) {
        max-width: 1140px;
    }

    ul,
    .link {
        list-style: none;
        text-decoration: none;
    }

    li {
        cursor: pointer;
        padding: 10px;
    }

    .link {
        transition: 0.5s ease all;
        border-bottom: 1px solid transparent;

        &:hover {
            color: var(--subhead-tool);
            border-color: var(--subhead-tool);
        }
    }
}

.logo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1 / 2 span;
    place-items: center start;
    gap: 20px;
    cursor: pointer;

    img {
        width: 50px;
        transition: 0.5s ease all;
    }
}

.navigation {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column: 5/ 8 span;
    place-items: center;
    white-space: nowrap;
    letter-spacing: 0px;
    line-height: 22.4px;
}

.btn:hover {
    transform: scale(0.95);
}

.btn_signup {
    display: grid;
    place-items: center end;
}

.icon {
    display: grid;
    grid-column: 11 / 1 span;
    width: 30px;
    height: 30px;
    place-items: center;
    place-self: center;
    cursor: pointer;

    img {
        transition: 0.5s ease all;
    }
}

.icon-active {
    transform: rotate(90deg);
}

.dropdown-nav {
    background-color: var(--input-fill);
    display: grid;
    grid-column: 10 / 1 span;
    place-items: center;
    position: fixed;
    z-index: 2;
    width: 100%;
    max-width: 250px;
    height: 100%;
    top: 0;
    left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

@media screen and (max-width: 790px) {
    .logo {
        grid-column: 2 / 4 span;
    }
}

@media screen and (max-width: 440px) {
    .navbar {
        padding: 0 20px;
    }
    .logo {
        grid-column: 1 / 2 span;
    }
    .dropdown-nav {
        grid-column: 7 / 2 span;
    }
    .icon {
        grid-column: 10 / 3 span;
    }
}
</style>
