<template lang="pug">
  section.double.mb-5
    .container
      .row
        .col-12.text-center.mb-3
          img.img-fluid(svg-inline, src='@/assets/svg/head.svg', alt='Ornament', width='150px')
        .col-12
          h2.text-center.headline.mb-4
            span.rye.border-top.border-bottom Reparto
      .row.text-center.mb-5
        .col
          .cast-title
            h3.ultra Mirella Cousiño
            h4
              i Angelina Zilcher
          .n-img
            img.mx-auto(svg-inline, src='@/assets/cast/angelina.png', alt='Angelina Zilcher')
          .cast-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col
          .cast-title
            h3.ultra Julio Bustamante
            h4
              i Esteban
          .n-img
            img.mx-auto(svg-inline, src='@/assets/cast/esteban.png', alt='Esteban')
          .cast-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col
          .cast-title
            h3.ultra Matuncho Cousiño
            h4
              i Gustavo Contreras
          .n-img
            img.mx-auto(svg-inline, src='@/assets/cast/gustavo.png', alt='Gustavo Contreras')
          .cast-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
</template>

<script>
export default {
  name: 'CastComponent',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cast-title{
  h3{
    font-size: 1.2em;
  }
  h4{
    font-size: .9em;
  }
  margin: 8px 0;
}
.cast-content{
  font-size: .9em;
}
.n-img{
  display: flex;
    &::after{
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      width: 15%;
      float: left;
      font-size: 22px;
      opacity: .6;
  }
  &::before{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 15%;
    float: right;
    font-size: 22px;
    opacity: .6;
  }
  img{
    width: 70%;
    height: 70%;
  };
}
</style>
