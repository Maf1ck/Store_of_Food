<script lang="ts" setup>
const props = defineProps<{
    message: string;
    type?: 'success' | 'info' | 'error';
    visible: boolean;
}>();
</script>

<template lang="pug">
transition(name="toast")
    .toast(v-if="visible" :class="`toast--${type}`")
        .toast__icon(v-if="type === 'success'")
            img(src="@/assets/tick.svg" alt="success" width="20" height="20")
        p.toast__message {{ message }}
</template>

<style lang="scss" scoped>
.toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #fff;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    font-family: 'Palanquin', sans-serif;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    
    &--success {
        border-left: 4px solid #4B7D11;
        
        .toast__icon {
            color: #4B7D11;
            font-size: 20px;
        }
    }
    &-enter-active,
    &-leave-active {
        transition: all 0.3s ease;
    }
    
    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
}
</style>
