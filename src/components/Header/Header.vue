<script lang="ts" setup>
import SearchInput from "@/components/SearchInput/SearchInput.vue";
import Modal from '@/components/Modal/Modal.vue';
import { ref, computed } from 'vue';
import { useCardAndWishlistStore } from "@/stores/cardAndWishlist.store";
import { storeToRefs } from 'pinia';
const cardAndWishlistStore = useCardAndWishlistStore();
const { card, wishlist } = storeToRefs(cardAndWishlistStore);

const cardProducts = computed(() => {
    return card.value.map((item: any) => {
        const qty = item.quantity || 1;
        return {
            ...item,
            quantity: qty,
            price: item.price * qty,
        };
    });
});

const totalPrice = computed(() => {
    return cardProducts.value.reduce((sum, item) => sum + item.price, 0);
});


const getImageUrl = (name: string) => {
    return new URL(`../../assets/${name}`, import.meta.url).href;
};

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const isModalOpen = ref(false);


</script>

<template lang="pug">
    .header
        img.header__logo-icon(src="@/assets/logo.svg" width="150" height="37" alt="Logo")

        nav.header__menu
            ul.header__list
                li.header__item
                    a.header__link(@click.prevent="scrollTo('section-home')") Home
                li.header__item
                    a.header__link(@click.prevent="scrollTo('section-discounts')") Discount
                li.header__item
                    a.header__link(@click.prevent="scrollTo('section-category')") Top Category
                li.header__item
                    a.header__link(@click.prevent="scrollTo('section-bestsales')") Best Sales

        .header__actions
            SearchInput
            .header__cart
                button.header__cart--btn(@click="isModalOpen = true")
                    img.header__cart-icon(src="@/assets/cart.svg" width="24" height="24" alt="Cart")
        Modal(:isOpen="isModalOpen" @close="isModalOpen = false" @confirm="isModalOpen = false")
            template(#title)
                | Ваш &nbsp;
                span кошик
            template(#subtitle) Оформлення замовлення
            
            .cart-items(v-if="cardProducts.length")
                .cart-item(v-for="item in cardProducts" :key="item.id")
                    img.cart-item__img(:src="getImageUrl(item.image)" :alt="item.title")
                    .cart-item__info
                        h4.cart-item__title {{ item.title }}
                        span.cart-item__qty Кількість: {{ item.quantity }}
                    .cart-item__right
                        span.cart-item__price ${{ item.price.toFixed(2) }}
                        button.cart-item__remove(@click="cardAndWishlistStore.removeFromCard(item)" title="Видалити") ×
                
                .cart-total
                    span.cart-total__label Сума до оплати:
                    span.cart-total__price ${{ totalPrice.toFixed(2) }}
            
            p.cart-empty(v-else) Ваш кошик порожній

            template(#actions)
                button.modal__btn-secondary(@click="isModalOpen = false") Продовжити покупки
                button.modal__btn-primary(v-if="cardProducts.length" @click="isModalOpen = false") Оформити замовлення

</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    box-sizing: border-box;


    &__menu {
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
        cursor: pointer;

        &:hover {
            color: #4B7D11;
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    &__cart--btn {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        position: relative;
    }
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 450px;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
        &:hover { background: #aaa; }
    }
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;

    &__img {
        width: 64px;
        height: 64px;
        object-fit: contain;
        background: #F8F8F8;
        border-radius: 8px;
        padding: 4px;
    }

    &__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__title {
        font-family: 'Palanquin', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #111;
        margin: 0;
        line-height: 1.2;
    }

    &__qty {
        font-family: 'Palanquin', sans-serif;
        font-size: 13px;
        color: #777;
    }

    &__right {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    &__price {
        font-family: 'Palanquin', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #4B7D11;
    }

    &__remove {
        background: none;
        border: none;
        font-size: 24px;
        color: #aaa;
        cursor: pointer;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: #d32f2f;
        }
    }
}

.cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding-top: 16px;
    border-top: 2px solid #111;

    &__label {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #111;
    }

    &__price {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #4B7D11;
    }
}

.cart-empty {
    text-align: center;
    font-family: 'Palanquin', sans-serif;
    font-size: 16px;
    color: #555;
    padding: 30px 0;
    margin: 0;
}
</style>

