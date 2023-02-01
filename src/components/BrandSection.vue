<template>
    <div class="brand_container">
        <div class="brand_items">
            <div class="brand_header">
                <p>Trusted more than 150+ brand</p>
            </div>
            <div class="brand_images">
                <img src="@/assets/logos_microsoft.png" alt="" />
                <img src="@/assets/logos_google.png" alt="" />
                <img src="@/assets/logos_slack.png" alt="" />
                <img src="@/assets/logos_wordpress.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.brand_container {
    background-color: var(--brand-section);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: grid;
    grid-column: 1 / 12 span;
    grid-row: 3 / 1 span;
    place-items: center;
    gap: 20px;
    margin-top: 200px;
}
.brand_items {
    display: grid;
    grid-template-rows: 120px 1fr ;
    place-items: center;
    gap: 20px;
}
.brand_header {
    display: grid;
    place-items: center;
    font-size: var(--font-size-l);
    color: var(--text-white-80);

}
.brand_images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 30px;
    padding: 60px 30px;
}

@media screen and (max-width: 930px) {
    .brand_images {
        grid-template-columns: none;
    }
    .brand_header {
        padding: 20px;
        text-align: center;
    }
}

</style>
