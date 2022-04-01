<template >
  <div class="products">
    <div class="products-wrapper">
      <div class="product__list" >
        <div class="product" v-for="(product, idx) in products" :key="idx">
          <div class="product__head">
            <div class="product__image">
               <img :src="product.image" />
            </div>
          </div>
          <div class="product__body">
            <div class="product__content">
              <div class="product__title">
                {{ product.title }}
              </div>
              <div class="product__description">
                {{ product.description }}
              </div>
              <div class="product__qty">
                Stock: {{ product.qty }}
              </div>
            </div>
            <div class="product__group">
              <div class="product__price">
                $ {{ formatPrice(product.price) }}
              </div>
              <button class="main__button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../../../../data.json'
export default {
  data: () => ({
    products: data.products
  }),
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
</script>
<style lang="scss">
  
</style>