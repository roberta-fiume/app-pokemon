<template>
    <div> 
        <v-card class="ma-5 card" color="grey darken-3" dark max-width="400px" max-height="500px" >
          
            <v-card width="380px">
                <v-layout class="300px" align-center justify-center><img :src="linksForImages" width="200px" height="200px" :class="{scaling:scaling}"/></v-layout >
            </v-card>
             <v-card-title class="v-card_title">
                <v-icon left small>create</v-icon>
                <span class="title font-weight-light">Name: </span><h3 class="title ml-2">{{pokemonName}}</h3>
                 <h3 class="title number">{{pokemonNumber}}</h3>
            </v-card-title>

            <v-card-title class="v-card_title" id="ability">
                <v-icon left small v-if="showIcon">assignment</v-icon>
                <span class="title font-weight-light" v-if="showAbilitySpan">Ability: </span><h3 class="title ml-2">{{ability}}</h3>
            </v-card-title>
             
            <v-card-actions class="v-card_actions">
                <v-list-tile class="grow">
                        <v-layout align-center justify-start class="v-list_title">
                            <v-btn icon>
                                <v-icon class="pa-0" small>star</v-icon>
                            </v-btn>
                            
                            <v-btn icon>
                                <v-icon small>thumb_up_alt</v-icon>
                            </v-btn>
                        
                        </v-layout>

                        <v-layout align-center justify-end>
                            <v-btn icon>
                                <v-icon small>favorite</v-icon>
                            </v-btn>
                        
                        <v-btn icon >
                            <v-icon small>share</v-icon>
                            </v-btn>
                            <span class="body-1 ml-1">SHARE</span>
                        </v-layout>
                </v-list-tile>
            </v-card-actions>

         
        </v-card>  

    </div>
</template>

<script>
import { EventBus } from '@/eventBus.js';


    export default {

        props: {
            pokemonName: String,
            pokemonUrl: String,
            pokemon: Object,
            componentIndex: Number
        },

        data() {
            return {
                pokemonNumber: "",
                ability: "",
                linksForImages: "",
                scaling: false,
                abilityClass: true,
                showIcon: false,
                showAbilitySpan: false 
            }
        },

        created() {
            let linkImages = this.getLinksForImages();
            if (this.componentIndex === 0) {
                 this.scaling = true;
            }
        },


          updated(){
              EventBus.$on('i-got-clicked', slideIndex => {
                 if (slideIndex === this.componentIndex)  {
                        this.scaling = true;
                        let pokemonNumber = this.getPokemonNumber();
                        let pokemonAbility = this.getPokemonAbility();
                        this.showIcon = true;
                        this.showAbilitySpan = true;
                        } else {
                        this.scaling = false; 
                        this.pokemonNumber = "";
                        this.ability = "",
                        this.abilityClass = true,
                        this.showIcon = false;
                        this.showAbilitySpan = false;
                    }
                });
            },
        
        
        watch: {
            linksForImages() {
                this.getImagesFromApi()
            }
        },

        methods: {
            getPokemonNumber() {
                const axios = require('axios');
                axios.get(this.pokemon.url)
                .then(response => (this.pokemonNumber = response.data.id));
            },

            getPokemonAbility() {
                const axios = require('axios');
                axios.get(this.pokemon.url)
                .then(response => this.ability = response.data.abilities[0].ability.name);
            },

            getLinksForImages() {
                const axios = require('axios');
                axios.get(this.pokemon.url)
                .then(response => (this.linksForImages = response.data.forms[0].url));
            
            },
            
            getImagesFromApi() {
                const axios = require('axios');
                    axios.get(this.linksForImages)
                    .then(response => (this.linksForImages = response.data.sprites.front_default))
                    .catch(function (error) {
                })
            },   
        }     
    }
 
</script>

<style lang="scss">

    #align-center {
      display: flex;
      align-items: center;
      justify-content: center; 
     
    }
    .title {
        font-size: 17px !important;
    }

    .v-list__tile {
        padding: 0px;
    }

    .v-card_title {
        margin-top: 10px;
        height: 35px;
    }

    #ability {
        margin-top: 0px;
    }

    .number {
        display: flex;
        margin-left: 125px;
    }

    .v-card_actions {
        height: 45px;
        
    }

    .card {
         border: 2px solid #b2fef7;
    }

   .layout {
    height: 300px;
    
   }

   .scaling {
       transition: transform 0.7s;
       transform: scale(1.7)
   }

   .abilityClass {
       display: none;
   }

</style>


