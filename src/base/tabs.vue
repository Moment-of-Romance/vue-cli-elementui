<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: []
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      msg: 'I am tabs component'
    }
  }
}
</script>

<style>

</style>