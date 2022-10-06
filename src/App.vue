<template>
  <div class="container">
    <tab-nav
      :tabs="tabs"
      :selected="selectedTab"
      @selected="selectedTab = $event"
    />
    <currency-sheet v-if="selectedTab == 'Список валют'" />
    <converter v-if="selectedTab == 'Конвертер'" />
  </div>
</template>

<script>
import TabNav from './components/TabNav.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import CurrencySheet from './pages/CurrencySheet.vue'
import Converter from './pages/Converter.vue'
export default {
  components: {
    TabNav,
    CurrencySheet,
    Converter,
  },
  setup() {
    const store = useStore()
    const tabs = ref(['Список валют', 'Конвертер'])
    const selectedTab = ref(tabs.value[0])

    onMounted(() => {
      store.dispatch('GET_VALUTE')
    })

    return {
      tabs,
      selectedTab,
    }
  },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
.container
  width: 960px
  margin 10px auto
</style>
