<template lang="pug">
  header.header-box.double
    .container
      .editorial
        p.pad.rye Chile, Diciembre de 1881
      .row
        .col-12.justify-content-center.align-content-center
          .main-title
            h1.hv-title
              span
                img.main-logo(svg-inline, src='@/assets/svg/or_left.svg', alt='Ornament', width='40px')
              span Hierro Viejo
              span
                img(svg-inline, src='@/assets/svg/or_right.svg', alt='Ornament', width='40px')
      .row
        .col-12.mb-5.mt-2.justify-content-center.align-content-center
          blockquote.text-center
            i "Cabalga a Petorca, manda un telegrama a Valparaíso. Notifica a Francia que ha muerto mi hermano Matías...."
            p.blockquote-footer Matuncho Cousiño

      .row
        .col-12.col-md-6.align-content-center
          img.border-dark.border.img-fluid(src="@/assets/images/valpo1880.jpg")
          small
            i Valparaíso (1880).
        .col-12.col-md-6
          .row.mt-5
            .col-12.justify-content-center.align-content-center.text-center
              img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
              .citation
                h2 "Hierro Viejo es un proyecto de innovación cultural cinematográfica"
              img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
          .row.mb-5
            .col-12
              .text-right
                a(v-b-toggle href="#arguments" @click.prevent) ¿Quieres saber más?
        .col-12.text-center.mb-4.border-top
          img.fluid(svg-inline, src='@/assets/svg/flourisch.svg', alt='Ornament', width='100px')
      b-collapse#arguments
        .row
          .col-12.col-lg-6
            .pad.text-center
              span.headline.rye.border-top.border-bottom Innovación
            .pad.mt-3.mb-3
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
              p Sed scelerisque sapien in augue egestas pretium. Aliquam ultricies ante ac dignissim consequat. Nunc vehicula ut justo vel ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at lorem a libero elementum tristique. Aenean tempor dolor nec sem volutpat varius. Duis blandit eleifend nisl, nec sagittis augue convallis venenatis. Vivamus nec augue a ex gravida rutrum at eget lacus. Curabitur blandit eros non dignissim lobortis.
          .col-12.col-lg-6.border-left
            .pad.text-center
              span.headline.rye.border-top.border-bottom Cultura
            .row.mt-3.mb-3
              .pad.col-12.text-justify
                img.float-right.img-responsive.bw.ml-3.mb-3(svg-inline, src='@/assets/svg/kultrun.svg', alt='Ornament', width='100px')
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
                p Sed scelerisque sapien in augue egestas pretium. Aliquam ultricies ante ac dignissim consequat. Nunc vehicula ut justo vel ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at lorem a libero elementum tristique. Aenean tempor dolor nec sem volutpat varius. Duis blandit eleifend nisl, nec sagittis augue convallis venenatis. Vivamus nec augue a ex gravida rutrum at eget lacus. Curabitur blandit eros non dignissim lobortis.
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
