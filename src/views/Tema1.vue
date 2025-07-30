<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de psicomotricidad
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La psicomotricidad surge como un enfoque integrador que reconoce la estrecha relación entre el cuerpo, el pensamiento, las emociones y el entorno, más allá del simple desarrollo motor, esta disciplina permite comprender cómo el movimiento corporal refleja y favorece los procesos cognitivos, afectivos y sociales del ser humano. Su estudio resulta clave en contextos educativos, preventivos y terapéuticos, ya que facilita el desarrollo integral de la persona desde una perspectiva holística y significativa.
      
      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Definición de Psicomotricidad
      
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus
          .bg-color-3.p-4.br-1
            p.mb-0 La psicomotricidad es una disciplina que estudia y promueve la relación integral entre el cuerpo, el movimiento, la emoción y el pensamiento, reconociendo al ser humano como una unidad biopsicosocial en constante interacción con su entorno. La palabra está compuesta por dos vocablos: psico, que se refiere a la psique (pensamiento-emoción), y motricidad, basada en el movimiento y el desarrollo motor. Desde este enfoque, se comprende el cuerpo no solo como una estructura biológica, sino como una construcción simbólica y expresiva a través de la cual la persona se desarrolla, comunica, aprende y se vincula con los demás.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-sm-12.col-lg-4
           img.wc-25.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/3.svg', alt='')
           p.mb-0 Actualmente, la psicomotricidad contribuye al desarrollo armónico de las habilidades motoras, cognitivas y afectivas, favoreciendo procesos de autorregulación, autonomía, aprendizaje significativo y bienestar integral. Su campo de aplicación abarca la prevención, la educación y la intervención terapéutica en diversas etapas del ciclo vital, fortaleciendo la corporeidad como eje fundamental del desarrollo humano.




      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Habilidades psicomotrices básicas y específicas
      
      p.mb-4(data-aos="fade-left") Las habilidades psicomotrices comprenden un conjunto de destrezas que el ser humano desarrolla a lo largo de su vida, y que permiten la interacción armónica entre el cuerpo, el pensamiento, las emociones y el entorno. Estas habilidades son esenciales para la autonomía, la comunicación, la expresión corporal y el aprendizaje significativo, ya que consolidan la base del desarrollo motor, cognitivo y afectivo.
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Figura 1.] Habilidades psicomotrices
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          figure.mb-0 
            img(src='@/assets/curso/temas/t1/4.svg', alt='Familia ejercitándose en casa con diferentes actividades físicas como bicicleta estática, pesas y juegos con pelota.')

      .row.justify-content-center.mb-5.bg-color-4.br-3.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/5.svg', alt='')
        .col-sm-12.col-lg-11
          .py-5
            p.mb-0 En el primer congreso europeo de psicomotricistas (Alemania, 1996) se reconoció el papel de la psicomotricidad como una disciplina que integra lo cognitivo, emocional, simbólico y sensorio-motor, desempeñando un rol clave en el desarrollo armónico de la personalidad. A partir de esta visión, se han propuesto intervenciones psicomotrices con fines preventivos, educativos, reeducativos y terapéuticos, aplicables a lo largo de todas las etapas del ciclo vital.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Las habilidades psicomotrices se clasifican principalmente en:
      
      .row.justify-content-center.align-items-center.mb-0.bg-color-5.px-5.py-4(data-aos="fade-left")
        .col-sm-12.col-lg-8
          p.mb-0 #[b a)] Habilidades motrices básicas, como caminar, correr, saltar, girar, inclinarse o empujar, que conforman el repertorio fundamental del movimiento humano.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/6.png', alt='')
          
      .row.justify-content-center.align-items-center.mb-0.bg-color-6.px-5.py-4(data-aos="fade-left")
        .col-sm-12.col-lg-8
          p.mb-0 #[b b)] Habilidades de proyección y recepción, que incluyen acciones como lanzar, atrapar o golpear objetos, y requieren coordinación, precisión y respuesta motriz ante estímulos externos.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/7.png', alt='')


      .row.justify-content-center.align-items-center.mb-5.bg-color-5.px-5.py-4(data-aos="fade-left")
        .col-sm-12.col-lg-8
          p.mb-0 #[b c)] Habilidades específicas, desarrolladas a partir de las anteriores, orientadas a tareas complejas en contextos particulares como el deporte, la actividad artística o el entorno laboral. Estas demandan control postural, coordinación fina, percepción espacio-temporal y dominio corporal avanzado.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/8.png', alt='')
      
      
      
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png', alt='')
        .col-lg-7.col-sm-12.col-md-12.bg-color-7.align-content-center
          .br-4
            p.px-4.mt-3 Además, el desarrollo psicomotor implica la integración de elementos clave como la respiración, el tono muscular, la lateralidad, el equilibrio, el esquema corporal, el manejo del espacio y el tiempo, así como el ritmo. Todos estos componentes son interdependientes y contribuyen a una construcción coherente de la corporeidad y al fortalecimiento de competencias adaptativas en la vida cotidiana.
      
      
      
      
      
      
      
      
      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Las habilidades del pensamiento
      
      p.mb-5(data-aos="fade-left") Son procesos mentales que permiten al individuo observar, interpretar, analizar y responder a las situaciones del entorno de manera crítica, creativa y eficiente. Estas capacidades son esenciales para la vida cotidiana, ya que posibilitan la comprensión del mundo, la toma de decisiones informadas y la resolución de problemas en contextos diversos y cambiantes.  

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.png', alt='')
        .col-lg-7.col-sm-12.col-md-12.bg-color-5.align-content-center
            p.px-4.ml-cus-2 Según Guevara (2000), estas habilidades cumplen una función social indispensable al facilitar la adaptación del ser humano a su realidad. Su desarrollo es clave en los procesos formativos, ya que permiten potenciar la autonomía intelectual, la creatividad, la capacidad de argumentar y la disposición para actuar de forma reflexiva frente a los desafíos del mundo contemporáneo.

      p.mb-5(data-aos="fade-left") Las habilidades básicas del pensamiento incluyen:


      .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-left")
            .p-4.p-md-5
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/11.png', alt='')
                .col-sm-12.col-lg-8
                  SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-6")
                    .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
                      .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                          .col-sm-12.col-md-3.col-lg-5
                              img(src='@/assets/curso/temas/t1/12.svg', alt='')
                      .bg-color-white.mb-4(data-aos="fade-left")
                        h3.px-3.py-1.text-center La observación
                      p.mb-0.text-center Proceso que implica fijar la atención en un objeto, situación o fenómeno para captar sus características mediante los sentidos. Comprende un momento concreto (sensorial) y uno abstracto (interpretativo), y constituye la base de todo conocimiento.

                    .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
                      .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                          .col-sm-12.col-md-3.col-lg-5
                              img(src='@/assets/curso/temas/t1/13.svg', alt='')
                      .bg-color-white.mb-4(data-aos="fade-left")
                        h3.px-3.py-1.text-center La comparación
                      p.mb-0.text-center Permite establecer semejanzas y diferencias entre elementos, lo que ayuda a organizar la información, generar generalizaciones y formular juicios más precisos.


                    .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
                      .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                          .col-sm-12.col-md-3.col-lg-5
                              img(src='@/assets/curso/temas/t1/14.svg', alt='')
                      .bg-color-white.mb-4(data-aos="fade-left")
                        h3.px-3.py-1.text-center La relación
                      p.mb-0.text-center Consiste en vincular datos obtenidos a través de la observación y la comparación, generando conexiones entre experiencias previas, conocimientos y nuevas informaciones.

                    .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
                      .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                          .col-sm-12.col-md-3.col-lg-5
                              img(src='@/assets/curso/temas/t1/15.svg', alt='')
                      .bg-color-white.mb-4(data-aos="fade-left")
                        h3.px-3.py-1.text-center La clasificación
                      p.mb-0.text-center Se refiere a agrupar objetos, personas o situaciones con base en criterios comunes. Esta habilidad es fundamental para el desarrollo del pensamiento lógico y la comprensión de conceptos.

                    .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
                      .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                          .col-sm-12.col-md-3.col-lg-5
                              img(src='@/assets/curso/temas/t1/16.svg', alt='')
                      .bg-color-white.mb-4(data-aos="fade-left")
                        h3.px-3.py-1.text-center La descripción
                      p.mb-0.text-center Permite comunicar de manera clara y estructurada las características de lo observado, incluyendo aspectos visibles y, en niveles más avanzados, relaciones causales y transformaciones.

      .row.justify-content-center.mb-5.bg-color-5.br-6.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/17.svg', alt='')
        .col-sm-12.col-lg-10
          .py-5
            p.mb-0 El desarrollo de estas habilidades fortalece el pensamiento crítico y creativo, y estimula la capacidad de interactuar con el entorno de forma autónoma y constructiva. En contextos educativos, su fomento contribuye a formar individuos capaces de analizar su realidad, proponer alternativas de solución y actuar con responsabilidad en una sociedad cada vez más compleja y multicultural.


      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Habilidades psicomotrices y de pensamiento
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Material_Habilidades_psicomotrices_y_de_pensamiento.pdf')" target="_blank")
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
