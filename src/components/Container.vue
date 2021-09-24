<template>
  <div>
      <div class="container" >
          <div class="welcome" v-if="(listUser.length < 1)">
                <h1 class="welcome-title">Boolflix</h1>
                <input v-on:keyup.enter="sendResult" type="text" v-model="inputText" placeholder="Cerca un titolo" autofocus autocomplete="">

            </div>
          <ul v-else>
              <li v-for="(item, index) in listUser" :key="index" class="list-items">
                  <VideoCard
                    :item="item"/>
              </li>
            
          </ul>
      </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'
export default {
    name: 'Container',
    props: ['listUser'],

    components: {
        VideoCard
    },
    data() {
        return {
            arrayList: [],
            filteredList:[],
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
    }


}

ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .list-items{
        width: calc(100% / 5 - 30px);
        margin: 15px;
        text-align: center;


    }
}
</style>