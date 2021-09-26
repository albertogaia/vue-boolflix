<template>
  <div class="header">
      <div class="container">
            <div class="logo-text">
                <a href="/"><h2>BoolFlix</h2></a>
            </div>
            <div class="search-container">
                <input v-on:keyup.enter="sendResult" type="text" v-model="inputText" placeholder="Cerca un titolo">
                <button @click.prevent="sendResult">Cerca</button>
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
        sendResult(){
            this.$emit('userSearch', this.inputText);
            this.inputText = '';
        }
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

        .logo-text{
            padding-left: 15px;
        }
        .search-container{
            padding-right: 15px;
        }
        a{
            text-decoration: none;
            cursor: pointer;
        }

        .search-container{
            input, button{
                height: 35px;
                padding: 0 15px;
            }

            button{
                background: $primary;
                border: none;
                cursor: pointer;
            }

            input:focus{
                outline: none;
            }
        }
    }

    .logo-text{
        h2{
            font-size: 2em;
            font-weight: 900;
            color: $primary;
        }
    }
    
}


</style>>
