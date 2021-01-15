<template lang="pug">
  main
    NavComponent
    HeaderComponent
    SynopsisComponent
    TeamComponent
    CastComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'
import SynopsisComponent from './components/SynopsisComponent.vue'
import TeamComponent from './components/TeamComponent.vue'
import CastComponent from './components/CastComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    SynopsisComponent,
    TeamComponent,
    CastComponent
  }
}
</script>

<style lang="scss">

</style>
