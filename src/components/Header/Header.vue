<script>
</script>

<template lang="pug">
    .header
        .header_wrapper
            .header__logo
                img.icon__logo(src="@/assets/logo.svg" width="32" height="32" alt="Logo")
                h2.header__title Green Grocer
            .header__menu
                ul.header__list
                    li.header__item
                        a.header__link(href="#") Home
                    li.header__item
                        a.header__link(href="#") Discount
                    li.header__item
                        a.header__link(href="#") Top Category
                    li.header__item
                        a.header__link(href="#") Best Sales
            .header__search
                img.icon__search(src="@/assets/search.svg" width="24" height="24" alt="Search")
                input.header__input__search(type="text" placeholder="Search")
            .header__cart
                button.header__btn__cart
                    img.icon__cart(src="@/assets/cart.svg" width="24" height="24" alt="Cart")

                
                    

</template>

<style lang="scss">
li{
    list-style: none;
    text-decoration: none;
}
.header_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
    gap: 50px;
    .header__logo{
        display: flex;
        align-items: center;
        gap: 10px;
        .header__title{
            font-size: 16px;
            font-weight: 600;
            white-space: nowrap;
            font-family: 'Palanquin Dark', sans-serif;
        }
    }
    .header__menu{
        display: flex;
        gap: 20px;
        .header__list{
            display: flex;
            gap: 20px;
            .header__item{
                .header__link{
                    text-decoration: none;
                    color: #2c3e50;
                    white-space: nowrap;
                    font-size: 16px;
                    font-weight: 600;
                    font-family: 'Palanquin Dark', sans-serif;
                }
            }
        }
    }
    .header__search{
        position: relative;
        .header__input__search{
            width: 100%;
            padding-left: 40px;
            height: 40px;
            border: 1px solid #2c3e50;
        }
        .icon__search{
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
        }
    }
    .header__cart{
        .header__btn__cart{
            background: none;
            border: none;
            cursor: pointer;
        }
    }


}
</style>

