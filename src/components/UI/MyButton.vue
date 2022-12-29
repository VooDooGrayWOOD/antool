<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn {
    align-items: center;
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    background-color: var(--call-to-action);
    border: 1px none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    gap: 12px;
    color: var(--text);
    height: 48px;
    justify-content: center;
    mix-blend-mode: normal;
    padding: 0px 50px;
    pointer-events: auto;
    position: relative;
    border: none;
    box-shadow: none;
    transition: all 0.3s ease;
    width: fit-content;
}
.btn:hover {
    transform:  scale(0.95);
}
</style>