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
    <div class="search_bar">
        <div class="input-group">
            <input type="text" class="form-control d-none" placeholder="Cerca film o serie tv"
                v-model="userInput.title"
                @keyup.enter="onSearchClick">
            <button class="btn" type="button">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    i{
        color: $primary_color;
    }
</style>