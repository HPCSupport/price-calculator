<template lang='pug'>
  Configuration(id="app" v-if='config')
  Calculator(id="app" v-else :price='price')
</template>

<script lang="ts">
import Vue from 'vue';
import Calculator from './components/Calculator.vue';
import Configuration from './components/Configuration.vue';
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
    Configuration,
  },
  data: (): { price: PriceDetails[], config: boolean } => ({
    price: [],
    config: false
  }),
  beforeMount() {
    if (!(window.location.search)) {
      this.config = true
    }
    else {
      this.price = generate_data(window.location.search)
    }
  }
});
</script>