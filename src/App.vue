<template lang="pug">
  main.bg.texture-background
    .blood
      img(svg-inline, src='@/assets/images/blood.png', alt='splatter')
    NavComponent
    HeaderComponent
    SynopsisComponent
    TeamComponent
    RefComponent
    //- CastComponent
    //- FooterComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'
import SynopsisComponent from './components/SynopsisComponent.vue'
import TeamComponent from './components/TeamComponent.vue'
import RefComponent from './components/RefComponent.vue'
// import CastComponent from './components/CastComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    SynopsisComponent,
    TeamComponent,
    RefComponent
    // CastComponent,
    // FooterComponent
  }
}
</script>

<style lang="scss">

</style>
