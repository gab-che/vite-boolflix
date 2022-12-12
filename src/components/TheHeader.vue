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
    <ul>
        <li v-for="movie in store.movies">
            <h5>Titolo: {{movie.title}}</h5>
            <p>Titolo originale: {{movie.original_title}}</p>
            <p>Lingua: {{movie.original_language}}</p>
            <p>Voto: {{movie.vote_average}}</p>
        </li>
    </ul>
    <ul>
        <li v-for="serie in store.series">
            <h5>Titolo: {{serie.name}}</h5>
            <p>Titolo originale: {{serie.original_name}}</p>
            <p>Lingua: {{serie.original_language}}</p>
            <p>Voto: {{serie.vote_average}}</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>