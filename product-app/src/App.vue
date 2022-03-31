<template>
  <div class="main">
    <div class="main__wrapper">
      <!-- Product List Component -->
      <Product />
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
    Product, mount
  },
  data() {
    return {
    };
  },
  mounted() {
    mount(document.getElementById("cartApp"))
  },
  methods: {
  },
};
</script>
