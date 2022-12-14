<script>
    export default{
        data(){
            return{
                userInput: {
                    title: '',
                },
                isHidden: false,
            }
        },

        emits: ['search-title'],

        methods: {
            onSearchClick(){
                this.$emit('search-title', this.userInput.title)
            },
            
        },


    }
</script>

<template>
    <div class="search_bar">
        <ul class="icon_list">
            <li>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cerca film o serie tv"
                        v-model="userInput.title"
                        v-if="isHidden"
                        @keyup.enter="onSearchClick">
                    <button class="btn" type="button" @click="isHidden = !isHidden">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </li>
            <li><a href="#"><i class="fa-solid fa-bell"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .icon_list{
        @include flex_gap;
        
        i{
            color: $primary_color;
        }
    }
</style>