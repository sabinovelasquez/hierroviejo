<template lang="pug">
  header.header-box
    .container
      .row
        .col-12.text-center
          b-img.seal.mx-auto.d-block(alt="Cousiño", fluid, :src="require('@/assets/images/seal.png')")
        .col-12.d-flex.justify-content-center.align-content-center
          h1.display-4.main-title.upper.playfair Hierro Viejo
        .col-12.d-flex.justify-content-center.align-content-center
          blockquote
            h2.mt-1.mb-5.title.playfair Hierro Viejo es un proyecto de Innovación Cultural
      .row
        .col-12.d-flex.justify-content-center.align-content-center.mb-4.border-bottom
          .pad
            p
              b-img.pale(src="https://media.giphy.com/media/nDisn0QplYSujxtWIW/giphy-downsized-large.gif", fluid)
      section
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
            .pad.mt-3.mb-3
              p La historia de esta película ocurre en el contexto de Chile de fines del siglo XIX, en la región de Valparaíso.
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
}
blockquote {
  border:none;
  margin-bottom:-30px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote h2 {
  font-size:1.5em;
}
blockquote h2:before {
  content: open-quote;
  font-weight: bold;
  font-size:1.8em;
}
blockquote h2:after {
  content: close-quote;
  font-weight: bold;
  font-size:1.8em;
}
.seal{
  opacity: .8;
  padding-top: 10px;
}
</style>
