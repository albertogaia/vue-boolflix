<template>
  <div class="header">
      <div class="container">
        <div class="logo-text">
            <h2>BoolFlix</h2>
        </div>
        <div class="search-container">
            <input type="text" v-model="inputText" placeholder="Cerca un titolo">
            <button type="sumbit" @click="$emit('userSearch', inputText)">Cerca</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            inputText: '',
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>

@import '@/styles/general.scss';

.header{
    height: 100px;
    width: 100%;
    background-color: $bg-dark;
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-text{
        h2{
            font-weight: 900;
            color: $primary;
        }
    }
    
}


</style>>
