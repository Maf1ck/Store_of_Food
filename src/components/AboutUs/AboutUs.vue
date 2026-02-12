<script lang="ts" setup>

</script>

<template lang="pug">
    .aboutus
        .aboutus__description
            .aboutus__description-wr
                h1.aboutus__description_wr-title Your Ultimate Online 
                    span.aboutus__description_wr-span Grocery
                p.aboutus__description_wr-text Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials
                button.aboutus__description_wr-btn Shop Now
            .aboutus__image
                img.aboutus__image-img(src="@/assets/about-us.svg" alt="About Us")
        
                
</template>

<style lang="scss" scoped>
.aboutus{
    background: linear-gradient(to bottom, #FCFCF7 , #F5EEAD);
    &__description{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 50px;
        gap: 120px;
    }
    &__description-wr{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 550px;
    }
    &__description_wr-title{
        font-size: 56px;
        font-weight: 600;
        color: #000;
        max-width: 450px;
        font-family: 'Palanquin Dark', sans-serif;
    }
    &__description_wr-span{
        color: #4B7D11;
    }
    &__description_wr-text{
        font-size: 20px;
        color: #555;
        font-family: 'Open Sans', sans-serif;
        max-width: 480px;
    }
    &__description_wr-btn{
        background-color: #000;
        color: #fff;
        padding: 15px 40px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    &__image{
        flex: 0 0 605px;
    }
    &__image-img{
        width: 100%;
        height: auto;
    }
}
</style>