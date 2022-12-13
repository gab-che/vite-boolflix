<script>
    export default{
        props: {
            card:{
                type: Object,

            }
        }
    }
</script>

<template>
    <ul>
        <li>
            <h5>Titolo: {{card.title}}</h5>
            <p>Titolo originale: {{card.original_title}}</p>
            <p>Lingua: {{card.original_language}}</p>
            <p>Voto: {{card.vote_average}}</p>
        </li>
    </ul>
    <!-- <ul>
        <li v-for="serie in store.series">
            <h5>Titolo: {{serie.name}}</h5>
            <p>Titolo originale: {{serie.original_name}}</p>
            <p>Lingua: {{serie.original_language}}</p>
            <p>Voto: {{serie.vote_average}}</p>
        </li>
    </ul> -->
</template>

<style lang="scss" scoped>
</style>