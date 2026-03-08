<script lang="ts" setup>
import { ref } from 'vue';
const email = ref('');
</script>

<template lang="pug">
section.subscribe
    .subscribe__wr
        .subscribe__form-wr
            .subscribe__input-wr
                img.subscribe__icon(src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='20' height='16' x='2' y='4' rx='2'/%3E%3Cpath d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/%3E%3C/svg%3E" alt="email")
                input.subscribe__input(type="email" v-model="email" placeholder="Enter Your Email")
            button.subscribe__btn SUBSCRIBE
        .subscribe__text
            p.subscribe__text-p Sign up for new Customer, updates, surveys
</template>

<style lang="scss" scoped>
.subscribe {
    width: 100%;
    background: #D4E29A;
    padding: 28px 0;

    &__wr {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
    }

    &__form-wr {
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 560px;
    }

    &__input-wr {
        position: relative;
        display: flex;
        align-items: center;
    }

    &__icon {
        position: absolute;
        left: 14px;
        pointer-events: none;
        width: 20px;
        height: 20px;
    }

    &__input {
        width: 280px;
        height: 48px;
        padding: 0 16px 0 42px;
        border: 1.5px solid #bbb;
        background: #fff;
        font-family: 'Palanquin', sans-serif;
        font-size: 15px;
        color: #333;
        outline: none;

        &::placeholder {
            color: #aaa;
        }
    }

    &__btn {
        height: 48px;
        padding: 0 24px;
        color: #fff;
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: black;
        background: #ffff;
        cursor: pointer;
        white-space: nowrap;
    }

    &__text {
        flex-shrink: 0;
    }

    &__text-p {
        font-family: 'Palanquin', sans-serif;
        font-size: 16px;
        color: #3a3a3a;
        font-weight: 500;
    }
}
</style>
