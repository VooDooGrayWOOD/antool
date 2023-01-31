<template>
    <button class='btn'>
        <slot></slot>
    </button>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.btn {
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    background-color: var(--call-to-action);
    border: 1px none;
    border-radius: 8px;
    cursor: pointer;
    display: grid;
    place-items: center;
    white-space: nowrap;
    gap: 12px;
    color: var(--text);
    height: 48px;
    mix-blend-mode: normal;
    padding: 0 50px;
    pointer-events: auto;
    position: relative;
    box-shadow: none;
    transition: all 0.3s ease;
    width: auto;
}

.btn:hover {
    transform: scale(0.95);
}
</style>