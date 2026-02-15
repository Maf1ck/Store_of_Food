<script setup lang="ts">
</script>
<template lang="pug">
    section.category
        .category__header
            h2.category__title Top Category
            .category__nav
                button.category__nav-btn.category__nav-btn--prev
                    img(src="@/assets/arrow_small.svg")
                button.category__nav-btn.category__nav-btn--next
                    img(src="@/assets/arrow_small.svg")
                
        .category__slider
            ul.category__list
                li.category__item
                    .category__item-category  
                        img.category__item-img(src="@/assets/fruits.svg")
                        p.category__item-title Fruits
                li.category__item
                    .category__item-category  
                        img.category__item-img(src="@/assets/vegetables.svg")
                        p.category__item-title Vegetables
                li.category__item
                    .category__item-category  
                        img.category__item-img(src="@/assets/meat.svg")
                        p.category__item-title Meat
                li.category__item
                    .category__item-category  
                        img.category__item-img(src="@/assets/snacks.svg")
                        p.category__item-title Snacks
                li.category__item
                    .category__item-category    
                        img.category__item-img(src="@/assets/milk.svg")
                        p.category__item-title Milk
        .category__discription
            .category__discription-image
                img.category__discription-image-img(src="@/assets/box.png")
            .category__discription-text
                h1.category__discription-text-title 
                    | ECO
                    span.category__discription-text-title-span -Friendly
                p.category__discription-text-p Discover a vibrant array of locally sourced and eco-friendly products on our grocery web store, connecting you with sustainable choices that support both the community and the planet.
                button.category__discription-text-button Learn More
</template>
<style scoped lang="scss">
.category{
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    &__title {
        font-size: 24px;
        font-weight: 700;
        font-family: 'Palanquin', sans-serif;
        color: #000;
    }
    &__nav {
        display: flex;
        gap: 15px;
    }
    &__nav-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 12px;
            height: auto;
        }

        &--next img {
            transform: rotate(180deg);
        }

        &:hover {
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
        }
    }
    &__list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__item{
        list-style: none;
        text-decoration: none;
        
    }
    &__item-category{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:20px 50px;
        background-color: rgba(248, 232, 102, 0.13);
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    &__item-img{
        width: 50px;
        height: 50px;
    }
    &__item-title{
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    &__discription{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background: linear-gradient(135deg, rgba(224, 245, 204, 1) 0%, rgba(252, 255, 194, 1) 100%);
        border-radius: 10px;
        margin-top: 50px;
            }
    &__discription-image{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px;
    }
    &__discription-text{
        display: flex;
        flex-direction: column;
    }
    &__discription-text-title{
        position: relative;
        font-family: 'Palanquin', sans-serif;
        display: inline-flex;
        align-items: center;
        font-size: 48px;
        font-weight: 700;
        color: #2d5016;
        line-height: 1.2;
    }
    &__discription-text-title-span{
        color: black;
    }
    &__discription-text-p{
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.6;
        color: #4a4a4a;
    }
    &__discription-text-button{
        margin-top: 20px;
        padding: 12px 30px;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    &__discription-text-button{
        max-width: 200px;
        background-color: #ffff;
        color: black;
        border: 1px solid black;
        padding: 12px 30px;
        cursor: pointer;
    }
}
</style>