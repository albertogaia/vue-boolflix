<template>
  <div>
      <div class="container">
          <VideoCard
            :arrayList="arrayList"/>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import VideoCard from './VideoCard.vue'
export default {
    name: 'Container',

    components: {
        VideoCard
    },
    data() {
        return {
            arrayList: [],
        }
    },

    methods:{
        getList(){
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=ce4bf3c43722932619dd2d67366a9e66&query=rick`)
                .then(res =>{
                    this.arrayList = res.data.results //array di oggetti (ogni oggetto un film)
                })
        }
    },

    created() {
        this.getList()
    },
}
</script>

<style>

</style>