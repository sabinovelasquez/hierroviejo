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
        .row(no-gutters).d-flex.justify-content-around.align-items-center
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Lorem 1
                    b-card-text.text-center.text-md-left.text-lg-center
                      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    b-button(href='#' variant='primary') Go somewhere
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Lorem 2
                    b-card-text.text-center.text-md-left.text-lg-center
                      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    b-button(href='#' variant='primary') Go somewhere
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Lorem 3
                    b-card-text.text-center.text-md-left.text-lg-center
                      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    b-button(href='#' variant='primary') Go somewhere
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Lorem 4
                    b-card-text.text-center.text-md-left.text-lg-center
                      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    b-button(href='#' variant='primary') Go somewhere
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Lorem 5
                    b-card-text.text-center.text-md-left.text-lg-center
                      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    b-button(href='#' variant='primary') Go somewhere
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
