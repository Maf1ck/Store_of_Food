<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
        rating: number;
    }
}>();

const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
}
</script>

<template lang="pug">
    .product-card
        .product-card__image-wr
            img.product-card__image(:src="product.image" :alt="product.title")
        .product-card__info
            .product-card__details
                h3.product-card__title {{ product.title }}
                p.product-card__price {{ formatPrice(product.price) }}
                .product-card__rating
                    img.product-card__star(
                        v-for="i in 5" 
                        :key="i" 
                        :src="i <= product.rating ? '/src/assets/star.svg' : '/src/assets/star_empty.svg'"
                        alt="star"
                    )
            .product-card__actions
                button.product-card__btn-cart
                    img(src="@/assets/cart.svg" alt="Add to cart")
                button.product-card__btn-wishlist
                    img(src="@/assets/heart.svg" alt="Add to wishlist")
            
</template>

<style lang="scss" scoped>
.product-card {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: pointer;
    width: 280px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }

    &__image-wr {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    &__image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__title {
        font-family: 'Palanquin', sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin: 0;
    }

    &__price {
        font-family: 'Palanquin', sans-serif;
        font-size: 20px;
        font-weight: 800;
        color: #000;
        margin: 0;
    }

    &__rating {
        display: flex;
        gap: 2px;
        margin-top: 5px;
    }

    &__star {
        width: 14px;
        height: 14px;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;
    }

    &__btn-cart {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #D4E29A; 
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background: #c3d67d;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }

    &__btn-wishlist {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        
        img {
            width: 20px;
            height: 20px;
        }

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>