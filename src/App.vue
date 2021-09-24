<template>
  <div id="app">
    <Header 
      @userSearch="getInputText"
    />
    <Container 
      :listUser="listUser"
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
      inputText: '',
      listUser: [],
      arrayList: [],
      apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=ce4bf3c43722932619dd2d67366a9e66&query='
    }
  },
  methods: {
    getInputText(text){
      this.inputText = text;
      this.getArrayUser()
    },

    getArrayUser(){
      if(this.inputText === ''){
        this.listUser = this.arrayList
      }
      axios
        .get(this.apiURL+this.inputText)
        .then(res =>{
            this.listUser = res.data.results
            console.log(this.listUser)
        })
    },

    getList(){
        axios
            .get(this.apiURL + 'rick')
            .then(res =>{
                this.arrayList = res.data.results //array di oggetti (ogni oggetto un film)
                this.listUser = this.arrayList
            })
    },


  },

  created() {
    this.getList()
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
