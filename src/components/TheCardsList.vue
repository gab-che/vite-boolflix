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
    <h2>Film</h2>
    <div class="row">
        <div class="col col-sm-5 col-lg-3"
            v-for="card in store.movies">
            <TheMovieCard :card="card"></TheMovieCard>
        </div>
    </div>

    <h2>Serie TV</h2>
    <div class="row">
        <div class="col col-sm-5 col-lg-3"
            v-for="card in store.series">
            <TheSeriesCard :card="card"></TheSeriesCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/_utilities.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    .row{
        @include flex_nowrap;
        margin-bottom: $standard_spacing;
        padding-block: $standard_spacing;
    }
</style>