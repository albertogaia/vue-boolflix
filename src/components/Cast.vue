<template>
  <div>
    <span v-for="(person, index) in getCastMovie(id)" :key="index">
      <span v-if="index < 4">{{ person }}, </span>
      <span v-else>{{ person }}...</span>
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],

  data() {
    return {
      cast: [],
    };
  },
  methods: {
    getCastMovie(id) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            id +
            "/credits?api_key=ce4bf3c43722932619dd2d67366a9e66"
        )
        .then((res) => {
          let castArray = res.data.cast;
          console.log(res.data.cast);
          castArray.forEach((element) => {
            if (this.cast.length < 5) {
              console.log(element.name);
              this.cast.push(element.name);
            }
          });
        });
      return this.cast;
    },
  },

  created() {},
};
</script>

<style>
</style>