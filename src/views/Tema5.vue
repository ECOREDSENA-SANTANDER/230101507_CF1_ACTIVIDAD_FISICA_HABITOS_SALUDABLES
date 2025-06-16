<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Ergonomía
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Figura 8.] La ergonomía 
      .bg-fondo-4.mb-5(data-aos="fade-left")
        .p-4.p-md-5  
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-8
              figure.mb-0 
                img(src='@/assets/curso/temas/t5/1.svg', alt='Personas trabajando en una oficina moderna con escritorios ergonómicos y computadoras.')
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t5/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La ergonomía es una disciplina científica que busca adaptar los entornos, herramientas, tareas y organizaciones a las características del ser humano, con el fin de optimizar la seguridad, el confort, la eficiencia y el bienestar integral del trabajador. Su enfoque interdisciplinario integra conocimientos de medicina, biomecánica, psicología, ingeniería, fisiología, sociología y diseño industrial.
          p.mb-0 Según la Asociación Internacional de Ergonomía (IEA), esta disciplina se ocupa de la comprensión de las interacciones entre las personas y los elementos de un sistema, y aplica principios y métodos de diseño para mejorar el rendimiento del sistema y el bienestar humano.

      
      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 ¿Qué es la ergonomía?
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_8_Que_es_la_ergonomia.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Importancia en el ámbito laboral

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-16.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t5/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.py-5
          p.mb-3 En el contexto del trabajo, la ergonomía cumple un papel clave en la prevención de enfermedades laborales relacionadas con posturas forzadas, movimientos repetitivos, esfuerzos físicos prolongados y entornos mal acondicionados. Estas condiciones pueden provocar trastornos musculoesqueléticos, fatiga mental, estrés o incluso accidentes.
          p.mb-0 La Ley de Prevención de Riesgos Laborales contempla dentro de los daños laborales no solo los traumatismos o patologías por exposición a agentes físicos o químicos, sino también aquellos causados por sobrecarga física, mental o postural, siendo la ergonomía una herramienta esencial para su prevención.


      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Tipos de ergonomía aplicada al trabajos
      
      TabsC.color-secundario.mb-5
        .py-3.py-md-4.bg-color-17.px-5(titulo="Ergonomía física o geométrica")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/4.png', alt='')
            .col-sm-12.col-lg-7
              h4 Ergonomía física o geométrica
              p.mb-0 Se enfoca en el diseño del puesto de trabajo a partir de la antropometría (medidas corporales) y la biomecánica, ajustando alturas, distancias, zonas de alcance, superficies de apoyo y posturas para evitar tensiones y lesiones.

        .py-3.py-md-4.bg-color-17.px-5(titulo="Ergonomía ambiental")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/5.png', alt='')
            .col-sm-12.col-lg-7
              h4 Ergonomía ambiental
              p.mb-0 Considera factores como iluminación, temperatura, ruido y ventilación, que inciden directamente en el confort y en la salud del trabajador.


        .py-3.py-md-4.bg-color-17.px-5(titulo="Ergonomía temporal ")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/6.png', alt='')
            .col-sm-12.col-lg-7
              h4 Ergonomía temporal 
              p.mb-0 Analiza aspectos como los horarios, duración de la jornada, pausas activas, y ritmos de trabajo, buscando un equilibrio entre carga y descanso.


        .py-3.py-md-4.bg-color-17.px-5(titulo="Ergonomía organizacional")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/7.png', alt='')
            .col-sm-12.col-lg-7
              h4 Ergonomía organizacional
              p.mb-0 Evalúa la estructura de la empresa, la división del trabajo, la participación del trabajador, los niveles de automatización y la calidad de la comunicación interna, promoviendo entornos más humanos y productivos.


      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Aplicación práctica en el diseño del puesto de trabajo: el diseño ergonómico del puesto implica considerar



      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.position-relative
          
          .crd.crd--avatarHorizontal.crd--first.py-4.mb-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t5/8.svg", alt="alt").img100
              .col
                p.mb-0 Altura y orientación del plano de trabajo, de forma que los brazos se mantengan en ángulo recto y la espalda recta.
          
          .crd.crd--avatarHorizontal-inverso.py-4.mb-4 
            .row.align-items-center
              .col
                p.mb-0 Zonas de alcance óptimo, donde las herramientas se ubiquen dentro del rango natural de movimiento sin esfuerzo.
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t5/9.svg", alt="alt").img100
          
          .crd.crd--avatarHorizontal.crd--last.py-4.mb-4 
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t5/10.svg", alt="alt").img100
              .col
                p.mb-0 Espacio para las piernas, considerando diferentes tallas corporales.

          .crd.crd--avatarHorizontal-inverso.crd--last.py-4.mb-4 
            .row.align-items-center
              .col
                p.mb-0 Sillas y superficies ajustables, especialmente en puestos prolongados en posición sentada.
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t5/11.svg", alt="alt").img100

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t5/12.svg", alt="alt").img100
              .col
                p.mb-0 Organización visual y operativa, que facilite la comprensión de tareas, minimice el esfuerzo cognitivo y evite errores.


      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Posturas de trabajo recomendadas
      .tarjeta--container.row.mb-5(data-aos="fade-left")
        .col-md.tarjeta.bg-color-13.p-4.p-md-4.p-lg-5.mb-cus
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end.justify-content-start
                .col-lg-3.mb-4.d-none.d-lg-block
                  img.img-a.img-t(src='@/assets/curso/temas/t5/13.svg')
              p.mb-0 En posición sentada, se debe mantener el tronco erguido, los codos a 90°, los pies apoyados, y la pantalla a la altura de los ojos.
        .col-md.tarjeta.bg-color-3.p-4.p-md-4.p-lg-5
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end.justify-content-start
                .col-lg-3.mb-4.d-none.d-lg-block
                  img.img-a.img-t(src='@/assets/curso/temas/t5/14.svg')
              p.mb-0 En posición de pie, es ideal alternar con descansos, mantener una postura simétrica y usar calzado ergonómico. 
      
      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Criterios ergonómicos clave
      .row.mb-5(data-aos="fade-left")
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t5/15.svg', alt='')
            p.mb-0.text-center Prevenir la fatiga física evitando posiciones forzadas, uso prolongado de los mismos grupos musculares, y manteniendo la simetría de movimientos.

        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t5/16.svg', alt='')
            p.mb-0.text-center Prevenir la fatiga mental controlando la cantidad de información, el nivel de atención exigido y promoviendo la participación activa del trabajador.
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t5/17.svg', alt='')
            p.mb-0.text-center Diseñar herramientas adaptadas a la mano y al tipo de tarea, evitando giros forzados de muñeca, presiones innecesarias o falta de control.


      p.mb-5 A continuación, figuran algunos principios básicos de ergonomía para el diseño de los puestos de trabajo.
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Figura 9.] Principios básicos de ergonomía para puesto de trabajo 
      
      .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-8
          figure.mb-0 
            img(src='@/assets/curso/temas/t5/18.svg', alt='Iconos que representan medidas corporales clave para el diseño ergonómico, como altura de cabeza, brazos, manos, codos y piernas.')
      
      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Ergonomía para el puesto de trabajo
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_9_Ergonomia_para_el_puesto_de_trabajo.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download


  </template>

<script>
export default {
  name: 'Tema1',
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
