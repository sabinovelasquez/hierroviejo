<template lang="pug">
  div.border-bottom.border-dark
    b-navbar(toggleable='lg')
      b-navbar-brand(href='#') NavBar
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='#') Link
          b-nav-item(href='#' disabled='') Disabled
        // Right aligned nav items
        b-navbar-nav.ml-auto
          b-nav-item-dropdown(text='Lang' right='')
            b-dropdown-item(href='#') EN
            b-dropdown-item(href='#') ES
            b-dropdown-item(href='#') RU
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
