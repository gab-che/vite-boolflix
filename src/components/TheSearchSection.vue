<script>
    import {store, fetchMovies} from '../store';
    export default{
        data(){
            return{
                store,
            }
        },

        created(){
            fetchMovies()
        }
    }
</script>

<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Inserisci film">
        <button class="btn btn-outline-secondary" type="button">Cerca</button>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>