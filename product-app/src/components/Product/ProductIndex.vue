<template >
  <div class="products">
    <div class="products-wrapper">
      <div class="product__list" >
        <div v-for="(product, idx) in products" :key="idx" :class="product.stock > 0 ? 'product' : 'product product__out-of-stock'">
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
                {{ product.stock > 0 ? `Stock: ${product.stock}` : `Out of Stock` }}
              </div>
            </div>
            <div class="product__group">
              <div class="product__price">
                $ {{ formatPrice(product.price) }}
              </div>
              <button class="main__button" @click="handleAddToCart(product)">
                {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
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
  mounted () {
    window.addEventListener('message', this.receiveMessage)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.receiveMessage)
  },
  methods: {
    receiveMessage(v){
      let data = v.data
      if(data.removeProduct){  
        this.products.map( item => {
          const check = item.id === data.removeProduct.id
          if(check){
            item.stock = item.stock + data.removeProduct.qty
          }
          return item
        })
      }
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    handleAddToCart(v) {
				let data = JSON.parse(JSON.stringify(v));
        let qty = [v].length
        this.products.forEach(item => {
            if(item.title === v.title) {
              if(qty <= item.stock){
                item.stock = item.stock - qty
				        window.parent.postMessage({"product": data}, 'http://localhost:8080/');
              }
            }
        })
		}
  },
}
</script>
<style lang="scss">
  
</style>