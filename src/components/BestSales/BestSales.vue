<script lang="ts" setup>
import ProductCard from '@/components/ProductCard/ProductCard.vue';
import { ref } from 'vue';



const products = ref([
    {
        id: 1,
        title: 'Kiwi',
        price: 9,
        image: 'kiwi.svg',
        rating: 4,
        type: 'fruit',
    },
    {
        id: 2,
        title: 'Banana',
        price: 12,
        image: 'banana.svg',
        rating: 3,
        type: 'fruit',
    },
    {
        id: 3,
        title: 'Apple',
        price: 13,
        image: 'apple.svg',
        rating: 4,
        type: 'fruit',
    },
    {
        id: 4,
        title: 'Milk',
        price: 5,
        image: 'Milk2.svg',
        rating: 5,
        type: 'drinks',
    },
    {
        id: 5,
        title: 'Water',
        price: 3,
        image: 'water.svg',
        rating: 5,
        type: 'drinks',
    },
    {
        id: 6,
        title: 'Tomato',
        price: 10,
        image: 'tomato.svg',
        rating: 5,
    },
     {
        id: 7,
        title: 'Spices',
        price: 10,
        image: 'Spices.svg',
        rating: 5,
    },
    {
        id: 8,
        title: 'Cheese',
        price: 15,
        image: 'Cheese2.svg',
        rating: 5,
    },
])

const items = ref([...products.value]);
const activeFilter = ref('all');

function showMore() {
    let itemsToAdd = [...products.value];
    if (activeFilter.value === 'drinks' || activeFilter.value === 'fruit') {
        itemsToAdd = itemsToAdd.filter(product => product.type === activeFilter.value);
    }
    items.value.push(...itemsToAdd);
    if (activeFilter.value === 'rating') {
        items.value.sort((a, b) => b.rating - a.rating);
    } else if (activeFilter.value === 'price') {
        items.value.sort((a, b) => b.price - a.price);
    }
}
function sortByRating() {
    items.value.sort((a, b) => b.rating - a.rating);
    activeFilter.value = 'rating';
}
function sortByPrice() {
    items.value.sort((a, b) => b.price - a.price);
    activeFilter.value = 'price';
}
function sortAll(){
    items.value = [...products.value];
    activeFilter.value = 'all';
}
function sortDrinks(){
    items.value = products.value.filter(product => product.type === 'drinks');
    activeFilter.value = 'drinks';
}
function sortFruit(){
    items.value = products.value.filter(product => product.type === 'fruit');
    activeFilter.value = 'fruit';
}

</script>

<template lang="pug">
section.best-sales
    .best-sales__wr
        .best-sales__header
            h2.best-sales__title Daily Best Sell
            nav.best-sales__nav
                ul.best-sales__nav-list
                    li.best-sales__nav-item
                        a.best-sales__nav-link(href="#" :class="{ active: activeFilter === 'all' }" @click.prevent="sortAll()") All
                    li.best-sales__nav-item
                        a.best-sales__nav-link(href="#" :class="{ active: activeFilter === 'rating' }" @click.prevent="sortByRating()") Top sell
                    li.best-sales__nav-item
                        a.best-sales__nav-link(href="#" :class="{ active: activeFilter === 'price' }" @click.prevent="sortByPrice()") Top Price
                    li.best-sales__nav-item
                        a.best-sales__nav-link(href="#" :class="{ active: activeFilter === 'drinks' }" @click.prevent="sortDrinks()") Drinks
                    li.best-sales__nav-item
                        a.best-sales__nav-link(href="#" :class="{ active: activeFilter === 'fruit' }" @click.prevent="sortFruit()") Fruit
        .best-sales__grid
            ProductCard(v-for="(product, idx) in items" :key="idx" :product="product")
        .best-sales__footer
            button.best-sales__show-more(@click="showMore()") Show More
</template>

<style lang="scss" scoped>
.best-sales {
    width: 100%;
    background: linear-gradient(180deg, #FFFFFF 0%, #FDF8D0 50%, #FFFFFF 100%);
    padding: 60px 0;

    &__wr {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
    }

    &__title {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 28px;
        font-weight: 700;
        color: #111;
    }

    &__nav-list {
        display: flex;
        gap: 32px;
    }

    &__nav-link {
        font-family: 'Palanquin', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #555;
        transition: color 0.2s;
        cursor: pointer;

        &:hover {
            color: #4B7D11;
        }

        &.active {
            color: #4B7D11;
            font-weight: 700;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 24px;
        justify-items: center;
    }

    &__footer {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }

    &__show-more {
        padding: 12px 48px;
        border: 1.5px solid #111;
        background: transparent;
        font-family: 'Palanquin', sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: #111;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;

        &:hover {
            background: #111;
            color: #fff;
        }
    }
}
</style>