<template lang="pug">
  header
    .hv-header
      h1.hv-title.hv-title-lines Hierro Viejo
      p.hv-title-lineclose Petorca, Chile, Diciembre de 1881

    .hv-main-call
      h2 Un proyecto de innovación cultural cinematográfica

    div
      img.fluid(svg-inline, src='@/assets/svg/flourisch.svg', alt='Ornament', width='100px')
      a(v-b-toggle href="#arguments" @click.prevent) ¿Quieres saber más?
      .row
        .col-12.col-lg-6
          .pad.text-center
            span.headline.rye.border-top.border-bottom Innovación
          .pad.mt-3.mb-3
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
        .col-12.col-lg-6.border-left
          .pad.text-center
            span.headline.rye.border-top.border-bottom Cultura
          .row.mt-3.mb-3
            .pad.col-12.text-justify
              img.float-right.img-responsive.bw.ml-3.mb-3(svg-inline, src='@/assets/svg/kultrun.svg', alt='Ornament', width='100px')
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
