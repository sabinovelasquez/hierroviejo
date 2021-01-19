<template lang="pug">
  div.border-bottom.border-dark
    b-navbar(toggleable='lg')
      b-navbar-brand.hv-navbar-title(href='#') Hierro Viejo
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
        // Right aligned nav items
        b-navbar-nav.ml-auto
          b-nav-item-dropdown(text='Idioma' right='')
            b-dropdown-item(href='#') EN
            b-dropdown-item(href='#') ES
            b-dropdown-item(href='#') FA
</template>

<script>
export default {
  name: 'NavComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
