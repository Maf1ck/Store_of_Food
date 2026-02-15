<script lang="ts" setup>

</script>

<template lang="pug">
    section.aboutus
        .aboutus__content
            .aboutus__description-wr
                h1.aboutus__description-wr-title Your Ultimate Online 
                    span.aboutus__description-wr-span Grocery
                p.aboutus__description-wr-text Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials
                button.aboutus__description-wr-btn Shop Now
            .aboutus__image
                img.aboutus__image-img(src="@/assets/about-us.svg" alt="About Us")
        
                
</template>

<style lang="scss" scoped>
.aboutus{
    background: linear-gradient(to bottom, #FCFCF7 , #F5EEAD);
    &__content{
        display: flex;
        justify-content: center;
        flex-direction: row;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
        padding: 0 50px;
        gap: 120px;
    }
    &__description-wr{
        flex-direction: column;
        align-items: flex-start;
        max-width: 550px;
    }
    &__description-wr-title{
        font-size: 56px;
        font-weight: 600;
        color: #000;
        max-width: 450px;
        font-family: 'Palanquin Dark', sans-serif;
    }
    &__description-wr-span{
        color: #4B7D11;
    }
    &__description-wr-text{
        font-size: 20px;
        color: #555;
        font-family: 'Open Sans', sans-serif;
        max-width: 480px;
    }
    &__description-wr-btn{
        background-color: #000;
        color: #fff;
        padding: 15px 40px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    &__image{
        height:100vh;
    }
    &__image-img{
        width: 500px;

        height: auto;
    }
}
</style>