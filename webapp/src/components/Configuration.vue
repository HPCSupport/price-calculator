<template lang='pug'>
  div(data-calculator class='p-4')
    Draggable(@end='update_indexes')
      transition-group(class='flex flex-wrap' ref='items')
        div(class='input-area dist-flex input-box' v-for='d in price' :key='d.id' :id='d.id')
          .inputs.dist-flex.h-full.py-2
            input.title(v-model='d.title' placeholder="Title of component (eg. Work Cost)")
            input.item(v-model='d.qty' placeholder="Item name (eg. Work)")
            input.units(v-model='d.multiplier' placeholder="Units (eg. Hours)")
            input.cost(v-model='d.base' :class="[valid[d.id]]" placeholder="Cost per unit (eg. 0.5)")
          button.btn.rem(class='w-full' @click='() => remove(d.id)') Remove
    button.btn.add.input-box(@click='insert') Add
    button.btn.go.input-box(@click='go') Go
</template>

<script lang='ts'>
import PairData from './PairData.vue';
import { defineComponent, ref, computed, Ref } from '@vue/composition-api';
import { to_currency } from '@asset-vector/currency';
import map from 'lodash/fp/map'
import fromPairs from 'lodash/fp/fromPairs'
import compose from 'lodash/fp/compose'
import { PriceDetails } from './PriceDetails'
// @ts-ignore
import Draggable from 'vuedraggable'
import qs from 'qs'

import {
  mul,
  add,
  to_precise,
  from_precise
} from '@asset-vector/precise-number';

function is_positive_number(x: string): string | null {
  if (!isFinite(+x)) return null;
  return x
};

export const component = defineComponent({
  components: {
    PairData,
    Draggable
  },
  setup() {

    const price: Ref<Array<{ [i in 'id' | 'title' | 'multiplier' | 'qty' | 'base']: string }>> = ref([])

    const insert = () => {
      price.value = [...price.value, { id: `${price.value.reduce((a, c) => Math.max(a, +c.id + 1), 0)}`, title: ``, multiplier: ``, qty: ``, base: `` }]
    }

    const remove = (i: string) => {
      price.value = price.value.filter(({id}) => id !== i)
    }

    const items = ref<Vue>(null)

    const update_indexes = () => {
      const indexes: string[] = []
      items.value!.$el.childNodes.forEach((x: any) => {
        if (price.value.find(y => y.id === x.id)) {
          indexes.push(x.id)
        }
      })

      price.value = map(x => price.value.find(y => y.id === x)!, indexes)
    }

    const valid = computed(() =>
      compose(
        fromPairs,
        map(({ id, base }: { id: string, base: string }) => [id, is_positive_number(base) === null ? `error` : ``])
      )(price.value)
    )

    const go = () => {
      window.location.search = qs.stringify(price.value.map(({id, ...x}) =>x))
    }

    return {
      price,
      insert,
      remove,
      valid,
      update_indexes,
      items,
      go,
    };
  }
});
export default component;
</script>

<style scoped>

.dist-flex {
  @apply flex flex-col justify-between;
}

.input-box {
  @apply px-6 py-4 m-3 border rounded relative;
  width: 18rem;
  height: 18rem;
}

.inputs > input {
  @apply outline-none bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-left;
}

.btn {
  @apply outline-none bg-transparent font-semibold py-2 px-4 border rounded font-sans
}
.btn:hover {
  @apply text-white border-transparent
}

.add {
  @apply text-green-700 border-green-500
}
.add:hover {
  @apply bg-green-500 
}

.go {
  @apply text-blue-700 border-blue-500
}
.go:hover {
  @apply bg-blue-500 
}

.rem {
  @apply text-red-700 border-red-500
}
.rem:hover {
  @apply bg-red-500 
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