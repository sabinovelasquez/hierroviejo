<template lang="pug">
<<<<<<< HEAD
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
      .row.mb-4.align-items-center.text-center
        .col.pale
          img(src='@/assets/associates/ceac.png', height='80')
        .col.pale
          img(src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logotipo_de_Televisi%C3%B3n_Nacional_de_Chile.svg/1920px-Logotipo_de_Televisi%C3%B3n_Nacional_de_Chile.svg.png', height='30')
        .col.pale
          img(src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/1200px-Unreal_Engine_Logo.svg.png', height='70')
        .col.pale
          img(src='@/assets/associates/mgf.png', height='50')
        .col.pale
          img(src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzd9s2At6oByoJIHt2z02Iy-Pon50nWGkTA&usqp=CAU', height='70')
        .col.pale
          img(src='https://acc-chile.com/wp-content/uploads/2019/06/logo_acc_footer.png', height='70')
      b-collapse#arguments
        .row
          .col-12.col-lg-6
            .pad.text-center
              span.headline.rye.border-top.border-bottom Innovación
            .pad.mt-3.mb-3
=======
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
>>>>>>> cool-style
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
