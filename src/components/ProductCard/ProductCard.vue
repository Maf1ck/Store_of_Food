<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { showToast } from '@/components/Toast/toastStore';

const props = defineProps<{
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
        rating: number;
        type?: string;
    }
}>();
const isInWishlist = ref(false);

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
};

const getImageUrl = (name: string) => {
    return new URL(`../../assets/${name}`, import.meta.url).href;
};

function addToCard(product: any) {
    localStorage.setItem('card', JSON.stringify([...JSON.parse(localStorage.getItem('card') || '[]'), product]));
    showToast(`${product.title} added to cart!`);
}

onMounted(() => {
    const list = JSON.parse(localStorage.getItem('wishlist') || '[]');
    isInWishlist.value = list.some((item: any) => item.id === props.product.id);
});

function toggleWishlist(product: any) {
    let list = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const exists = list.some((item: any) => item.id === product.id);

    if (exists) {
        list = list.filter((item: any) => item.id !== product.id);
        localStorage.setItem('wishlist', JSON.stringify(list));
        isInWishlist.value = false;
        showToast(`${product.title} removed from wishlist`);
    } else {
        list.push(product);
        localStorage.setItem('wishlist', JSON.stringify(list));
        isInWishlist.value = true;
        showToast(`${product.title} added to wishlist!`);
    }
}

</script>

<template lang="pug">
    .product-card
        .product-card__image-wr
            img.product-card__image(:src="getImageUrl(product.image)" :alt="product.title")
        .product-card__info
            .product-card__details
                h3.product-card__title {{ product.title }}
                p.product-card__price {{ formatPrice(product.price) }}
                .product-card__rating
                    img.product-card__star(
                        v-for="i in 5" 
                        :key="i" 
                        :src="i <= product.rating ? getImageUrl('star.svg') : getImageUrl('star_empty.svg')"
                        alt="star"
                    )
            .product-card__actions
                button.product-card__btn-cart(@click="addToCard(product)")
                    img(src="@/assets/cart.svg" alt="Add to cart")
                button.product-card__btn-wishlist(
                    @click="toggleWishlist(product)"
                    :class="{ 'product-card__btn-wishlist--active': isInWishlist }"
                )
                    img(:src="isInWishlist ? getImageUrl('heart-red.svg') : getImageUrl('heart.svg')" alt="Toggle wishlist")
</template>

<style lang="scss" scoped>
.product-card {
    background: #fff;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    width: 240px;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    &__image-wr {
        width: 100%;
        height: 190px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: #fff;
        border-radius: 12px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 8px;
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
    }

    &__title {
        font-family: 'Palanquin', sans-serif;
        font-size: 17px;
        font-weight: 500;
        color: #222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__price {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #111;
    }

    &__rating {
        display: flex;
        gap: 3px;
        align-items: center;
        margin-top: 4px;
    }

    &__star {
        width: 16px;
        height: 16px;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
    }

    &__btn-cart {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #D4E29A;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.25s, transform 0.2s;

        img {
            width: 20px;
            height: 20px;
        }
    }

    &__btn-wishlist {
        background: none; 
        border: none; 
        cursor: pointer; 
        padding: 4px; 
        display: flex; 
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s, transform 0.2s;

        img {
            width: 18px;
            height: 18px;
            
        }


    }
}
</style>