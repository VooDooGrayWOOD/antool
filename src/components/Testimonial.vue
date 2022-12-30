<template>
<div class="chevron">
    <img src="@/assets/chevron-left.png" alt="chevron-left">
    <img src="@/assets/chevron-right.png" alt="chevron-right">
</div>
    <div class="testimonial">
        <div class="testimonial_photo">
            <img src="@/assets/ronald.png" alt="ronald" />
            <img class="dots" src="@/assets/dots.png" alt="dots" />
            <div class="name_profession">
                <div class="name_profession-items">
                    <p class="name">Ronald Richards</p>
                    <p class="profession">Product Manager</p>
                </div>
            </div>
        </div>
        <div class="testimonial_info">
            <p>
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
            </p>
        </div>
    </div>
    <div class="pagination">
        <img src="@/assets/pagination.png" alt="">
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testimonial {
    display: flex;
    justify-content: center;
}
.testimonial_photo {
    max-width: 400px;
}
.dots {
    position: relative;
    bottom: 410px;
    left: 450px;
}
.name_profession {
    position: relative;
    z-index: 1;
    bottom: 245px;
    left: 150px;
    width: 290px;
    line-height: 0.3;
    background-color: var(--brand-section);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.name_profession-items {
    position: relative;
    padding: 10px 28px;
}
.name {
    font-size: var(--font-size-xl);
}
.testimonial_info {
    position: relative;
    max-width: 395px;
    left: 60px;
    top: 140px;
    margin-left: 40px;
}
.chevron {
    position: relative;
    top: 280px;
    display: flex;
    justify-content: space-between;
}
.pagination {
    position: relative;
    bottom: 100px;
    display: flex;
    justify-content: center;
}
</style>
