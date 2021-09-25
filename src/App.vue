<template>
  <div id="app">
    <Header 
      @userSearch="getInputText"
    />
    <Container 
      :listUser="listUser" 
      :listUserTv="listUserTv"
      @userSearch="getInputText"

    />
  </div>
</template>

<script>
import axios from 'axios'

import Header from './components/Header.vue';
import Container from './components/Container.vue'; 

export default {
  name: 'App',
  components: {
    Header,
    Container,
  },

  data() {
    return {
      listUser: [],
      listUserTv: [],
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiTypeMovie: 'movie',
      apiTypeTv: 'tv',
      apiString: '?api_key=',
      apiKey: 'ce4bf3c43722932619dd2d67366a9e66&query=',
      query: '',
    }
  },
  methods: {
    getInputText(text){
      this.query = text;
      this.getArrayUser();
      this.getArrayTvUser()
    },


    getArrayUser(){
      if(this.query == ''){
        this.listUser = []
      }
      axios
        .get(this.apiURL + this.apiTypeMovie + this.apiString + this.apiKey + this.query)
        .then(res =>{
            this.listUser = res.data.results
        })
        
    },

    getArrayTvUser(){
      if(this.query == ''){
        this.listUserTv = []
      }
      axios
        .get(this.apiURL + this.apiTypeTv + this.apiString + this.apiKey + this.query)
        .then(res =>{
            this.listUserTv = res.data.results
        })
        
    },
  },



  created() {
  },
}
</script>

<style lang="scss">
@import './styles/general.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
