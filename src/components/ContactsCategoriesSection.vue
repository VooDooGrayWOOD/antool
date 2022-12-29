<template>
<div class="line"></div>
    <div class="contact_categories">
        <div class="logo_copyright">
            <div class="logo">
                <img src="@/assets/Group 159.png" alt="antools" />
                <h1 class="head">antools.</h1>
            </div>
            <div>
                <p class="copyright">Copyright 2021. Antools</p>
            </div>
            <div>
                <p>
                    Antool is a web collection of information on paid or free
                    Design and Development tools
                </p>
            </div>
        </div>
        <div class="contact">
            <div>
                <p class="head">Contact Us</p>
            </div>
            <div>
                <p>+621987463</p>
            </div>
            <div>
                <p>M Building, No.10 A</p>
            </div>
            <div>
                <p>antools@awesome.com</p>
            </div>
        </div>
        <div class="categories">
            <div>
                <p class="head">Categories</p>
            </div>
            <div>
                <p>Design</p>
            </div>
            <div>
                <p>Development</p>
            </div>
        </div>
        <div>
            <div class="company_info">
                <p class="head">Company Info</p>
            </div>
            <div>
                <p>About Us</p>
            </div>
            <div>
                <p>Our Partners</p>
            </div>
            <div>
                <p>Blog</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.line {
    border-bottom: 1px solid var(--button-load-more-border);
}
.contact_categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: flex-start;
    font-size: var(--font-size-s);
    color: var(--tool-descrition);
}
.copyright {
    font-size: var(--font-size-m);
}
.logo {
    display: flex;
    justify-content: start;
    margin: 22px 0;
}
.head {
    font-size: var(--font-size-l);
    color: var(--text);
}
</style>
