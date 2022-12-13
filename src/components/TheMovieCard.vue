<script>
    export default{
        props: {
            card: {
                type: Object
            },
        }
    }
</script>

<template>
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{card.original_title}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{card.original_language}}</li>
            <li class="list-group-item">{{card.vote_average}}</li>
            <!-- <li class="list-group-item">A third item</li> -->
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>