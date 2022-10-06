<template>
  <div class="currency-sheet">
    <div class="currency-sheet__col">
      <div class="currency-sheet__search">
        <my-search-input v-model="searchValue" />
      </div>
      <TransitionGroup tag="ul" name="fade" class="currency-sheet__valutes">
        <valute-item
          v-for="valute in filtredValutes"
          :key="valute.id"
          :valute="valute"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ValuteItem from '../components/ValuteItem.vue'
import MySearchInput from '../components/UI/MySearchInput.vue'
export default {
  components: { ValuteItem, MySearchInput },
  setup() {
    const store = useStore()
    const valutes = computed(() => store.state.valutes)
    const filtredValutes = computed(() => {
      return valutes.value.filter((valute) => {
        return (
          valute.NumCode.includes(searchValue.value) ||
          valute.Name.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      })
    })

    const searchValue = ref('')
    return {
      valutes,
      searchValue,
      filtredValutes,
    }
  },
}
</script>

<style lang="stylus" scoped>
.currency-sheet
  &__col
    display flex
    flex-direction: column
  &__search
    display flex
    flex-direction: row
  &__valutes
    list-style: none
    padding-left 0

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-active {
  transition all .7s ease
}
</style>
