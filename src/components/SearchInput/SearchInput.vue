<template lang="pug">
    .header__search
        img.header__search-icon(src="@/assets/search.svg" width="24" height="24" alt="Search")
        input.header__search-input(type="text" placeholder="Search")
</template>

<style lang="scss" scoped>
.header__search{
    position: relative;
    width: 350px; 
    &-icon{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
    }
    &-input{
        width: 100%;
        padding-left: 40px;
        height: 40px;   
        border: 1px solid #2c3e50;
        box-sizing: border-box; 
    }
}
</style>