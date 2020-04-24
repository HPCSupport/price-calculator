import { ref , computed, Ref} from '@vue/composition-api';
type DI = {ref: typeof ref, computed: typeof computed}

class PriceData {
  readonly qty: Ref<number>
  readonly multiplier: Ref<number>
  readonly base: Ref<number>
  readonly total: Ref<number>
  constructor(opts: { base: number | string }, di: DI) {
    this.base = di.ref(+opts.base)
    this.qty = di.ref(0)
    this.multiplier = di.ref(0)
    this.total = di.computed(() => this.qty.value * this.multiplier.value * this.base.value)
  }
}

class NameData {
  readonly title: Ref<string>
  readonly qty: Ref<string>
  readonly multiplier: Ref<string>
  constructor(opts: { [i in 'title' | 'qty' | 'multiplier']: string }, di: DI) {
    this.title = di.ref(opts.title)
    this.qty = di.ref(opts.qty)
    this.multiplier = di.ref(opts.multiplier)
  }
}

export class PriceDetails {
  readonly name: NameData
  readonly price: PriceData
  constructor(opts: { [i in 'title' | 'qty' | 'multiplier' | 'base']: string }, di: DI) {
    this.name = new NameData(opts, di)
    this.price = new PriceData(opts, di)
  }
}