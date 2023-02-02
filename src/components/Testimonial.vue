<template>
    <div class="chevron-left">
        <img src="@/assets/chevron-left.png" alt="chevron-left" />
    </div>
    <div class="testimonial-container">
        <div class="testimonial">
            <div class="testimonial_photo">
                <img class="photo" src="@/assets/ronald.png" alt="ronald" />
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
                    Incididunt cillum do sint sint enim ullamco id deserunt
                    mollit qui reprehenderit do. Velit ex tempor cillum ad sint
                    occaecat. Do nulla velit labore occaecat do deserunt Lorem
                    magna officia incididunt consectetur amet. Sunt consectetur
                    veniam minim ex commodo sint non. Occaecat aute officia
                    excepteur non laboris id qui ad.
                </p>
            </div>
        </div>
    </div>
    <div class="chevron-right">
        <img src="@/assets/chevron-right.png" alt="chevron-right" />
    </div>
    <div class="pagination">
        <img src="@/assets/pagination.png" alt="" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testimonial-container {
    display: grid;
    grid-column: 2 / 10 span;
    grid-row: 5 / 1 span;
    gap: 20px;
}
.chevron-left {
    display: grid;
    place-items: center;
    grid-column: 1 / 1 span;
}

.chevron-right {
    display: grid;
    place-items: center;
    grid-column: 12 / 1 span;
}

.testimonial {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.testimonial_photo {
    margin: 0 auto;
}

.dots {
    position: relative;
    bottom: 410px;
    left: 420px;
}
.name_profession {
    position: relative;
    z-index: 1;
    bottom: 245px;
    left: 150px;
    width: 275px;
    line-height: 0.3;
    background-color: var(--brand-section);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.name_profession-items {
    position: relative;
    padding: 5px 20px;
}
.name {
    font-size: var(--font-size-xl);
}
.testimonial_info {
    position: relative;
    max-width: 300px;
    display: grid;
    place-items: center;
    font-size: var(--font-size-ss);
    margin: 0 auto;
    height: 150px;
    top: 160px;
}

.pagination {
    position: relative;
    bottom: 100px;
    display: grid;
    grid-column: 1 / 12 span;
    margin: 0 auto;
}

@media screen and (max-width: 840px) {
    .photo {
        width: 15rem;
    }
    .testimonial-container {
        grid-column: 2 / 10 span;
    }

    .testimonial {
        grid-template-columns: 1fr;
    }
    .dots, .testimonial_info {
        display: none;
    }
    .name {
        font-size: var(--font-size-s);
    }
    .name_profession {
        width: 10rem;
        font-size: var(--font-size-ss);
        bottom: 90px;
        left: 80px;
    }
    .pagination {
        bottom: 50px;
    }
}

@media screen and (max-width: 450px) {
    .photo {
        width: 12rem;
    }
    .pagination {
        display: none;
    }
    .name {
        font-size: var(--font-size-ss);
    }
    .name_profession {
        width: 9rem;
        font-size: var(--font-size-sss);
        bottom: 70px;
        left: 30px;
    }
}
</style>
