<template>
  <div>
        <div class="item-info">Titolo<h3 class="item-title">{{item.title}}</h3></div>
        <div class="item-info">Titolo originale<h3 class="item-originalTitle">{{item.original_title}}</h3></div>
        <div class="item-info">Lingua<h3 class="item-language">{{item.original_language}}</h3></div>
        <div class="item-info">Voto<h3 class="item-vote">{{item.vote_average}}</h3></div>
  </div>
</template>

<script>
export default {
    name: 'VideoCard',

    props: ['item'],
    data() {
        return {
        }
    },

    methods:{
    },

    created() {
    },
}
</script>

<style lang="scss" scoped>
.item-info{
    margin: 10px auto;
}
</style>