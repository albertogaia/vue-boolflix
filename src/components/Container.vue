<template>
  <div>
      <div class="" >
            <div class="welcome" v-if="(listUser.length < 1)">
                <h1 class="welcome-title">Boolflix</h1>
                <input v-on:keyup.enter="sendResult" type="text" v-model="inputText" placeholder="Cerca un titolo" autofocus autocomplete="">
                <country-flag country='it'/>
            </div>

            <div v-else class="movies-list">
                <h2 class="results-list-title">Movies</h2>
                <ul>
                    <li v-for="(item, index) in listUser" :key="index" class="list-items">
                            <VideoCard
                                :item="item"
                            />
                    </li>
                </ul>
                <h2 class="results-list-title" v-if="(listUserTv.length>0)">TV Series</h2>
                <ul>
                    <li v-for="(item, index) in listUserTv" :key="index" class="list-items">
                            <VideoCard
                                :item="item"
                            />
                    </li>
                </ul>
            </div>
      </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'
import CountryFlag from 'vue-country-flag'

export default {
    name: 'Container',
    props: ['listUser', 'listUserTv'],

    components: {
        VideoCard,
        CountryFlag,

    },
    data() {
        return {
            inputText: ''
        }
    },

    methods:{
        sendResult(){
            this.$emit('userSearch', this.inputText);
            this.inputText = '';
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/general.scss';

.welcome{
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.8s;


    .welcome-title{
        margin-top: -100px;
        font-size: 5rem;
        color: $primary;
    }

    input{
        height: 50px;
        width: 300px;
        outline: none;
        border: none;
        line-height: 50px;
        font-size: 30px;

    }
    input::placeholder{
        text-align: center;
        opacity: 0.2;
    }


}
.movies-list{
    background-color: rgb(36, 36, 36);
    transition: 0.8s;
    overflow: auto;
    min-height: calc(100vh - 100px) ;

}
.results-list-title{
    color: white;
    padding: 20px 20px;
    text-align: left;
    font-size: 34px;
}
ul{
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-basis: 300px;
    overflow: auto;

    .list-items{
        display: flex;
        justify-content: center;
        min-width: 300px;
        margin: 15px;
        background-color: $bg-dark;
        border-radius: 10px;
        color: white;
        overflow: hidden;

    }
}
</style>