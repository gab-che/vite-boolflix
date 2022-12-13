<script>
    import {store} from '../store';
    import TheMovieCard from './TheMovieCard.vue';
    import TheSeriesCard from './TheSeriesCard.vue';
    export default{
        components: { TheMovieCard, TheSeriesCard },
        
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <div v-for="card in store.movies">
        <TheMovieCard :card="card"></TheMovieCard>
    </div>

    <div v-for="card in store.series">
        <TheSeriesCard :card="card"></TheSeriesCard>
    </div>
</template>

<style lang="scss" scoped>
</style>