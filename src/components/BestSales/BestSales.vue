<script lang="ts" setup>
import ProductCard from '../ProductCard/ProductCard.vue';

const products = [
    { id: 1, title: 'Red Apple', price: 13.00, rating: 4, image: '/src/assets/logo.svg' },
    { id: 2, title: 'Snack', price: 34.00, rating: 5, image: '/src/assets/logo.svg' },
    { id: 3, title: 'Vegetables', price: 5.00, rating: 3, image: '/src/assets/logo.svg' },
    { id: 4, title: 'Strawberry', price: 9.00, rating: 5, image: '/src/assets/logo.svg' }
];

</script>

<template lang="pug">
    section.best-sales
        .best-sales__wr
            .best-sales__header
                h2.best-sales__title Daily Best Sell 
                nav.best-sales__nav
                    ul.best-sales__list
                        li.best-sales__item
                            a.best-sales__link.best-sales__link--active(href="#") All
                        li.best-sales__item
                            a.best-sales__link(href="#") Top sell
                        li.best-sales__item
                            a.best-sales__link(href="#") New
                        li.best-sales__item
                            a.best-sales__link(href="#") Vegetables
                        li.best-sales__item
                            a.best-sales__link(href="#") Fruit
            .best-sales__content
                ProductCard(v-for="product in products" :key="product.id" :product="product")
        
</template>

<style lang="scss" scoped>
.best-sales {
    padding: 60px 20px;
    background: #f9f9f9;

    &__wr {
        max-width: 1200px;
        margin: 0 auto;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 20px;
    }

    &__title {
        font-family: 'Palanquin', sans-serif;
        font-size: 30px;
        font-weight: 700;
        color: #000;
        margin: 0;
    }

    &__nav {
        display: flex;
        align-items: center;
    }

    &__list {
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item {
        font-family: 'Palanquin', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }

    &__link {
        text-decoration: none;
        color: #333;
        transition: color 0.3s;

        &:hover, &--active {
            color: #5a8c2e;
            font-weight: 700;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 30px;
        justify-items: center;
    }
}
</style>