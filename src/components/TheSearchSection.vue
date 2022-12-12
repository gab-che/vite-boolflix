<script>
    export default{
        data(){
            return{
                userInput: {
                    title: '',
                },
            }
        },

        emits: ['search-title'],

        methods: {
            onSearchClick(){
                this.$emit('search-title', this.userInput.title)
            }
        },
    }
</script>

<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Inserisci film"
            v-model="userInput.title">
        <button class="btn btn-outline-secondary" type="button"
            @click="onSearchClick">Cerca</button>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>