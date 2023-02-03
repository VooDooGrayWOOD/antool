<template>
    <div class="line"></div>
    <div class="contact_categories">
        <div class="logo_copyright">
            <div class="logo">
                <img src="@/assets/antool_icon.png" alt="antools" />
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
    display: grid;
    grid-column: 1 / 12 span;
    border-bottom: 1px solid var(--button-load-more-border);
    padding: 60px 0;
}
.contact_categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-column: 1 / 12 span;
    place-items: center;
    align-items: flex-start;
    font-size: var(--font-size-s);
    color: var(--tool-descrition);
    text-align: center;
}

.copyright {
    font-size: var(--font-size-m);
}
.logo {
    display: grid;
    margin: 10px 0;
    place-items: center;
}
.head {
    font-size: var(--font-size-l);
    color: var(--text);
}
</style>
