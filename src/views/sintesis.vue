<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Se fortalece el bienestar físico mediante la promoción de hábitos saludables, el desarrollo psicomotor, la educación nutricional, la evaluación de la condición física y la aplicación de principios de ergonomía e higiene postural, con el fin de fomentar el cuidado de la salud. Se impulsa la adopción de rutinas como una alimentación equilibrada, actividad física regular y descanso adecuado. Además, se brindan herramientas para prevenir riesgos, favorecer el autocuidado y promover entornos más saludables y seguros en la vida cotidiana.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de cinco áreas para promover el bienestar físico y hábitos saludables.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
