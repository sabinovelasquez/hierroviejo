<template lang="pug">
  header.header-box.double
    .container
      .editorial
        p.pad.rye Chile, Diciembre de 1881
      .row
        .col-12.text-center
          b-img.seal.mx-auto.d-block(alt="Cousiño", fluid, :src="require('@/assets/images/seal.png')")
        .col-12.justify-content-center.align-content-center
          .main-title
            h1.title.upper.playfair
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
          img(src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzd9s2At6oByoJIHt2z02Iy-Pon50nWGkTA&usqp=CAU', height='70')
        .col.pale
          img(src='https://acc-chile.com/wp-content/uploads/2019/06/logo_acc_footer.png', height='70')
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
.title{
  font-size: 1.2em;
  font-weight: 900;
  @media(max-width: 768px) {
    font-size: .8em;
  }
}
.editorial{
  opacity: 0.7;
  position: absolute;
  margin: 50px 0;
  p{
    padding: 20px;
    border: double;
    @media(max-width: 768px) {
      padding: 8px;
    }
  }
  @media(max-width: 768px) {
    font-size: 10px;
    margin: 10px 0;
  }
}
.header-box{
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
}
.headline{
  font-size: 2em;
  padding: 5px 20px;
}
.bw{
  filter: grayscale(.8);
}
blockquote {
  border:none;
  margin-bottom:-30px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote h2 {
  font-size:2.5em;
  font-weight: 100;
}
blockquote h2:before {
  content: open-quote;
  font-size:1.8em;
}
blockquote h2:after {
  content: close-quote;
  font-size:1.8em;
}

.seal{
  opacity: .8;
  padding-top: 10px;
}
</style>
