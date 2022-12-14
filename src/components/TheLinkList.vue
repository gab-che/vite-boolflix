<script>
    export default{
        data(){
            return{
                linkList: ['Home', 'Serie TV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista']
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="link in this.linkList">
            <a href="#">{{link}}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/_utilities.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    ul{
        @include flex_gap;
    }
</style>