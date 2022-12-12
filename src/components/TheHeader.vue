<script>
    import TheSearchSection from './TheSearchSection.vue';

    export default{ 
        components: { TheSearchSection } 
    }
</script>

<template>
    <h1>BoolFlix</h1>
    <TheSearchSection />
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>