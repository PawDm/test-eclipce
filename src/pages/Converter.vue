<template>
  <div class="converter">
    <div class="converter__row">
      <div class="converter__col valute-block">
        <valute-block :selectedValute="fromValute" />
      </div>
      <div class="converter__col exchange">
        <my-button :icon="'exchange'" @clicked="changeSelectedValutes" />
      </div>
      <div class="converter__col valute-block">
        <valute-block :selectedValute="toValute" disabledInput />
      </div>
    </div>
  </div>
</template>

<script>
import ValuteBlock from '../components/ValuteBlock.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import MyButton from '../components/UI/MyButton.vue'
export default {
  components: { ValuteBlock, MyButton },
  setup() {
    const store = useStore()
    const fromValute = computed(() => store.state.fromValute)
    const toValute = computed(() => store.state.toValute)
    const changeSelectedValutes = () => {
      store.commit('CHANGE_SELECTED_VALUTES')
    }

    return {
      fromValute,
      toValute,
      changeSelectedValutes,
    }
  },
}
</script>

<style lang="stylus" scoped>
.converter
  display flex
  flex-direction: column
  width 100%
  &__row
    display flex
    flex-direction: row
    justify-content: space-between
    width: 100%
  &__col
    display flex
    flex-direction: column
  .exchange
    margin 0 1em
    justify-content center
</style>
