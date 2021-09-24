<template>
  <div>
        <ul>
            <li v-for="(item, index) in arrayList" :key="index" class="list-items">
                <div>Titolo<h3 class="item-title">{{item.title}}</h3></div>
                <div>Titolo originale<h3 class="item-originalTitle">{{item.original_title}}</h3></div>
                <div>Lingua<h3 class="item-language">{{item.original_language}}</h3></div>
                <div>Voto<h3 class="item-vote">{{item.vote_average}}</h3></div>

            </li>
        </ul>
  </div>
</template>

<script>
export default {
    name: 'VideoCard',

    props: ['arrayList'],
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
ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .list-items{
        width: calc(100% / 5 - 30px);
        margin: 15px;
    }
}
</style>