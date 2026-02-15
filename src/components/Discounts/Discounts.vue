<script lang="ts">
</script>

<template lang="pug">
section.discounts
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
            img(src="@/assets/apple.svg").discounts__banners--sale-image
            .discounts__banners--sale__text
                h2.discounts__banners--sale__title SUMMER SALE
                .discounts__banners--sale__text--wr
                    h2.discounts__banners--sale__text--title 40%OFF
                    h1.discounts__banners--sale__text--text Fresh Fruit
                    h1.discounts__banners--sale__text--percent %100
                    button.discounts__banners--sale__btn
                        span Shop Now
                        img(src="@/assets/arrow.svg").discounts__banners--sale__btn--arrow
        .discounts__banners--fresh
            h1.discounts__banners--fresh__title Fresh Delivered Daily
            img(src="@/assets/cheese.svg").discounts__banners--fresh__image
</template>

<style lang="scss" scoped>
.discounts {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;

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
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;
        &--sale {
            display: flex;
            align-items: center;
            border-radius: 10px;
            justify-content: center;
            background:rgba(222, 241, 189, 1);
            gap: 20px;
            width: 70%;
            &-image    {
                width: 400px;
                height: 270px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 50px;

            }
            &__text{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                gap: 20px;
            }
            &__text--wr{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                gap: 5px;
                
            }

            &__title{
                margin: 10px;
                font-size: 24px;
                white-space: nowrap;
                font-weight: 600;
                font-family: 'Palanquin Dark', sans-serif;
            }
            &__text--title{
                color: rgba(81, 121, 7, 1);
                font-size: 24px;
                font-weight: 600;
                font-family: 'Palanquin Dark', sans-serif;
                
            }
            &__text--text{
                margin: 0;
                font-size: 30px;
                font-weight: 600;
                font-family: 'Palanquin', sans-serif;
                
            }
            &__text--percent{
                font-size: 30px;
                font-weight: 600;
                font-family: 'Palanquin', sans-serif;
                
            }
            &__btn{
                display: flex;
                margin-top: 20px;
                align-items: center;
                justify-content: center;
                gap: 10px;
                background: #ffffff;
                border: 1px solid black;
                color: black    ;
                font-size: 16px;
                padding: 10px 20px;
                font-weight: 600;
                font-family: 'Palanquin', sans-serif;
                cursor: pointer;
                
            }
        }
        
        &--fresh{
            display: flex;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            justify-content: center;
            white-space: nowrap;    
            background:rgba(253, 248, 208, 1);
            gap: 20px;
            width: 30%;
            height: 370px;
            overflow: hidden;
            &__title{
                margin: 15px;
                font-size: 24px;
                font-weight: 600;
                overflow: hidden;
                font-family: 'Palanquin', sans-serif;
            }
            &__image{
                overflow: hidden;
                width: 400px;
                height: 270px;
            }
        }

    }
}
</style>