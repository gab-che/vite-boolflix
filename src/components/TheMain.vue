<script>
    import TheCardsList from './TheCardsList.vue';

    export default{ 
        components: { TheCardsList } 
    }
</script>

<template>
    <TheCardsList></TheCardsList>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>