<script lang="ts" setup>
</script>

<template lang="pug">
footer.footer
    .footer__wr
        .footer__brand
            .footer__brand-top
                img.footer__logo(src="@/assets/logo.svg")
            .footer__contact
                p.footer__contact-label CONTACT
                p.footer__contact-item Phone : 99988765
                p.footer__contact-item Email : Greengrocery9@Gmail.Com
            .footer__payment
                img.footer__payment-icon(src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='32' viewBox='0 0 52 32'%3E%3Crect width='52' height='32' rx='4' fill='%231A1F71'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='11' fill='%23fff' letter-spacing='0'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa")
                img.footer__payment-icon(src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='32' viewBox='0 0 52 32'%3E%3Crect width='52' height='32' rx='4' fill='%23EB001B'/%3E%3Ccircle cx='20' cy='16' r='10' fill='%23EB001B'/%3E%3Ccircle cx='32' cy='16' r='10' fill='%23F79E1B'/%3E%3Ccircle cx='26' cy='16' r='6' fill='%23FF5F00'/%3E%3C/svg%3E" alt="Mastercard")
                img.footer__payment-icon(src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='32' viewBox='0 0 52 32'%3E%3Crect width='52' height='32' rx='4' fill='%230061A8'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='9' fill='%23fff'%3EMaestro%3C/text%3E%3C/svg%3E" alt="Maestro")
        .footer__col
            h4.footer__col-title SOCIAL MEDIA
            ul.footer__col-list
                li.footer__col-item
                    a.footer__col-link(href="#") INSTAGRAM
                li.footer__col-item
                    a.footer__col-link(href="#") TWEETER
                li.footer__col-item
                    a.footer__col-link(href="#") FACEBOOK
        .footer__col
            h4.footer__col-title INFORMATION
            ul.footer__col-list
                li.footer__col-item
                    a.footer__col-link(href="#") About Us
                li.footer__col-item
                    a.footer__col-link(href="#") Blog
                li.footer__col-item
                    a.footer__col-link(href="#") Check Out
                li.footer__col-item
                    a.footer__col-link(href="#") Contact
        .footer__col
            h4.footer__col-title MY ACCOUNTS
            ul.footer__col-list
                li.footer__col-item
                    a.footer__col-link(href="#") MY Account
                li.footer__col-item
                    a.footer__col-link(href="#") Wish List
                li.footer__col-item
                    a.footer__col-link(href="#") Shopping Cart
        .footer__col
            h4.footer__col-title CATEGORIES
            ul.footer__col-list
                li.footer__col-item
                    a.footer__col-link(href="#") Fresh Product
                li.footer__col-item
                    a.footer__col-link(href="#") Snacks
                li.footer__col-item
                    a.footer__col-link(href="#") Meat
                li.footer__col-item
                    a.footer__col-link(href="#") Drinks
                li.footer__col-item
                    a.footer__col-link(href="#") Vegetables
    .footer__bottom
        p.footer__copyright Copyright © 2024 Jahad ALfahdi.
</template>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background: #fff;
    border-top: 1px solid #e8e8e8;

    &__wr {
        max-width: 1200px;
        margin: 0 auto;
        padding: 36px 20px 28px;
        display: flex;
        gap: 40px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    &__brand {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 210px;
    }

    &__brand-top {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__logo {
        width: 100px;
        height: 100px;
        object-fit: contain;
        display: block;
    }

    &__brand-name {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 22px;
        font-weight: 700;
        color: #111;
    }

    &__contact {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__contact-label {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #111;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    &__contact-item {
        font-family: 'Palanquin', sans-serif;
        font-size: 14px;
        color: #555;
    }

    &__payment {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    &__payment-icon {
        height: 30px;
        border-radius: 4px;
    }

    &__col {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 110px;
    }

    &__col-title {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #111;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    &__col-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__col-link {
        font-family: 'Palanquin', sans-serif;
        font-size: 14px;
        color: #555;
        transition: color 0.2s;

        &:hover {
            color: #4B7D11;
        }
    }

    &__bottom {
        border-top: 1px solid #e8e8e8;
        padding: 18px 20px;
        text-align: center;
    }

    &__copyright {
        font-family: 'Palanquin', sans-serif;
        font-size: 13px;
        color: #888;
    }
}
</style>
