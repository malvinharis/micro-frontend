<template>
  <div class="main">
    <div class="main__wrapper">

      <!-- Product List Component -->
      <section class="main__section">
        <div class="main__section-head">
          <div class="main__title">
            Product List
          </div>
          <button class="main__button main__button-icon" @click="openCart()">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <div class="main__section-body">
          <Product />
        </div>
      </section>
  
      <!-- Cart Component from React Framework -->
      <div id="cartApp" />
    </div>
  </div>
</template>
<script>
import { Product } from './components'
import { mount } from "cartApp/CartApp";
export default {
  components:{
    Product
  },
  data() {
    return {
      isCartShow: false
    };
  },
  mounted() {
    this.mountCartApp()
  },
  methods: {
    mountCartApp(){
      mount(document.getElementById("cartApp"))
      console.log(mount)
    },
    openCart(){
      this.isCartShow != this.isCartShow;
      if(this.isCartShow){
        this.mountCartApp()
      }
    }
  },
};
</script>
