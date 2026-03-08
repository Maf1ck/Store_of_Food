<script lang="ts" setup>
import { toasts } from './toastStore.js';
</script>

<template lang="pug">
.toast-container
    transition-group(name="toast")
        .toast(v-for="toast in toasts" :key="toast.id" :class="`toast--${toast.type}`")
            .toast__icon(v-if="toast.type === 'success'")
                img(src="@/assets/tick.svg" alt="success" width="20" height="20")
            p.toast__message {{ toast.message }}
</template>

<style lang="scss" scoped>
.toast-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9999;
}

.toast {
    background: #fff;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
