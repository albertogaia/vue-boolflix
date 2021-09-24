<template>
  <div id="app">
    <Header 
      @userSearch="getInputText"
    />
    <Container 
       :inputText="inputText"
    />
  </div>
</template>

<script>
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
    }
  },
  methods: {
    getInputText(text){
      this.inputText = text;
      // console.log(this.inputText);
    }
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
