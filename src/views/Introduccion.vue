<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-5.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5.my-5
        p.mb-0 En este componente se desarrollan contenidos orientados al fortalecimiento del bienestar físico y la promoción de hábitos de vida saludables, también se abordan la psicomotricidad y sus habilidades básicas, los principios de nutrición e higiene, y la relación entre alimentación y gasto calórico. Asimismo, se incluye la evaluación de la condición física mediante herramientas como el test físico y la ficha antropométrica y finalmente, se estudian la ergonomía y la higiene postural, con el fin de prevenir riesgos y fomentar el autocuidado en distintos entornos.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PGPFPmWfQT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Promoción del bienestar físico y hábitos saludables


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
