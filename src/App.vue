<script>
    import TheHeader from './components/TheHeader.vue';
    import TheMain from './components/TheMain.vue';
    export default{
        components: { TheHeader, TheMain }

    }

</script>

<template>
    <div class="container">
        <TheHeader />
        <TheMain />
    </div>
</template>

<style lang="scss">
    @use './styles/general.scss';
    @use './styles/partials/variables' as *;
    @use './styles/partials/utilities' as *;
</style>
