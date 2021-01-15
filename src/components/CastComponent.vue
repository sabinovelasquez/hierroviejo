<template lang="pug">
  section.cast-box(style="border: 2px solid purple;")
    .container-fluid.d-flex.flex-column.align-items-center(style="border: 2px solid red;")
      .container(style="border: 2px solid black;")
        .row(style="border: 2px solid fucsia;")
          .col-12.d-flex.justify-content-center
            h1.mb-5.mt-5 Reparto
      .container-fluid
        .row
          .col-12.d-flex.flex-column.flex-lg-row.align-items-center.justify-content-lg-around(style="border: 2px solid green;")
            b-card.mb-2.mr-3.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title Alfred Hitchcock
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
            b-card.mb-2.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title Sam Reimi
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
            b-card.mb-2.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title David Fincher
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
            b-card.mb-2.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title James Microphone
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
            b-card.mb-2.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title Tim burton
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
            b-card.mb-2.text-center(tag='article' style='max-width: 13rem;')
              b-avatar.mb-4(variant='info' src='https://placekitten.com/300/300' size="7rem")
              b-card-title Quentin Tarantino
              b-card-text.text-center
                | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              b-button(href='#' variant='primary') Go somewhere
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
.hv-border-radius-card{
    img{
      border-radius:100px;
      margin-bottom: 30px;
    }
  }
.cast-box{
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  }
</style>
