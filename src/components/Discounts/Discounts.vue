<script lang="ts">
</script>

<template lang="pug">
.discounts
    .discounts__wr
        .discounts__description
            ul.discounts__list
                li.discounts__item
                    img.discounts__item-icons(src="@/assets/headphones.svg" width="32" height="32" alt="Headphones")
                    .discounts__item__text--wr
                        p.discounts__item-title Support 24 h
                        p.discounts__item-text Dedicated support
                li.discounts__item
                    img.discounts__item-icons(src="@/assets/shield.svg" width="32" height="32" alt="Shield")
                    .discounts__item__text--wr
                        p.discounts__item-title Secure Payment
                        p.discounts__item-text ensure your money is safe
                li.discounts__item
                    img.discounts__item-icons(src="@/assets/return.svg" width="32" height="32" alt="Return")
                    .discounts__item__text--wr
                        p.discounts__item-title Refundable
                        p.discounts__item-text Damage items can refund it
                li.discounts__item
                    img.discounts__item-icons(src="@/assets/archive.svg" width="32" height="32" alt="Shipping")
                    .discounts__item__text--wr
                        p.discounts__item-title Free Shipping
                        p.discounts__item-text Order over 40$
    .discounts__banners
        .discounts__banners--sale
            .discounts__banners--image
                img(src="@/assets/apple.svg").discounts__banners--image--img
            .discounts__banners--sale__text
                h2.discounts__banners--sale__title SUMMER SALE
                .discounts__banners--sale__text--wr
                    h2.discounts__banners--sale__text--title 40%OFF
                    h1.discounts__banners--sale__text--text Fresh Fruit
                    h1.discounts__banners--sale__text--percent %100
                    button.discounts__banners--sale__btn
                        span Shop Now
                        img(src="@/assets/arrow.svg").discounts__banners--sale__btn--img
        .discounts__banners--fresh
            h1.discounts__banners--fresh__title Fresh Delivered Daily
            img(src="@/assets/cheese.svg").discounts__banners--fresh__img
</template>

<style lang="scss">
.discounts {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    &__wr {
        width: 100%;
    }

    &__description {
        width: 100%;
    }

    &__list {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        padding: 0;
        margin: 0;
        width: 100%;
        list-style: none;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__item-icons {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
    }

    &__item__text--wr {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    &__item-title {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Palanquin Dark', sans-serif;
    }

    &__item-text {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Palanquin Dark', sans-serif;
        opacity: 0.6;
    }
    
    &__banners {
        display: flex;
        
        gap: 20px;
        width: 100%;

    &--image {
        display: flex;
        align-items: center;
        width: 45%;
        &--img{
            max-width: 350px;
            max-height: 200px;
        }   
    }

        &--sale,
        &--fresh {
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            position: relative;
        }
        &--sale {
            background-color: #dcf0c3;
            max-height: 350px;
            align-items: center;
            padding: 30px 50px;
            max-width: 900px;

            &__text {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                z-index: 1;
                margin-left: auto;

                &--wr {
                    display: flex;
                    flex-direction: column;
                }
            }

            &__title {
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 16px;
                font-weight: 400;
                margin: 0 0 15px 0;
            }

            &__text--title {
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 30px;
                font-weight: 800;
                color: #517907;
                margin: 0;
            }

            &__text--text {
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 48px;
                font-weight: 800;
                margin: 0;
            }

            &__text--percent {
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 48px;
                font-weight: 800;
                margin: 0 0 20px 0;
            }

            &__btn {
                display: flex;
                align-items: center;
                gap: 10px;
                background-color: #fff;
                border: 1px solid #333;
                padding: 12px 25px;
                font-family: 'Palanquin Dark', sans-serif;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;

                &--img {
                    width: 14px;
                    height: 14px;
                }
            }

        }

        &--fresh {
            background-color: #fff9d9;
            max-height: 350px;
            max-width: 300px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 40px 20px 0 20px;

            &__title {
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 38px;
                font-weight: 800;
                text-align: center;
                margin: 0;
            }

            &__img {
                max-width: 100%;
                height: auto;
            }
        }
    }
}
</style>