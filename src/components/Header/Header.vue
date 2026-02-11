<script lang="ts" setup>
import SearchInput from "@/components/SearchInput/SearchInput.vue";
</script>

<template lang="pug">
    .header
        .header__wr
            .header__logo
                img.header__logo-icon(src="@/assets/logo.svg" width="150" height="37" alt="Logo")
            .header__menu
                ul.header__list
                    li.header__item
                        a.header__link(href="#") Home
                    li.header__item
                        a.header__link(href="#") Discount
                    li.header__item
                        a.header__link(href="#") Top Category
                    li.header__item
                        a.header__link(href="#") Best Sales
            SearchInput
            .header__cart
                button.header__cart--btn
                    img.header__cart-icon(src="@/assets/cart.svg" width="24" height="24" alt="Cart")

                
                    

</template>

<style lang="scss" scoped>
.header{
    &__wr{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 50px;
        gap: 50px;
    }
    &__logo{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__menu{
        display: flex;
        gap: 20px;
    }
    &__list{
        display: flex;
        gap: 20px;
    }
    &__item{
        list-style: none;
        text-decoration: none;
    }
    &__link{
        text-decoration: none;
        color: #2c3e50;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Palanquin Dark', sans-serif;
    }
    &__cart--btn{
        background: none;
        border: none;
        cursor: pointer;
    }
}
</style>

