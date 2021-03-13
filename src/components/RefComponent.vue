<template lang="pug">
  section.double.mt-5.mb-5
    .container
      .row
        .col-12
          .text-center.mb-3
            img.mb-3(svg-inline, src='@/assets/svg/ornament-ref.svg', alt='Ornament', width='180')
            h2.headline.mb-4
              span.rye.border-top.border-bottom Referencias
      .row.text-justify
        .col-12.col-md-4.mb-3
          .display-1.text-center
            .pad
              img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
              .citation
                h2 "La 'Empanada Western', chileniza recursos temáticos, visuales y narrativos de la época dorada del Western como género (1920 - 1960)"
              img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
          .pad.text-justify
            p 1.- El tratamiento visual de la película toma elementos claves del cine norteamericano de principio de siglo, inspirándose en técnicas (hoy perfeccionadas) de narrativa visual como el <a href='https://es.wikipedia.org/wiki/Matte_painting' target='_blank'><i>Matte Painting</i></a> para la extensión y reconstrucción de locaciones chilenas y francesas en la década de 1880.
          .n-img
            img.border-dark.border.img-fluid.pale(src='https://media.giphy.com/media/Whxnde2T0Soku8hnBi/giphy.gif' alt="Gone with the Wind (1939)")
            small
              i Gone with the Wind (1939), Victor Fleming.
          .pad.text-justify.mt-4
            P 2.- El <a href='https://es.wikipedia.org/wiki/Cine_expresionista_alem%C3%A1n' target='_blank'>expresionismo alemán</a> prima sobre la fotografía y arte de la película, resaltando contrastes culturales e ideológicos de los personajes.
        .col-12.col-md-4
          .pad
            p 3.- Siguiendo el modelo estructural de 8 secuencias, la narrativa está inspirada en los Westerns clásicos, enfocándose en factores dramáticos y políticos en el contexto de la colonización de tierras no civilizadas, generalmente desde la perspectiva del héroe, su viaje y sacrificios para lograr el objetivo principal.
          .n-img
            img.border-dark.border.img-fluid.pale(src='https://media.giphy.com/media/KTKlZLRKyLBehnP49e/giphy.gif' alt="Stagecoach (1939)")
            small
              i Stagecoach (1939), John Ford.
          .pad.mt-4
            p 4.- Ocupamos el modelo clásico de actuación, apuntando a priorizar la composición y lenguaje cinematográfico en pos de presentar un ensayo visual y dramático sobre los orígenes de la idiosincrasia chilena.
          .n-img
            img.border-dark.border.img-fluid.pale(src='https://media.giphy.com/media/SedlAsef82GBJAuQ7I/giphy.gif' alt="The Ox-Bow Incident (1943)")
            small
              i The Ox-Bow Incident (1943), William A. Wellman.
        .col-12.col-md-4
          .pad.mt-4
            p 5.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed. Sed ac tortor sed lorem pellentesque euismod ut ac est.
          .n-img
            img.border-dark.border.img-fluid.pale(src='https://media.giphy.com/media/FXuXfUgNEDbqr9WNcW/giphy.gif' alt="Viva Zapata! (1952)")
            small
              i Viva Zapata! (1952), Elia Kazan.
          .pad.mt-4
            p 6.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tincidunt risus. Fusce lacinia id eros nec efficitur. Vivamus eu hendrerit tellus. Aliquam dictum metus elit, vel laoreet purus ultricies vel. Proin ultricies sapien tellus, nec molestie velit condimentum sed.
          .n-img.border-dark.border
            img.img-fluid.pale(src='https://media.giphy.com/media/vHe06QopnQSAeGV7HM/giphy.gif' alt="The Wild Bunch (1969)")
          small
            i The Wild Bunch (1969), Sam Peckinpah.
          .pad.mt-4
            p Sed ac tortor sed lorem pellentesque euismod ut ac est. Maecenas consequat elementum nunc non eleifend. Ut tristique id massa id porta. Fusce condimentum sem neque, eget faucibus augue condimentum sed. Sed consectetur orci non augue luctus accumsan eget vitae nisi. Integer fringilla ligula ac urna vestibulum, sit amet pretium eros posuere.
          .n-img.border-dark.border.mb-4
            img.img-fluid.pale(src='https://media.giphy.com/media/ujhxtYBtnEDSmlSX4F/giphy.gif' alt="High Noon (1952)")
          small
            i High Noon (1952), Fred Zinnemann.
      .row
        .col-12.col-md-8.mb-4
          .n-img
            img.border-dark.border.img-fluid.pale(src='https://media.giphy.com/media/i1lipmqzY6q36CFMIA/giphy.gif', alt='The Magnificent Seven (1960)')
          small
            i The Magnificent Seven (1960), John Sturges.
        .col-12.col-md-4.mt-4.mb-4.text-center
          .n-img
            img.img-fluid(src='@/assets/images/guerra.png' alt="Guerra del Pacífico (1879)")
          small
            i Guerra del Pacífico, llamado a enrolarse (1879).
</template>

<script>
export default {
  name: 'RefComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.n-img{
  img{
    width:100%;
    &:hover{
      filter: none;
      opacity: 1;
    }
  }
}
</style>
