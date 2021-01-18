<template lang="pug">
  section.cast-box
    .container
      b-row(no-gutters)
        h1.mb-5.mt-5.mx-auto Reparto
      .container
        b-row(no-gutters).d-flex.justify-content-around.align-items-center
          b-col(cols="12", lg="2")
            b-card.mx-2.py-3
              b-row(no-gutters)
                b-col(sm="4", lg="12")
                  div.d-flex.justify-content-center
                    b-avatar.mb-4.mr-2.mr-lg-0(align-self="center", variant='info', src='https://placekitten.com/300/300', size="7rem")
                b-col(sm="8", lg="12")
                  div.text-center
                    b-card-title.text-center.text-md-left.text-lg-center Actor 1
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
                    b-card-title.text-center.text-md-left.text-lg-center Actor 2
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
                    b-card-title.text-center.text-md-left.text-lg-center Actor 3
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
                    b-card-title.text-center.text-md-left.text-lg-center Actor 4
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
                    b-card-title.text-center.text-md-left.text-lg-center Actor 5
                    b-card-text.text-center.text-md-left.text-lg-center
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
