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
    <ul>
        <li>
            <h5>Titolo: {{card.title}}</h5>
            <p>Titolo originale: {{card.original_title}}</p>
            <p>Lingua: {{card.original_language}}</p>
            <p>Voto: {{card.vote_average}}</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
</style>