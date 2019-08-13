<template>
    <div>
        <v-flex xs12>
            <v-card color="#212121" class="white--text">
                    <v-card-title class="justify-center" >
                        <div>
                            <v-card-text class="v-card_text">
                            <h2 class="display-2 font-weight-medium white--text mt-4"><v-icon left large color="#4f9b94">remove_red_eye</v-icon>WATCH THEM ALL</h2>
                            </v-card-text>
                            <div class="body-2 ma-4" id="pokemonTitle">
                                <span class="display-1 font-weight-light white--text text--lighten-2"> Name:</span>
                            <span class="display-1 font-weight-bold white--text text--lighten-2 ml-2">{{pokemonName}}</span>
                            </div>
                            <v-flex>
                                <video flex  class="shadow" width="700px" height="500px" controls :src="singleVideo"></video>
                            </v-flex>

                            <v-card-actions>
                                <v-btn large @click="goToPreviousPokemon" v-if="previousButton" color="#4f9b94" class="#000000--text">PREVIOUS</v-btn>
                                <v-btn large  @click="goToNextPokemon" v-if="nextButton" color="#4f9b94" class="#000000--text">NEXT</v-btn>
                            </v-card-actions>
                        </div>

                   
                    </v-card-title>
                
            </v-card>
            
        </v-flex>
    </div>

 
 
</template>

<script> 
import firebase from 'firebase/app'
import db from '@/fb'

    export default {

        watch: {
         
            urlsCollection() {
                let pokemonsUrls = this.orderUrls();  
                this.singleVideo = pokemonsUrls[this.currentVideoIndex];
            } 
        },
        
     
        mounted() {
            this.currentPokemonIndex = 0;
            this.pokemonName = this.infoSinglePokemonProp[this.currentPokemonIndex].name;
            this.infoSinglePokemonProp;
            this.currentVideoIndex = 0;
            this.urlsCollection = this.getVideoCollection(); 
        },
        
       props: ['infoSinglePokemonProp'],

       
        data() {
            return {
                currentPokemonIndex: "",
                pokemonName: "",
                previousButton: false,
                nextButton: true,
                singleVideo: "",
                currentVideoIndex: "",
                docsVideos: [],
                urlsCollection: [],
                pokemons: ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise",
                "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "rattata", "raticate" ] 
            }
        },

        methods: {
         
            goToNextPokemon() {
                this.currentPokemonIndex++;
                this.previousButton = true;
                let pokemonName  = this.infoSinglePokemonProp[this.currentPokemonIndex].name;
                this.pokemonName = pokemonName;
                this.goToNextVideo();
                    if (this.pokemonName === "raticate") {
                        this.nextButton = false;
                    }
                return this.pokemonName
            },

            goToPreviousPokemon(){
                this.currentPokemonIndex--; 
                let pokemonName = this.infoSinglePokemonProp[this.currentPokemonIndex].name;
                this.pokemonName = pokemonName;
                this.goToPreviousVideo();
                    if (this.pokemonName === "bulbasaur") {
                        this.previousButton = false;
                    }
                this.nextButton = true;
            },

            getVideoCollection() {
                db.collection('pokemons').get().then((response) => {
                for (var i=0; i < response.docs.length; i++) {
                    let urls = response.docs[i]._document.data.internalValue.root.value.internalValue;
                    this.docsVideos.push(urls);
                }
                    this.urlsCollection = this.docsVideos
                });

                return this.urlsCollection
            },

            orderUrls() {
                let bulbasaur = this.urlsCollection[0].replace("charmander", "bulbasaur");
                let ivysaur = this.urlsCollection[1].replace("beedrill", "ivysaur");
                let venusaur = this.urlsCollection[2].replace("blastoise", "venusaur");
                let charmander = this.urlsCollection[3].replace("bulbasaur", "charmander");
                let charmeleon = this.urlsCollection[4].replace("butterfree", "charmeleon");
                let charizard = this.urlsCollection[5].replace("caterpie", "charizard");
                let squirtle = this.urlsCollection[6].replace("charizard", "squirtle");
                let wartortle = this.urlsCollection[7].replace("charmeleon", "wartortle");
                let blastoise = this.urlsCollection[8].replace("ivysaur", "blastoise");
                let caterpie = this.urlsCollection[9].replace("kakuna", "caterpie");
                let metapod = this.urlsCollection[10].replace("metapod", "metapod");
                let butterfree = this.urlsCollection[11].replace("pidgeot", "butterfree");
                let weedle = this.urlsCollection[12].replace("pidgeotto", "weedle");
                let kakuna = this.urlsCollection[13].replace("pidgey", "kakuna");
                let beedrill = this.urlsCollection[14].replace("raticate", "beedrill");
                let pidgey = this.urlsCollection[15].replace("rattata","pidgey");
                let pidgeotto = this.urlsCollection[16].replace("squirtle","pidgeotto");
                let pidgeot = this.urlsCollection[17].replace("venusaur","pidgeot");
                let rattata = this.urlsCollection[18].replace("wartortle","rattata");
                let raticate = this.urlsCollection[19].replace("weedle","raticate");
                let pokemonsUrls = [];
                pokemonsUrls.push(bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard,
                squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey,
                pidgeotto, pidgeot, rattata, raticate);

                return pokemonsUrls;
            },

            
            goToNextVideo() {
                this.currentVideoIndex++;
                let pokemonsUrls = this.orderUrls();  
                let singleVideo = pokemonsUrls[this.currentVideoIndex];
                this.singleVideo = singleVideo; 
            },

            goToPreviousVideo(){
                this.currentVideoIndex--; 
                let pokemonsUrls = this.orderUrls();  
                let singleVideo = pokemonsUrls[this.currentVideoIndex];
                this.singleVideo = singleVideo; 
            }
        }
  
    }
</script>

<style>

    @import url(http://fonts.googleapis.com/css?family=Open+Sans:800);

    #div-pokemons {
        display: none;
    }

    #pokemonTitle {
        display: flex !important;
        flex-direction: row !important;
        align-items: center;
    }

    .v-card_text {
        display: flex;
        flex-direction: column;
        width: 700px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @keyframes shadow-pulse
    {
        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
        }
        100% {
            box-shadow: 0 0 0 50px rgba(0, 0, 0, 0);
        }
    }
    .v-btn:hover {
    background-color: #80ccc4;
    }

    .v-btn__content:hover {
        color:#000000;
        animation: shadow-pulse 1s 1;   
    }

    .shadow:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    }

</style>
