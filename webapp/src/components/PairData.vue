<template lang='pug'>
div(data-pair-data class='flex flex-col')
  div(class='flex-input')
    p(class='pr-4 my-1 my-auto') {{ h1 }}:
    input(:class="[valid_d1, 'input']" v-model="data1")
  div(class='flex-input')
    p(class='pr-4 my-1 my-auto') {{ h2 }}:
    input(:class="[valid_d2, 'input']" v-model="data2")
  div(class='flex-input')
    p(class='pr-4 my-1') Subtotal:
    p {{ subtotal }}
</template>

<script lang='ts'>
import { defineComponent, computed, ref, watch } from "@vue/composition-api";
import { mul, to_precise, from_precise } from "@asset-vector/precise-number";
import { to_currency } from "@asset-vector/currency";
import { compose } from "lodash/fp";

type Props = {
  h1: string;
  h2: string;
  d1: number;
  d2: number;
  v1: (x: string | number) => number | null;
  v2: (x: string | number) => number | null;
  price: number;
};

export const component = defineComponent<Props>({
  props: {
    h1: { type: String, required: true },
    h2: { type: String, required: true },
    d1: { type: Number, required: true },
    d2: { type: Number, required: true },
    price: { type: Number, required: true },
    v1: { required: true },
    v2: { required: true }
  },
  setup(props, ctx) {
    const valid_d1 = ref("");
    const valid_d2 = ref("");

    const data1 = computed({
      get: () => props.d1,
      set: update => {
        const valid = props.v1(update);
        valid_d1.value = valid === null ? "error" : "";
        if (valid === null) return;
        ctx.emit("update:d1", valid);
      }
    });
    const data2 = computed({
      get: () => props.d2,
      set: update => {
        const valid = props.v2(update);
        valid_d2.value = valid === null ? "error" : "";
        if (valid === null) return;
        ctx.emit("update:d2", valid);
      }
    });

    const subtotal = computed(() =>
      compose(
        to_currency,
        from_precise,
        mul(props.d2),
        mul(props.d1)
      )(props.price)
    );

    return {
      data1,
      data2,
      subtotal,
      valid_d1,
      valid_d2
    };
  }
});

export default component;
</script>

<style>
input {
  width: 100%;
  text-align: right;
  padding-right: 0.5rem;
}
.spacer {
  text-align: center;
}

.flex-input {
  @apply flex flex-row justify-between
}

.input {
  @apply outline-none border-b-2 rounded my-1 border-gray-600 ml-4 w-20;
}
</style>