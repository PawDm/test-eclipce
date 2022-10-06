<template>
  <div class="valute-block">
    <span class="valute-block__ttl">{{ selectedValute.Name }}</span>
    <my-input
      :value="+result"
      :disabled="disabledInput"
      @inputValue="inputValue"
      :type="'number'"
    />
    <my-select
      :options="valutes"
      @select="setValute"
      :selected="selectedValute"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import mySelect from './UI/mySelect.vue'
import MyInput from './UI/myInput.vue'
export default {
  components: { mySelect, MyInput },
  props: {
    selectedValute: {
      required: true,
      type: Object,
    },
    disabledInput: {
      required: false,
      type: Boolean,
      default: () => false,
    },
  },
  setup(props) {
    const store = useStore()

    const valutes = computed(() => store.state.valutes)

    const qty = computed(() => store.state.qty)

    const result = computed(() => {
      return props.disabledInput ? store.getters.resultConverter : qty.value
    })

    const setValute = (valute) => {
      store.commit('SET_VALUTE', { valute, fromValute: !props.disabledInput })
    }

    const inputValue = (value) => {
      store.commit('SET_QTY', { qty: value })
    }

    return {
      valutes,
      qty,
      setValute,
      result,
      inputValue,
    }
  },
}
</script>

<style lang="stylus" scoped>
.valute-block
  display flex
  flex-direction column
  align-items center
  border 1px solid #2c3e50
  border-radius: 5px
  padding 1em
  width 400px
  &__ttl
    font-size 1.2em
    font-weight 600
    margin-bottom .5em
</style>
