<template lang='pug'>
  div(data-calculator class='p-4')
    div(class='flex flex-row pb-5 w-full')
      p(class='text-3xl text-gray-600') Price is estimated to be
      p(class='text-3xl text-gray-800 pl-4') {{ total }}
    div(class='flex flex-row flex-wrap')
      div(class='input-area border-teal-400')
        p(class='input-header border-teal-400') CPU
        PairData(
          h1='CPUs'
          h2='Hours'
          :price='cpu_price'
          :d1.sync='cpu_qty'
          :v1='is_positive_integer'
          :d2.sync='cpu_hours'
          :v2='is_positive_integer'
        )
      div(class='input-area border-purple-600')
        p(class='input-header border-purple-600') GPU
        PairData(
          h1='GPUs'
          h2='Hours'
          :price='gpu_price'
          :d1.sync='gpu_qty'
          :v1='is_positive_integer'
          :d2.sync='gpu_hours'
          :v2='is_positive_integer'
        )
      div(class='input-area border-yellow-600')
        p(class='input-header border-yellow-600') Storage
        PairData(
          h1='TBs'
          h2='Years'
          :price='storage_price'
          :d1.sync='storage_tb'
          :v1='is_positive_integer'
          :d2.sync='storage_year'
          :v2='is_positive_integer'
        )
</template>

<script lang='ts'>
import PairData from './PairData.vue';
import { createComponent, ref, computed } from '@vue/composition-api';
import { to_currency } from '@asset-vector/currency';
import { parse as parse_query_string } from 'query-string';
import {
  mul,
  add,
  to_precise,
  from_precise
} from '@asset-vector/precise-number';
import { compose } from 'lodash/fp';

export const component = createComponent({
  components: {
    PairData
  },
  setup() {
    const is_positive_integer = (x: string): number | null => {
      if (!isFinite(+x)) return null;
      const int = Math.round(+x);
      if (int < 0) return null;
      return int;
    };

    const cpu_qty = ref(0);
    const gpu_qty = ref(0);
    const storage_tb = ref(0);
    const cpu_hours = ref(0);
    const gpu_hours = ref(0);
    const storage_year = ref(0);

    const query: {
      [i in 'cpu' | 'gpu' | 'storage']?: string;
    } = parse_query_string(location.search);
    const cpu_price = ref(+(query.cpu ?? 1));
    const gpu_price = ref(+(query.gpu ?? 1));
    const storage_price = ref(+(query.storage ?? 1));

    const calculate_cost = () => {
      const cpu_cost = compose(
        mul(cpu_qty.value),
        mul(cpu_hours.value)
      )(cpu_price.value);
      const gpu_cost = compose(
        mul(gpu_qty.value),
        mul(gpu_hours.value)
      )(gpu_price.value);
      const storage_cost = compose(
        mul(storage_tb.value),
        mul(storage_year.value)
      )(storage_price.value);
      return compose(
        to_currency,
        from_precise,
        add(cpu_cost),
        add(gpu_cost)
      )(storage_cost);
    };

    const total = computed(calculate_cost);
    return {
      cpu_qty,
      gpu_qty,
      storage_tb,
      cpu_hours,
      gpu_hours,
      storage_year,
      is_positive_integer,
      total,
      cpu_price,
      gpu_price,
      storage_price
    };
  }
});
export default component;
</script>

<style>
.input-area {
  @apply px-6 py-4 border rounded m-3 relative;
  width: 18rem;
}

.input-header {
  @apply text-xl absolute -top-4 left-2 px-6 text-right bg-white border rounded-full;
}
</style>