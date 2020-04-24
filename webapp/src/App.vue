<template lang='pug'>
  Calculator(id="app" :price='price')
</template>

<script lang="ts">
import Vue from 'vue';
import Calculator from './components/Calculator.vue';
import { PriceDetails } from './components/PriceDetails'
import qs from 'qs'
import map from 'lodash/fp/map'
import { ref, computed } from '@vue/composition-api';

function generate_data(query: string) {
  return map(x => new PriceDetails(x, { ref, computed }), qs.parse(query, { ignoreQueryPrefix: true }))
}

export default Vue.extend({
  name: 'App',
  components: {
    Calculator,
  },
  data: (): { price: PriceDetails[] } => ({
    price: [],
  }),
  beforeMount() {
    this.price = generate_data(window.location.search)
  }
});
</script>