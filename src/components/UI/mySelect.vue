<template>
  <div class="my-select">
    <p class="my-select__ttl" @click="optionsVisible = !optionsVisible">
      {{ selected.CharCode }}
    </p>
    <transition name="slide-fade">
      <div class="my-select__options" v-if="optionsVisible">
        <p
          v-for="option in options"
          @click="selectOption(option)"
          :key="option.Id"
        >
          {{ option.CharCode }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    options: {
      required: true,
      type: Array,
    },
    selected: {
      required: true,
      type: Object,
    },
  },
  setup(props, { emit }) {
    const optionsVisible = ref(false)

    const selectOption = (option) => {
      emit('select', option)
      optionsVisible.value = false
    }
    return {
      optionsVisible,
      selectOption,
    }
  },
}
</script>

<style lang="stylus" scoped>
.my-select
  position relative
  width 200px
  cursor pointer
  &__ttl
    border 1px solid #2c3e50
    border-radius: 5px
    padding .3em 0
    font-weight 600
    &:hover
      background-color #2c3e50
      color #fff
  &__options
    border 1px solid #2c3e50
    position absolute
    border-radius: 0 0 5px 5px
    top 44px
    right 0
    width 99%
    background #fff
    border-top none
    p
      margin 0
      border-top 1px solid #e7e7e7
      &:hover
        background-color #2c3e50
        color #fff
.slide-fade-enter-active
  transition: all 0.2s ease-out

.slide-fade-leave-active
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1)

.slide-fade-enter-from,
.slide-fade-leave-to
  transform: translateY(-20px)
  opacity: 0
</style>
