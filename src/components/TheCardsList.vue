<script>
    import TheCard from './TheCard.vue';
    import {store} from '../store';
    export default{
        components: { TheCard },
        
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
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
    <TheCard></TheCard>
</template>

<style lang="scss" scoped>
</style>