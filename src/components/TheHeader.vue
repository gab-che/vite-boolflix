<script>
    import TheSearchSection from './TheSearchSection.vue';
    import {store, fetchMovies, fetchSeries} from '../store';
    import TheLinkList from './TheLinkList.vue';
    export default{ 
        components: { TheSearchSection, TheLinkList },
        data(){
            return{
                store,
            }
        },

        methods: {
            searchTitle(title){
                this.store.searchInput = title;
                fetchMovies();
                fetchSeries();
            }
        }
    }
</script>

<template>
    <header class="container-fluid p-3">
        <div class="navbar_right d-flex">
            <div class="logo_container">
                <img src="../assets/logonetflix.png" alt="netflix logo" class="img-fluid">
            </div>
            <TheLinkList></TheLinkList>
        </div>

        <div class="navbar_left">
            <TheSearchSection @search-title="searchTitle"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/_utilities.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    header{
        @include flex_between;
        background-color: $bg_color;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .logo_container{
        width: 100px;
    }
</style>