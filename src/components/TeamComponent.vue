<template lang="pug">
  section(style="border: 2px solid purple;")
    .container-fluid.d-flex.flex-column.align-items-center(style="border: 2px solid red;")
      .container(style="border: 2px solid black;")
        .row(style="border: 2px solid fucsia;")
          .col-12.d-flex.justify-content-center
            h1.mb-5.mt-5 Equipo
      .row
        div(style="border: 2px solid green;").d-flex.justify-content-center.flex-column.flex-lg-row
          b-card.mb-2.mr-3.text-center.hv-border-radius-card(title='Sabino Velazquez' img-src='https://picsum.photos/150/150/?image=25' img-class='rounded-circle' img-alt='Image' img-top='' tag='article' style='max-width: 20rem;')
            b-card-text
              | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            b-button(href='#' variant='primary') Go somewhere
          b-card.mb-2.mr-3.text-center.hv-border-radius-card(title='Alex' img-src='https://picsum.photos/150/150/?image=25' img-alt='Image' img-top='' tag='article' style='max-width: 20rem;')
            b-card-text
              | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            b-button(href='#' variant='primary') Go somewhere
          b-card.mb-2.mr-3.text-center.hv-border-radius-card(title='Renato Gonzalez' img-src='https://picsum.photos/150/150/?image=25' img-alt='Image' img-top='' tag='article' style='max-width: 20rem;')
            b-card-text.text-center
              | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            b-button(href='#' variant='primary') Go somewhere
          b-card.mb-2.mr-3.text-center.hv-border-radius-card(title='Card Title' img-src='https://picsum.photos/150/150/?image=25' img-alt='Image' img-top='' tag='article' style='max-width: 20rem;')
            b-card-text.text-center
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
.hv-border-radius-card{
  img{
    border-radius:100px;
    margin-bottom: 30px;
  }
}
</style>
