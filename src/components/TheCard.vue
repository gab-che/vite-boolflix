<script>
    import { store } from '../store';
    export default{
        props: {
            card: {
                type: Object
            },
        },

        data(){
            return{
                isVisible: false,
            }
        },

        methods: {
            getMovieSrc(path){
                if (!path){
                    return "src/assets/No_Image_Available.jpg";
                }
                return "https://image.tmdb.org/t/p/" + store.imgSizes[3] + path;
            },
        },

        computed:{
            iconFlag(){
                let toReturn = {
                    icon: `fi-${this.card.original_language}`
                }

                if(this.card.original_language === 'en' || this.card.original_language === 'uk'){
                    toReturn.icon = 'fi-gb'
                } else if(this.card.original_language === 'ja'){
                    toReturn.icon = 'fi-jp'
                } else if(this.card.original_language === 'da'){
                    toReturn.icon = 'fi-dk'
                }

                return toReturn
            },

            newVote(){
                const halfVote = Math.floor(this.card.vote_average / 2);
                let toReturn = {
                    fullStars: halfVote,
                    emptyStars: 5 - halfVote
                }

                return toReturn
            }
        }
    }
</script>

<template>
    <div class="card text-bg-dark"
        @mouseenter="isVisible = true"
        @mouseleave="isVisible = false">
        <img :src="getMovieSrc(card.poster_path)" class="card-img" :alt="card.title">
        <!-- contenitore overlay -->
        <div class="card-img-overlay overflow-scroll"
            v-if="isVisible">
            <!-- titolo film tradotto-->
            <h5 class="card-title">{{card.title}}</h5>
            <!-- titolo film originale -->
            <p class="card-text"
                v-if="card.title !== card.original_title">{{card.original_title}}</p>
            <!-- bandierina -->
            <p class="card-text">Lingua: 
                <span class="fi" :class="iconFlag.icon"></span>
            </p>
            <!-- stelilne -->
            <p class="card-text">
                <i class="fa-solid fa-star"
                    v-for="i in newVote.fullStars"></i>
                <i class="fa-regular fa-star"
                    v-for="i in newVote.emptyStars"></i>
            </p>
            <!-- trama -->
            <p class="card-text">{{card.overview}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .card-img-overlay{
        background-color: $bg_color;
    }
</style>