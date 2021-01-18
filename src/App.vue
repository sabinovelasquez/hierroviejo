<template lang="pug">
  main.bg(:style="{ backgroundImage: 'url(' + require('@/assets/images/bg.jpg') + ')' }")
    .blood
      img(svg-inline, src='@/assets/images/blood.png', alt='splatter')
    NavComponent
    HeaderComponent
    SynopsisComponent
    TeamComponent
    //- CastComponent
    //- FooterComponent
</template>

<script>
import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent.vue'
import SynopsisComponent from './components/SynopsisComponent.vue'
import TeamComponent from './components/TeamComponent.vue'
// import CastComponent from './components/CastComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    SynopsisComponent,
    TeamComponent
    // CastComponent,
    // FooterComponent
  }
}
</script>

<style lang="scss">

</style>
