<script lang="ts" setup>
import Header from '@/components/Header/Header.vue';
import BestSales from '@/components/BestSales/BestSales.vue';
import Hero from '@/components/AboutUs/AboutUs.vue';
import Discounts from '@/components/Discounts/Discounts.vue';
import Subscribe from '@/components/Subscribe/Subscribe.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template lang="pug">
    div#section-home
        Header
    div#section-home-hero
        Hero
    div#section-discounts
        Discounts
    div#section-bestsales
        BestSales
    Subscribe
    Footer
</template>

<style lang="scss" scoped>
</style>