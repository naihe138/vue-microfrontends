<template>
  <div class="ninput">
    <div>我只公共input组件</div>
    <input type="text" ref="input" @input="change" />
  </div>
</template>

<script>
export default {
  name: 'NInput',
  props: {
    value: String
  },
  data() {
    return {}
  },
  computed: {
    naiveValue() {
      return this.value
    }
  },
  methods: {
    change(event) {
      if (event.target.value !== this.naiveValue) {
        this.$emit('input', event.target.value)
        this.$nextTick(this.setValue)
      }
    },
    setValue() {
      this.$refs.input.value = this.naiveValue
    }
  },
}
</script>
