<template lang="pug">
  main
    NavComponent
    HeaderComponent
    SynopsisComponent
    TeamComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'
import SynopsisComponent from './components/SynopsisComponent.vue'
import TeamComponent from './components/TeamComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    SynopsisComponent,
    TeamComponent
  }
}
</script>

<style lang="scss">

</style>
