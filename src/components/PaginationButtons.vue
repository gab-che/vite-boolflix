<script>
    export default{
        props: {
            currentPage: {
                type: Number,
                default: 1,
            }
        },

        methods: {
            nextClick(){
                this.$emit('changePage', this.currentPage + 1)
            },
            prevClick(){
                this.$emit('changePage', this.currentPage - 1)
            }
        }
    }
</script>

<template>
    <button @click="prevClick">
        previous page
    </button>
    <button @click="nextClick">
        next page
    </button>

</template>

<style lang="scss" scoped>

</style>