<script>
    import TheSearchSection from './TheSearchSection.vue';
    import {store, fetchMovies, fetchSeries} from '../store';
    export default{ 
        components: { TheSearchSection },
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
    <h1>BoolFlix</h1>
    <TheSearchSection @search-title="searchTitle"/>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>