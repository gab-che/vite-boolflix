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
    <div v-for="card in store.movies">
        <TheCard :card="card"></TheCard>
    </div>
</template>

<style lang="scss" scoped>
</style>