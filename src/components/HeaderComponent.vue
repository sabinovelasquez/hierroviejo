<template lang="pug">
  header.header-box
    .container
      .row
        .col-12.text-center
          b-img.seal.mx-auto.d-block(alt="Cousiño", fluid, :src="require('@/assets/images/seal.png')")
        .col-12.d-flex.justify-content-center.align-content-center
          h1.display-4.main-title.upper.playfair
            span
              img.main-logo(svg-inline, src='@/assets/svg/or_left.svg', alt='Ornament', width='30px')
            span Hierro Viejo
            span
              img(svg-inline, src='@/assets/svg/or_right.svg', alt='Ornament', width='30px')
      .row
        .col-6.align-content-center
          b-img.pale(src="https://media.giphy.com/media/nDisn0QplYSujxtWIW/giphy-downsized-large.gif", fluid-grow)
          small
            i El Trapiche, Peñaflor.  Representación río Petorca  en 1879.
        .col-6
          .row
            .col-12.d-flex.justify-content-center.align-content-center
              .citation
                h2 "Hierro Viejo es un proyecto de innovación cultural cinematográfica"
          .row
            .col-12
              .text-right
                a(v-b-toggle href="#arguments" @click.prevent) Seguir leyendo
        .col-12.d-flex.justify-content-center.align-content-center.mb-4.border-bottom
          img.fluid(svg-inline, src='@/assets/svg/flourisch.svg', alt='Ornament', width='100px')
      b-collapse#arguments
        .row
          .col-12.col-lg-6
            .pad.text-center
              span.headline.rye.border-top.border-bottom Innovación
            .pad.mt-3.mb-3
              p Si hoy miramos la historia del cine, nos daremos cuenta que hitos importantes han facilitado la forma de narrar una historia. El proceso de Schüfftan, el uso del Mate, del Chroma, y recientemente; sets con pantallas LED de alta resolución.
              p Si bien el concepto no es algo nuevo, lo ingenioso son los fondos generados en tiempo real a través del popular motor para videojuegos: Unreal Engine.
              p Visualmente, esto permite que elementos del set sean afectados por la luz reflejada del entorno, ahorrando tiempo de postproducción y entregando nuevas herramientas para enfocar el trabajo creativo hacia la idea principal de la pieza.
              p Logísticamente, resulve temas
          .col-12.col-lg-6.border-left
            .pad.text-center
              span.headline.rye.border-top.border-bottom Cultura
            .row.mt-3.mb-3
              .col-8
                p La historia de esta película ocurre en el contexto de Chile de fines del siglo XIX, en la región de Valparaíso.
              .col-4.text-center
                img.fluid.bw(svg-inline, src='@/assets/svg/kultrun.svg', alt='Ornament', width='100px')
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
.header-box{
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
}
.headline{
  font-size: 2em;
  padding: 5px 20px;
  &::before{
    content: '\2619';
    font-size: .8em;
    margin-right: 6px;
  }
  &::after{
    content: '\2767';
    font-size: .8em;
    margin-left: 6px;
  }
}
.pale{
  filter:sepia(1);
  opacity: .8;
  &:hover{
    filter: sepia(0);
  }
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
.citation{
  max-width: 400px;
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  line-height: 44px;
  /*font-style: italic;*/
  text-align: center;
  font-weight: 400;
  display: block;
  margin: 50px 0 40px 0;
  font-feature-settings: "liga", "dlig";

}
.citation:before{
    border-top: 1px solid #2f2f2f;
    content: '';
    width: 100px;
    height: 16px;
    display: block;
    margin: 0 auto;
}
.citation:after{
    border-bottom: 1px solid #2f2f2f;
    content: '';
    width: 100px;
    height: 16px;
    display: block;
    margin: 0 auto;
}
.seal{
  opacity: .8;
  padding-top: 10px;
}
</style>
