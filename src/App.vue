<template lang="pug">
  main.bg(:style="{ backgroundImage: 'url(' + require('@/assets/images/bg.jpg') + ')' }")
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
