<template>
  <div>
      <div class="container" >
          <ul>
              <li v-for="(item, index) in getFilteredList" :key="index" class="list-items">
                  <VideoCard
                    :item="item"/>
              </li>
            
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import VideoCard from './VideoCard.vue'
export default {
    name: 'Container',
    props: ['inputText'],

    components: {
        VideoCard
    },
    data() {
        return {
            arrayList: [],
            filteredList:[],
        }
    },

    methods:{
        getList(){
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=ce4bf3c43722932619dd2d67366a9e66&query=rick`)
                .then(res =>{
                    console.log(res.data.results)
                    this.arrayList = res.data.results //array di oggetti (ogni oggetto un film)
                })
        },
        getListUser(){
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=ce4bf3c43722932619dd2d67366a9e66&query='+ this.inputText)
                .then(res =>{
                    console.log(res.data.results)
                    // this.arrayList = res.data.results
                    return res.data.results
                })
        },
    },
    computed: {
        getFilteredList(){
            if(this.inputText == ''){
                return this.arrayList
            }else{
                let filteredArray = this.getListUser();

                return filteredArray;
            }
            
        }
    },
    created() {
        this.getList()
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
        text-align: center;


    }
}
</style>