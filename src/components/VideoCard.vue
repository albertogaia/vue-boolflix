<template>
  <div class="single-card">
    <div class="card-info">
      <img
        v-if="item.poster_path != null"
        :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
        :alt="item.title ? item.title : item.name"
      />
      <img v-else src="https://i.imgur.com/3AO9BLH.jpg" alt="not found" />
    </div>
    <div class="info-text">
      <div class="item-info">
        Titolo
        <h3 class="item-title">{{ item.title ? item.title : item.name }}</h3>
      </div>
      <div class="item-info">
        Overview:
        <p class="item-overviw">{{ item.overview }}</p>
      </div>
      <div class="item-info">
        Anno di uscita:
        <p class="item-year">
          {{ item.release_date ? item.release_date : item.first_air_date }}
        </p>
      </div>
      <div class="item-info language">
        Lingua:
        <country-flag :country="myLang(item.original_language)" />
      </div>
      <div class="item-info">
        Cast:
        <Cast :id="item.id" />
      </div>
      <div class="item-info">
        Voto
        <fa
          icon="star"
          v-for="(i, u) in 5"
          :class="getStarsActive(item.vote_average, i)"
          :key="u"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import Cast from "./Cast.vue";

export default {
  components: {
    CountryFlag,
    Cast,
  },
  name: "VideoCard",
  maxStars: 5,

  props: ["item"],
  data() {
    return {};
  },
  methods: {
    myLang(lang) {
      if (lang == "en") return "gb";
      else if (lang == "ja") return "jp";
      return lang;
    },

    getStarsActive(vote, n) {
      vote = parseInt(vote);
      vote = Math.ceil(vote / 2);
      if (n <= vote) return "red";
      return "standard";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/singleCard.scss";
</style>