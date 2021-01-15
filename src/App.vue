<template lang="pug">
  main
    NavComponent
    HeaderComponent
    SynopsisComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'
import SynopsisComponent from './components/SynopsisComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    SynopsisComponent
  }
}
</script>

<style lang="scss">

</style>
