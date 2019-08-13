<template>
  <li
    class="glide__slide"
    :data-glide-index="index">
    <slot></slot>
  </li>
</template>

<script>


export default {
 

  name: 'VueGlideSlide',


  computed: {
    /**
     * Get index of current slide
     */
    index () {
    
      return this.$parent.$children.findIndex(slide => slide._uid === this._uid)
    }
  }
}
</script>

<style>

    /* IPAD PRO POTRAIT */
    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1366px) {

    }

    /*IPAD*/
    @media only screen and (min-device-width: 768px) 
    and (max-device-width: 1023px) {
    }


    /* MOBILES */
    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px) {
      .glide__slide {
        width: 40px;
        margin: 20px;
      }
    }

</style>