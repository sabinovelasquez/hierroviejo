<template lang="pug">
  section.double.mt-5.mb-5
    .container
      .row
        .col-12.col-md-3.align-content-center.text-center.mb-3
          .n-img
            img.border-dark.border.img-fluid(src='@/assets/images/falcato.jpg' alt="Synopsis Image")
          small
            i Hechos biográficos de Pancho Falcato, del bravo maloqueador Marcos Saldías i de muchos otros presos célebres (1877).
        .col-12.col-md-9
          .row.text-justify
            .col-12.col-md-7.border-left.border-right
              .text-center.mb-3
                h2.headline.mb-4
                  span.rye.border-top.border-bottom Sinopsis
                  //- span inopsis
                img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
                .citation
                  h2 "A las herraduras hay que reemplazarlas, y botar el Hierro Viejo."
                img(svg-inline, src='@/assets/svg/divider.svg', alt='Ornament')
              .pad
                p Una joven chilena educada en Francia llamada <strong>Mirella</strong>, vuelve a su pueblo natal, Hierro Viejo, al enterarse de la muerte de su padre <strong>Matías Cousiño</strong>, un querido y exitoso empresario <a href='https://es.wikipedia.org/wiki/Socialdemocracia' target='_blank'> socialdemocrático</a>.
                p En Hierro Viejo deberá enfrentar el machismo y la violencia rural en Chile a finales de siglo XIX, con la intención de recuperar las tierras que su tío <strong>Matuncho</strong> se atribuyó ante la muerte de su hermano.
            .col-12.col-md-5
              .n-img.border-dark.border
                img.img-fluid(src='@/assets/images/brural.jpg' alt="Synopsis Image")
              small
                i Delincuentes, bandoleros y montoneros : violencia social en el espacio rural chileno (1850-1870).
              .pad.mt-3
                p Junto a <strong>Julio</strong>, su amigo de infancia e hijo del comisario, Mirella recuerda las lecciones de su padre y hace frente a <strong>Pancho Falcato</strong>, un famoso bandolero rural indultado por su tío Matuncho y sus conexiones políticas, el cual busca migrar de la llamada <a href='https://es.wikipedia.org/wiki/Socialdemocracia' target='_blank'>"Pacificación de la Araucanía"</a> que afecta a su territorio.
        .col-12.text-center.mb-4
          img.img-fluid(svg-inline, src='@/assets/svg/tall.svg', alt='Ornament', width='100px')
      .row.mb-5
        .col-12
          .n-img.border-dark.border
            img.img-fluid(src='@/assets/images/francia1878.jpg', alt='Ornament')
          small
            i La Exposición Universal de París de 1878.
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
</style>
