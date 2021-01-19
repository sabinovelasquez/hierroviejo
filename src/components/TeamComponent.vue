<template lang="pug">
  section.double.mb-5
    .container
      .row
        .col-12.text-center.mb-3
          img.img-fluid(svg-inline, src='@/assets/svg/head.svg', alt='Ornament', width='150px')
        .col-12
          h2.text-center.headline.mb-4
            span.rye.border-top.border-bottom Equipo
      .row.text-center
        .col-6.col-md-3
          .team-title
            h3.ultra Sabino Velásquez
            h4
              i Producción - Guión - Dirección
          .n-img
            img.mx-auto(svg-inline, src='@/assets/team/sabino.jpg', alt='Sabino Velásquez')
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Javiera Parra
            h4
              i Asistente de Dirección
          .n-img
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Alex Plaza
            h4
              i Asistente de Producción
          .n-img
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Renato González
            h4
              i Producción Técnica
          .n-img
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
</template>

<script>
export default {
  name: 'TeamComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team-title{
  h3{
    font-size: 1.2em;
  }
  h4{
    font-size: .9em;
  }
  margin: 8px 0;
}
.n-img{
  img{
    width: 80%;
    margin: 10%;
    border: double;
  };
}
.team-content{
  font-size: .9em;
}
</style>
