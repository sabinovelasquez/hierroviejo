<template lang="pug">
  section.synopsis-box(style="border: 2px solid purple;")
    .container(style="border: 2px solid red;")
      .row
        .col-12.d-flex.justify-content-center.justify-content-lg-start
          h1.mb-5.mt-5 Sinopsis
      .row(style="border: 2px solid red;")
        .col-12.col-lg-6.d-flex.align-items-center.justify-content-center(style="border: 2px solid blue;")
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis tortor eu congue commodo. Maecenas ac elementum mauris, finibus venenatis eros. Integer dapibus quam gravida sapien lobortis, in semper felis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse semper luctus nisl, at condimentum tellus accumsan eu. Nunc posuere pretium justo, non laoreet mauris rhoncus in. Vestibulum id pretium ipsum.
        .col-12.col-lg-6.d-flex.flex-column.justify-content-center.align-items-center
          b-img.mb-3.mt-3(fluid, src='https://picsum.photos/550/300' alt="Synopsis Image")
          .col-12
            span Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>

<script>
export default {
  name: 'SynopsisComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.synopsis-box{
  width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  }
</style>
