<template>
    <div id="loader">
        <p>Boolflix</p>
    </div>
</template>

<script>
export default {
    name: 'Loader',

    methods: {
        playSound () {
            var audio = new Audio(require(`../assets/sound/sound_effect.mp3`));
            console.log(audio)
            audio.play();
        }   
    },

    mounted() {
        console.log(this.playSound)
        this.playSound()
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
   
  #loader{
    background-color: #333;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primary;
    font-weight: 800;
    position: relative;

    p{
        font-size: 12vw;
        animation: enter 4s linear;

    }

    @keyframes enter {
      0%{
        background-color: transparent;
      }
      80%{
        font-size: 8vw;
        background-color: transparent;

      }
      100%{
        font-size: 300vw;
        background-color: $primary;
      }
    }
  }

</style>