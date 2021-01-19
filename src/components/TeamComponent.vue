<template lang="pug">
  section.double.mb-5
    .container
      .row
        .col-12.text-center.mb-3
          img.img-fluid(svg-inline, src='@/assets/svg/head.svg', alt='Ornament', width='150px')
        .col-12
          h2.text-center.headline.mb-4
            span.rye.border-top.border-bottom Equipo
      .row.text-center.mb-5
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
            img.mx-auto(svg-inline, src='@/assets/team/javiera.jpg', alt='Javiera Parra')
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Alex Plaza
            h4
              i Asistente de Producción
          .n-img
            img.mx-auto(svg-inline, src='@/assets/team/alex.jpg', alt='Alex Plaza')
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Renato González
            h4
              i Producción Técnica
          .n-img
            img.mx-auto(svg-inline, src='@/assets/team/renato.jpg', alt='Renato González')
          .team-content
            p Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        .col-6.col-md-3
          .team-title
            h3.ultra Vacante
            h4
              i Dirección de Fotografía
          .n-img
            img.mx-auto(svg-inline, src='@/assets/team/wanted.jpg', alt='Wanted')
          .team-content
            button.btn.ribbon
              span Aplicar
        .col-6.col-md-3
          .team-title
            h3.ultra Vacante
            h4
              i Dirección de Arte
          .n-img
            img.mx-auto(svg-inline, src='@/assets/team/wanted.jpg', alt='Wanted')
          .team-content
            button.btn.ribbon
              span Aplicar
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
display: flex;
  &::after{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 15%;
    content: "✸ ✸ ✸ ✸";
    float: left;
    font-size: 22px;
    opacity: .6;
  }
  &::before{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 15%;
    content: "✸ ✸ ✸ ✸";
    float: right;
    font-size: 22px;
    opacity: .6;
  }
  img{
    width: 70%;
    border: double;
  };
}
.team-content{
  font-size: .9em;
}
</style>
