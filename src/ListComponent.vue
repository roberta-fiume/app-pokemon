<template>
    <div id="app">
         <vue-glide class="demo" :bullet="true" ref="pokemons">
                <vue-glide-slide v-for="(pokemon, index) in infoPokemonsProp" >
                      <pokemon-component :pokemonName="pokemon.name" :pokemon="pokemon" :componentIndex="index"></pokemon-component> 
                </vue-glide-slide>
                <template slot="control">
                    <button data-glide-dir="<" class="controls"> < </button>
                    <button data-glide-dir=">" class="controls"> > </button>
                </template> 
                <div data-glide-el="controls[nav]">
                    <button data-glide-dir="=0"></button>
                    <button data-glide-dir="=1"></button>
                    <button data-glide-dir="=2"></button>
                    <button data-glide-dir="=3"></button>
                    <button data-glide-dir="=4"></button>
                    <button data-glide-dir="=5">C</button>
                    <button data-glide-dir="=6"></button>
                    <button data-glide-dir="=7"></button>
                    <button data-glide-dir="=8"></button>
                    <button data-glide-dir="=9"></button>
                  </div>
        </vue-glide> 
    </div>
</template> 

<script> 


    import PokemonComponent from "./PokemonComponent.vue"
    import VueGlide from './components/Glide'
    import VueGlideSlide from './components/GlideSlide'

    export default {
        props: ['infoPokemonsProp'],  
        components: {
        PokemonComponent,
            [VueGlide.name]: VueGlide,
            [VueGlideSlide.name]: VueGlideSlide,
        
        },

        created() {
            let names = this.capitalizeAllPokemonNames(this.infoPokemonsProp);
            for (var i = 0; i < this.infoPokemonsProp.length; i++) {
                this.infoPokemonsProp[i].name = names[i];
        }

        },

        methods: {
            capitalizeAllPokemonNames(infoPokemonsProp) {
                let names = [];
            for (var i = 0; i < infoPokemonsProp.length; i++) {
                names.push(this.capitalizeFirstLetter(infoPokemonsProp[i].name));
            }

            return names
        },

        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }    
}

    
  
</script>
<style lang="scss">


        #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: 60px;

        .demo {
            .glide {
            &__slide {
                display: flex;
                // border: 2px solid #b2fef7;
                // width: 200px;
                // height: 300px;
                width: 550px;
                height: 450px;
                align-items: center;
                justify-content: center;
                color: #aaa;
                font-size: 36px;
                font-weight: 600;
                border-radius: 5px;
                transition: all .3s;
                opacity: .3;
                &--active {
                border: none;
                color: #fff;
                opacity: 1;
                //  background: linear-gradient(-45deg,#8cf3e577,#0d4350);
                //   background: linear-gradient(-45deg,#ed145b,#7b31f4);
                //   background-color: #80cbc4;
                }
                }
            }
        }

        .controls {
            font-size: 30px;
            position: absolute;
            border: 0;
            outline: 0;
            padding: 10px;
            border-radius: 3px;
            background-color: #4f9a94;
            color: #000000;
            cursor: pointer;
            width: 70px;
            height: 70px;
            margin: 30px;
        }

        button[data-glide-dir="<"] {
            left: 5px;
        }

        button[data-glide-dir=">"] {
            right: 5px;
        }

        .glide__bullet {
            background-color: #4f9a94;
            border-style: none;
            color: inherit;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: 10px;
        }

        .glide__bullets {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100px;
        // background-color: yellow;
        margin-top: 30px;
        }
    


    /* IPAD PRO POTRAIT */
    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1366px) {

    }

    /*IPAD*/
    @media only screen and (min-device-width: 768px) 
    and (max-device-width: 1023px) {

        .glide__bullet {
            width: 7px;
            height: 7px;
        }

        .controls {
            font-size: 20px;
            position: absolute;
            border: 0;
            outline: 0;
            padding: 10px;
            border-radius: 3px;
            background-color: #4f9a94;
            color: #000000;
            cursor: pointer;
            width: 50px;
            height: 50px;
            margin: 20px;
        }

        .demo {
            .glide {
            &__slide {
                display: flex;
                // border: 2px solid #b2fef7;
                // width: 200px;
                // height: 300px;
                width: 550px;
                height: 450px;
                align-items: center;
                justify-content: center;
                color: #aaa;
                font-size: 36px;
                font-weight: 600;
                border-radius: 5px;
                transition: all .3s;
                opacity: 0.1;
                &--active {
                border: none;
                color: #fff;
                opacity: 1;
                //  background: linear-gradient(-45deg,#8cf3e577,#0d4350);
                //   background: linear-gradient(-45deg,#ed145b,#7b31f4);
                //   background-color: #80cbc4;
                }
                }
            }
        }
         
       
    }


    /* MOBILES */
    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px) {
     
        //  .glide {
        //     &__slide {
        //         opacity: 0.7;
        //     } 
         
        // }


         .demo {
            .glide {
            &__slide {
                display: flex;
                // border: 2px solid #b2fef7;
                // width: 200px;
                // height: 300px;
                width: 550px;
                height: 450px;
                align-items: center;
                justify-content: center;
                color: #aaa;
                font-size: 36px;
                font-weight: 600;
                border-radius: 5px;
                transition: all .3s;
                opacity: 0.1;
                &--active {
                border: none;
                color: #fff;
                opacity: 1;
                //  background: linear-gradient(-45deg,#8cf3e577,#0d4350);
                //   background: linear-gradient(-45deg,#ed145b,#7b31f4);
                //   background-color: #80cbc4;
                }
                }
            }
        }
    }

 


}

</style>


