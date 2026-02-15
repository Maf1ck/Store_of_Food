<script lang="ts" setup>
import SearchInput from "@/components/SearchInput/SearchInput.vue";
</script>

<template lang="pug">
    .header
        .header__wr
            .header__logo
                img.header__logo-icon(src="@/assets/logo.svg" width="150" height="37" alt="Logo")

            nav.header__menu
                ul.header__list
                    li.header__item
                        a.header__link(href="#") Home
                    li.header__item
                        a.header__link(href="#") Discount
                    li.header__item
                        a.header__link(href="#") Top Category
                    li.header__item
                        a.header__link(href="#") Best Sales

            .header__actions
                SearchInput
                .header__cart
                    button.header__cart--btn
                        img.header__cart-icon(src="@/assets/cart.svg" width="24" height="24" alt="Cart")
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;

    &__wr {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        box-sizing: border-box;
    }

    &__logo {
        display: flex;
        align-items: center;
        flex: 0 0 200px;
    }

    &__menu {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    &__list {
        display: flex;
        gap: 30px;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__link {
        text-decoration: none;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Palanquin', sans-serif;
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 30px;
        flex: 0 0 auto;
    }

    &__cart--btn {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
}
</style>

