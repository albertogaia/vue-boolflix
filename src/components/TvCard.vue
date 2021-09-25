<template>
  <div class="single-card">
        <div class="item-info">
            Titolo
            <h3 class="item-title">{{item.name}}</h3> 
        </div>
        <div class="item-info">
            Titolo originale
            <h3 class="item-originalTitle">{{item.original_name}}</h3>
        </div>
        <div class="item-info">
            Lingua
            <h3 class="item-language"><country-flag :country='myLang(item.original_language)'/></h3>
        </div>
        <div class="item-info">
            Voto
            <h3 class="item-vote" v-if="(parseInt(item.vote_average) > 1)">{{item.vote_average}}</h3>
            <h3 class="item-vote" v-else>//</h3>
        </div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    components: {
        CountryFlag,
    },
    name: 'TvCard',

    props: ['item',],
    data() {
        return {
        }
    },
    methods: {
        myLang(lang){
            if(lang == 'en') return 'gb'
            else if (lang == 'ja') return 'jp'
            return lang
        },
    },


}
</script>

<style lang="scss" scoped>
@import '@/styles/singleCard.scss';
</style>