<template>
  <button class="my-button" @click="$emit('clicked')">
    <img
      class="my-button__img"
      v-if="icon"
      :src="require(`@/assets/icons/${icon}.png`)"
      :alt="icon"
    />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      required: false,
      type: String,
      default: '',
    },
  },
  setup() {},
}
</script>

<style lang="stylus" scoped>
.my-button
  border: 1px solid #4e4e4e
  border-radius: 15px
  padding .3em
  background-color #fff
  display flex
  flex-direction: row
  align-items: center
  cursor pointer
  &:hover
    filter drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
</style>
