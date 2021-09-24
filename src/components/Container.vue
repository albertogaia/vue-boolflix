<template>
  <div>
      <div class="container" >
          <ul>
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
        }
    },

    methods:{
    },
    computed: {
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