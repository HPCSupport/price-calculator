<template lang='pug'>
  div(data-calculator class='p-4')
    div(class='flex flex-row pb-5 w-full')
      p(class='text-3xl text-gray-600') Price is estimated to be
      p(class='text-3xl text-gray-800 pl-4') {{ total }}
    div(class='flex flex-row flex-wrap')
      div(class='input-area' v-for='d, i in price' :key='i')
        p(class='input-header') {{ d.name.title.value }}
        PairData(
          :h1='d.name.qty.value'
          :h2='d.name.multiplier.value'
          :price='d.price.base.value'
          :d1.sync='d.price.qty.value'
          :v1='is_positive_integer'
          :d2.sync='d.price.multiplier.value'
          :v2='is_positive_integer'
        )
</template>

<script lang='ts'>
import PairData from './PairData.vue';
import { defineComponent, ref, computed } from '@vue/composition-api';
import { to_currency } from '@asset-vector/currency';
import map from 'lodash/fp/map'
import sum from 'lodash/fp/sum'
import compose from 'lodash/fp/compose'
import { PriceDetails } from './PriceDetails'
import { mul, to_precise, from_precise } from '@asset-vector/precise-number';

function is_positive_integer(x: string): number | null {
  if (!isFinite(+x)) return null;
  const int = Math.round(+x);
  if (int < 0) return null;
  return int;
};

export const component = defineComponent<{
  price: PriceDetails[]
}>({
  components: {
    PairData
  },
  props: {
    price: {}
  },
  setup(props) {
    // const calculator = generate_data(window.location.search)

    const calculate_cost = () =>
      compose(
        to_currency,
        sum,
        map(from_precise),
        map(({ price: { qty, multiplier, base } }: PriceDetails) => compose(
          mul(qty.value),
          mul(multiplier.value)
        )(base.value))
      )(props.price)

    const total = computed(calculate_cost);
    return {
      // price,
      total,
      is_positive_integer,
    };
  }
});
export default component;
</script>

<style scoped>
.input-area {
  @apply px-6 py-4 border rounded m-3 relative;
  width: 18rem;
}

.input-header {
  @apply text-xl absolute -top-4 left-2 px-6 text-right bg-white border rounded-full;
}

.input-area:nth-child(7n + 1) {
  @apply border-teal-400;
}
.input-area:nth-child(7n + 1) > .input-header {
  @apply border-teal-400;
}

.input-area:nth-child(7n + 2) {
  @apply border-purple-600;
}
.input-area:nth-child(7n + 2) > .input-header {
  @apply border-purple-600;
}

.input-area:nth-child(7n + 3) {
  @apply border-yellow-600;
}
.input-area:nth-child(7n + 3) > .input-header {
  @apply border-yellow-600;
}

.input-area:nth-child(7n + 4) {
  @apply border-green-600;
}
.input-area:nth-child(7n + 4) > .input-header {
  @apply border-green-600;
}

.input-area:nth-child(7n + 5) {
  @apply border-blue-600;
}
.input-area:nth-child(7n + 5) > .input-header {
  @apply border-blue-600;
}

.input-area:nth-child(7n + 6) {
  @apply border-orange-600;
}
.input-area:nth-child(7n + 6) > .input-header {
  @apply border-orange-600;
}

.input-area:nth-child(7n + 7) {
  @apply border-indigo-600;
}
.input-area:nth-child(7n + 7) > .input-header {
  @apply border-indigo-600;
}
</style>