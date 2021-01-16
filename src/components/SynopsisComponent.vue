<template lang="pug">
  section.double.synopsis-box.mt-4
    .container
      .row
        .col-12.col-md-3.align-content-center.text-center.mb-3
          .n-img
            img.border-dark.border.img-fluid(src='@/assets/images/falcato.jpg' alt="Synopsis Image")
          small
            i Hechos biográficos de Pancho Falcato, del bravo maloqueador Marcos Saldías i de muchos otros presos célebres (1877).
        .col-12.col-md-9
          .row.text-justify
            .col-12.col-md-7.border-left.border-right
              h2.text-center.headline.mb-4
                span.rye.border-top.border-bottom Sinopsis
                //- span inopsis
              .pad
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
                P Sed scelerisque sapien in augue egestas pretium. Aliquam ultricies ante ac dignissim consequat. Nunc vehicula ut justo vel ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at lorem a libero elementum tristique. Aenean tempor dolor nec sem volutpat varius. Duis blandit eleifend nisl, nec sagittis augue convallis venenatis. Vivamus nec augue a ex gravida rutrum at eget lacus. Curabitur blandit eros non dignissim lobortis.
            .col-12.col-md-5
              .n-img.border-dark.border
                img.img-fluid(src='@/assets/images/brural.jpg' alt="Synopsis Image")
              small
                i Delincuentes, bandoleros y montoneros : violencia social en el espacio rural chileno (1850-1870).
              .pad.mt-3
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est.
        .col-12.text-center.mb-4.border-bottom
          img.img-fluid(svg-inline, src='@/assets/svg/flourisch.svg', alt='Ornament', width='100px')
      .row
        .col-12
          img.img-fluid(src='@/assets/images/francia1878.jpg', alt='Ornament')
</template>

<script>
export default {
  name: 'SynopsisComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.synopsis-box{
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  }
</style>
