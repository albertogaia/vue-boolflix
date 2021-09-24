<template>
  <div>
        <div class="item-info">Titolo<h3 class="item-title">{{item.title}}</h3></div>
        <div class="item-info">Titolo originale<h3 class="item-originalTitle">{{item.original_title}}</h3></div>
        <div class="item-info">Lingua<h3 class="item-language"><country-flag :country='myLang(item.original_language)'/></h3></div>
        <div class="item-info">Voto<h3 class="item-vote">{{item.vote_average}}</h3></div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    components: {
        CountryFlag,
    },
    name: 'VideoCard',

    props: ['item', 'arrayList'],
    data() {
        return {
        }
    },
    methods: {
        myLang(lang){
            if(lang == 'en') return 'gb' 
            return lang
        },
    },


}
</script>

<style lang="scss" scoped>
.item-info{
    margin: 10px auto;
}
</style>