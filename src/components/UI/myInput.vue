<template>
  <input
    class="my-input"
    :type="type"
    :value="value"
    :disabled="disabled"
    @input="$emit('inputValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    disabled: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    value: {
      required: true,
      type: Number,
    },
    type: {
      required: false,
      type: String,
      default: () => 'text',
    },
  },
  setup() {},
}
</script>

<style lang="stylus" scoped>
.my-input
  border none
  border-bottom 2px solid #e7e7e7
  height 20px
  width 50%
  background #fff
  font-size 1.3em
  padding-bottom .2em
  text-align: center
  &:focus
    transition ease .5s
    outline: none
    border-color: #2c3e50
  &:disabled
    color: #000

input::-webkit-outer-spin-button
input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0
input[type=number]
  -moz-appearance: textfield
</style>
