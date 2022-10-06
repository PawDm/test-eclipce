<template>
  <input
    class="my-search-input"
    :value="modelValue"
    type="search"
    placeholder="Поиск"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      required: false,
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped>
input.my-search-input[type="search"]
  display block
  padding 0px
  padding-left 26px
  padding-bottom 5px
  width: 180px
  height 30px
  border none
  border-bottom 1px solid grey
  background-color: white
  background-image: url('../../assets/icons/search.svg')
  background-position: 0 0
  background-repeat: no-repeat
  font-size 15px
  &::placeholder
    font-style italic
    font-size 15px
  &:focus
    outline: none
    border-bottom 1px solid #2c3e50
</style>
