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
    margin-top: 100px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.brand_items {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 55px 83px;
}
.brand_header {
    display: flex;
    justify-content: center;
    padding-bottom: 55px;
    font-size: var(--font-size-l);
    color: var(--text-white-80);
}
.brand_images {
    display: flex;
    justify-content: space-between;
    max-height: 51px;
}
</style>
