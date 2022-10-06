<template>
  <div class="tab-nav">
    <div
      class="tab-nav__item"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="setSelected(tab)"
      :class="tab != selected || 'active'"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      required: true,
      type: Array,
    },
    selected: {
      required: true,
      type: String,
    },
  },
  setup(props, { emit }) {
    const setSelected = (tab) => {
      emit('selected', tab)
    }
    return {
      setSelected,
    }
  },
}
</script>

<style lang="stylus" scoped>
.tab-nav
  display flex
  flex-direction row
  margin-bottom 20px
  &__item
    margin-right 2em
    cursor pointer
    opacity .7
  .active
    transition: all .2s ease-out
    border-bottom 2px solid #2c3e50
    opacity 1
</style>
