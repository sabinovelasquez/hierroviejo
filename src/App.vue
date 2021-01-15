<template lang="pug">
  main
    NavComponent
    HeaderComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent
  }
}
</script>

<style lang="scss">

</style>
