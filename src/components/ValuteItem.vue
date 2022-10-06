<template>
  <li class="valute-item" key="">
    <div class="valute-item__container">
      <span class="growth" :class="growth"></span>
      <span class="code">{{ `${valute.NumCode} ${valute.CharCode}` }}</span>
      <span>{{ valute.Name }}</span>
    </div>
    <div class="valute-item__converter">
      <Transition tag="div" name="fade" class="converter-value" mode="out-in">
        <span :key="result" class="lbl">{{ result }}</span>
      </Transition>
      <div class="converter-control">
        <my-button
          @clicked="visibleOneRub = !visibleOneRub"
          :icon="'exchange'"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { computed, ref } from 'vue'
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },
  props: {
    valute: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const visibleOneRub = ref(false)

    const growth = computed(() => {
      return props.valute.Value > props.valute.Previous
        ? 'growth-up'
        : 'growth-down'
    })
    const oneRub = computed(() => {
      return (props.valute.Nominal / props.valute.Value).toFixed(3)
    })

    const result = computed(() => {
      return !visibleOneRub.value
        ? `${props.valute.Nominal} ${props.valute.CharCode} - ${props.valute.Value} RUB`
        : `1 RUB - ${oneRub.value} ${props.valute.CharCode}`
    })
    return {
      growth,
      oneRub,
      visibleOneRub,
      result,
    }
  },
}
</script>

<style lang="stylus" scoped>
.valute-item
  display flex
  flex-direction row
  justify-content: space-between
  padding .5em
  font-size 1.1em
  border 1px solid #000
  border-radius: 5px
  margin-bottom .5em
  &__container
    display flex
    .code
      font-weight 600
      margin 0 .5em
    .growth
      width: 0;
      height: 0;
      border-style: solid;
      margin-top 2px
      &-up
        border-width: 0 10px 18px 10px;
        border-color: transparent transparent #226935 transparent;
      &-down
        border-width: 18px 10px 0px 10px;
        border-color: #c42727 transparent transparent transparent;
  &__converter
    display flex
    flex-direction: row
    .converter
      &-value
        display flex
        flex-direction: column
        .lbl
          all 1s ease
      &-control
        margin-left 1em
.fade-leave-to
  opacity: 0;
  transform: translateY(15px)
.fade-leave-active
  transition all .3s ease

.fade-enter-active
  animation fade-in .3s ease

@keyframes fade-in {
  0% {
    opacity 0
    transform: translateY(-15px);
  }
  100% {
    opacity 1
    transform: translateY(0px);
  }
}
</style>
