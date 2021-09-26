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
            var audio = new Audio(require('@/assets/sound/sound_effect.mp3'));
            console.log(audio)
            audio.play();
        }   
    },

    created() {
        console.log(this.playSound)
        this.playSound
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/singleCard.scss';
   
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
        animation: enter 3s linear;

    }

    @keyframes enter {
      from{
      }
      to{
        font-size: 10vw;
      }
    }
  }

</style>