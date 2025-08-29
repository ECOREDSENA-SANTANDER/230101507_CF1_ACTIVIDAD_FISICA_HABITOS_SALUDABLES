<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Adecuación física para la vida
      p.mb-5(data-aos="fade-left") La adecuación física para la vida hace referencia al conjunto de acciones orientadas a valorar, mantener y mejorar la condición física de las personas, promoviendo su bienestar integral. A través de herramientas como los tests de valoración física, la ficha antropométrica y la medición del pulso, es posible obtener un diagnóstico del estado físico actual y diseñar estrategias personalizadas de mejora.
      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Ficha antropométrica
      
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='')
        .col-sm-12.col-lg-7
          p La ficha antropométrica es una herramienta fundamental para la evaluación física y nutricional del individuo, ya que permite registrar y analizar de forma sistemática las medidas corporales relevantes. Estas mediciones ofrecen una visión integral del estado corporal actual, sirven de línea base para intervenciones físicas o dietéticas, y permiten hacer seguimiento a los cambios asociados a los hábitos de vida, la alimentación y el ejercicio.
          img.d-none.d-lg-block.hcard-2(src='@/assets/curso/temas/t2/2.svg', alt='')
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Importancia y aplicaciones


      .row.justify-content-center.mb-5.bg-color-12.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img.w-50.m-auto.mb-3(src='@/assets/curso/temas/t4/2.png', alt='')
        .col-sm-12.col-lg-8.pc-4
          .bg-color-white.p-4
            p.mb-0 El análisis antropométrico no solo proporciona información sobre el peso y la estatura, sino que permite estimar parámetros más complejos como la composición corporal (masa grasa, masa magra y agua corporal), la distribución de la grasa, los desequilibrios estructurales y los factores de riesgo metabólico. Tiene una aplicación directa en áreas como:

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 #[b Educación física y deporte:] para identificar el perfil físico del estudiante o deportista y ajustar planes de entrenamiento.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 #[b Nutrición y salud pública:] en la detección de desnutrición, sobrepeso u obesidad, y el seguimiento de tratamientos.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 #[b Ergonomía y diseño industrial:] al adaptar mobiliario, herramientas o ropa al cuerpo humano.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 #[b Medicina preventiva y rehabilitación:] para monitorear el progreso en tratamientos o recuperaciones funcionales.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Variables comunes evaluadas
      p.mb-5(data-aos="fade-left") Una ficha antropométrica debe incluir medidas estructurales y funcionales estandarizadas. Entre las más frecuentes están:

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Peso corporal (kg)].

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Estatura (cm)].

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Índice de Masa Corporal (IMC):] permite estimar si el peso es adecuado para la talla.

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Perímetros corporales:] como cintura, cadera, brazo y muslo, útiles para evaluar distribución de masa grasa.

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Pliegues cutáneos:] como tríceps, subescapular y abdominal, utilizados para calcular el porcentaje de grasa corporal.

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Envergadura:] distancia entre las puntas de los dedos con los brazos extendidos, importante en deportes y diseño ergonómico.

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Frecuencia cardíaca en reposo].

            li.d-flex
              i.fas.fa-circle.icon-list-2
              p.mb-0 #[b Porcentaje de grasa corporal] (estimado con fórmulas como Durnin-Womersley o con instrumentos como bioimpedancia).
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Recomendaciones para la toma de medidas



      .row.mb-5(data-aos="fade-left")
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t4/5.svg', alt='')
            p.mb-0.text-center Realizar las mediciones a la misma hora del día y en condiciones similares (ayuno, reposo previo).

        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t4/6.svg', alt='')
            p.mb-0.text-center Utilizar instrumentos calibrados y adecuados: cinta métrica flexible, báscula digital, tallímetro, plicómetro.
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm
                .col-sm-6.wc-3.col-md-3.col-lg-4.m-auto
                    img(src='@/assets/curso/temas/t4/7.svg', alt='')
            p.mb-0.text-center Registrar los datos en una ficha estandarizada para facilitar la comparación y el análisis longitudinal.


      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Seguimiento y análisis
      p.mb-5 El verdadero valor de la ficha antropométrica radica en su seguimiento en el tiempo. Comparar registros en diferentes momentos permite evaluar el impacto de los cambios en el estilo de vida, la adherencia a programas de acondicionamiento físico o el progreso en tratamientos nutricionales. Además, facilita la toma de decisiones basadas en evidencia sobre ajustes en dieta, ejercicio o intervenciones médicas. 
      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Ficha antropométrica
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_6_Ficha_antropometrica.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Test de condición física
      .row.justify-content-center.mb-5.bg-color-4.br-3.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t4/8.svg', alt='')
        .col-sm-12.col-lg-11
          .py-5
            p.mb-0 El test de condición física es una herramienta de evaluación que permite conocer el estado general del organismo en relación con sus capacidades para realizar actividad física. Este proceso de valoración está orientado a identificar el nivel de aptitud física de una persona en distintos componentes, como la resistencia cardiovascular, la fuerza muscular, la flexibilidad, la velocidad, la agilidad y la coordinación. Evaluar estas capacidades no solo proporciona información sobre el rendimiento físico, sino que también permite diseñar programas de acondicionamiento personalizados, prevenir lesiones y promover un estilo de vida activo y saludable.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Objetivos de los tests físicos



      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Diagnosticar el estado inicial de la condición física.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Estimular la autoconciencia sobre fortalezas y áreas de mejora.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Motivar la participación activa en programas de ejercicio físico.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Evaluar la eficacia de programas deportivos, escolares o terapéuticos.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Establecer metas individuales a corto, mediano y largo plazo.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Favorecer la planificación y periodización de entrenamientos.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Permitir comparaciones con baremos estandarizados o con evaluaciones anteriores.


        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/9.png', alt='')


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Capacidades físicas evaluadas
      p(data-aos="fade-left") Según el enfoque del test, se pueden evaluar una o varias de las siguientes cualidades:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/10.png', alt='')
        .col-sm-12.col-lg-8
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-6")
            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/11.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Resistencia aeróbica
              p.mb-0.text-center Capacidad del cuerpo para sostener un esfuerzo prolongado (ejemplo: test de los 6 minutos, test de Course Navette).

            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/12.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Fuerza muscular
              p.mb-0.text-center Se evalúa mediante pruebas como abdominales en un minuto, flexiones de brazos, salto largo sin impulso, entre otras.


            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/13.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Velocidad
              p.mb-0.text-center  Capacidad de realizar movimientos en el menor tiempo posible (ejemplo: carrera de 30 metros).

            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/14.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Flexibilidad
              p.mb-0.text-center Amplitud del movimiento articular (ejemplo: test de Wells y Dillon o test de sentarse y alcanzar).


            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/15.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Agilidad
              p.mb-0.text-center Capacidad de cambiar de dirección rápidamente (ejemplo: test de ida y vuelta con conos).


            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/16.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Coordinación y equilibrio
              p.mb-0.text-center Pruebas que evalúan el control motor y el ajuste postural (ejemplo: pruebas de equilibrio estático).



      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Criterios para una evaluación eficaz

      p(data-aos="fade-left") Para que el test sea válido y confiable, deben cumplirse ciertas condiciones:

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Las pruebas deben realizarse en un entorno seguro y controlado.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 La persona evaluada debe estar en buenas condiciones de salud.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Las instrucciones deben ser claras y estandarizadas.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Los instrumentos de medición deben estar calibrados y ser adecuados.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Se debe realizar un calentamiento previo y una vuelta a la calma posterior.

            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Los resultados deben interpretarse según la edad, sexo y nivel de actividad física habitual.

             


        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/17.png', alt='')



      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Utilidad educativa y formativa
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/18.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En contextos educativos y comunitarios, la aplicación de estos tests permite fomentar la autoevaluación, el seguimiento de progresos personales y la planificación de intervenciones pedagógicas que promuevan hábitos de actividad física regular. También sirven como base para detectar riesgos de sedentarismo, exceso de peso o falta de movilidad, permitiendo intervenir a tiempo mediante estrategias formativas, nutricionales y deportivas.


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Ejemplo de batería básica de pruebas físicas

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-10
          .titulo-sexto.color-primario(data-aos="fade-left")
              p.mb-0 #[b Tabla 1.] Ejemplo de batería básica de pruebas físicas.
          .tabla-b.color-acento-contenido.mb-5
            table(alt="Tabla que presenta una batería básica de pruebas físicas para evaluar diferentes capacidades como resistencia, fuerza, velocidad, flexibilidad y agilidad, indicando una prueba recomendada y su respectivo indicador de medición.")
              thead.bg-color-7
                tr
                  th.h2 Capacidad Evaluada
                  th.h2 Prueba Recomendada
                  th.h2 Indicador
              tbody
                tr
                  td Resistencia aeróbica
                  td Caminata de 6 minutos
                  td Distancia recorrida
                tr
                  td Fuerza abdominal
                  td Abdominales en 1 minuto
                  td Número de repeticiones
                tr
                  td Fuerza de brazos
                  td Flexiones de codo (flexiones)
                  td Repeticiones sin apoyo
                tr
                  td Velocidad
                  td Carrera de 30 metros planos
                  td Tiempo en segundos
                tr
                  td Flexibilidad
                  td Test de  Wells (#[i sit and reach])
                  td Centímetros alcanzados
                tr
                  td Agilidad
                  td Test de ida y vuelta (con conos)
                  td Tiempo en segundos

      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Pruebas (tests) de valoración de la condición física
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_5_Pruebas_tests_de_valoracion_de_la_condicion_fisica.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      .bg-color-2.br-2.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Pulso y sus manifestaciones

      p.mb-5(data-aos="fade-left") El pulso es una manifestación física del latido cardíaco, perceptible como una expansión rítmica en las paredes arteriales, es un signo vital esencial que refleja la eficiencia del sistema cardiovascular y constituye un indicador clave en la evaluación del estado físico y de salud general de una persona. Su valoración tiene múltiples aplicaciones en contextos clínicos, deportivos y educativos.
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 ¿Qué representa el pulso?


      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-6.col-md-8.p-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/19.png', alt='')
        .col-lg-7.col-sm-12.col-md-12.bg-color-4.align-content-center
          .br-7
            p.px-4.mt-3 Desde una perspectiva fisiológica, el pulso es el resultado de la contracción del ventrículo izquierdo del corazón, que impulsa sangre hacia la aorta y, posteriormente, al resto del cuerpo, esta acción genera una onda de presión que se puede palpar en puntos específicos del cuerpo, principalmente sobre arterias superficiales, su análisis permite conocer la frecuencia, el ritmo, la amplitud y la regularidad del latido cardíaco.
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de pulso y su utilidad práctica
  
      p(data-aos="fade-left") En entornos formativos, comprender los distintos tipos de pulso permite interpretar adecuadamente las respuestas del cuerpo ante diferentes estímulos. Los principales tipos incluyen:
  
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.position-relative
          
          .crd.crd--avatarHorizontal.crd--first.py-4.mb-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t4/20.png", alt="alt").img100
              .col
                h5 Pulso basal
                p.mb-0 Medido en la mañana, antes de levantarse, es útil para determinar el estado cardiovascular base y detectar signos tempranos de fatiga o sobreentrenamiento en personas activas.
          
          .crd.crd--avatarHorizontal-inverso.py-4.mb-4 
            .row.align-items-center
              .col
                h5 Pulso en reposo
                p.mb-0 Tomado en condiciones de tranquilidad durante el día, es un valor de referencia para monitorear variaciones por estrés, enfermedades o cambios en el estilo de vida.
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t4/21.png", alt="alt").img100
          
          .crd.crd--avatarHorizontal.crd--last.py-4.mb-4 
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t4/22.png", alt="alt").img100
              .col
                h5 Pulso de calentamiento
                p.mb-0 Refleja la respuesta inicial del cuerpo al inicio del ejercicio, un aumento progresivo es signo de buena adaptación cardiovascular.

          .crd.crd--avatarHorizontal-inverso.crd--last.py-4.mb-4 
            .row.align-items-center
              .col
                h5 Pulso de esfuerzo
                p.mb-0 Se presenta durante la actividad física, ayuda a valorar la intensidad del ejercicio y ajustar las cargas de entrenamiento.
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t4/23.png", alt="alt").img100

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t4/24.png", alt="alt").img100
              .col
                h5 Pulso de recuperación
                p.mb-0 Medido después del ejercicio, muestra la capacidad del organismo para retornar a un estado de equilibrio, una recuperación rápida suele estar asociada a una buena condición física.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Rango normal del pulso según la edad
      p(data-aos="fade-left") Es importante comprender que los valores del pulso varían según el ciclo vital, conocer estos rangos permite interpretar adecuadamente los datos recogidos en prácticas educativas o evaluaciones físicas:
  
  
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/25.png', alt='')
        .col-sm-12.col-lg-8
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-6")
            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/26.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Lactantes
              p.mb-0.text-center 130–140 ppm (pulsaciones por minuto).
  
            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/27.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Niños pequeños
              p.mb-0.text-center 90–110 ppm.

            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/28.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Adolescentes y adultos jóvenes
              p.mb-0.text-center 70–90 ppm.

            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/29.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Adultos
              p.mb-0.text-center 60–80 ppm.

            .tarjeta.bg-color-8.br-5.p-3.p-md-3.p-lg-5
              .row.align-items-center.my-4.justify-content-center.hide-icon-sm.d-none.d-lg-block
                  .col-sm-12.col-md-3.col-lg-5.m-auto
                      img(src='@/assets/curso/temas/t4/30.svg', alt='')
              .bg-color-white.mb-4(data-aos="fade-left")
                h3.px-3.py-1.text-center Adultos mayores
              p.mb-0.text-center 55–70 ppm.
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Alteraciones frecuentes del pulso

      p(data-aos="fade-left") Detectar alteraciones en la frecuencia cardíaca puede ser clave para prevenir riesgos:
      .tarjeta--container.row.mb-5(data-aos="fade-left")
        .col-md.tarjeta.bg-color-13.p-4.p-md-4.p-lg-5.mb-cus
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end.justify-content-start
                .col-lg-3.mb-4.d-none.d-lg-block
                  img.img-a.img-t(src='@/assets/curso/temas/t4/31.svg')
                .col-sm-12.col-lg-9
                  .bg-color-14.mb-4
                    h2.px-3.py-1.text-white Bradicardia
              p.mb-0 Pulso por debajo de 60 ppm. Puede ser normal en deportistas entrenados, pero también un signo de disfunción cardíaca si se presenta con síntomas.
        .col-md.tarjeta.bg-color-3.p-4.p-md-4.p-lg-5
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end.justify-content-start
                .col-lg-3.mb-4.d-none.d-lg-block
                  img.img-a.img-t(src='@/assets/curso/temas/t4/32.svg')
                .col-sm-12.col-lg-9
                  .bg-color-14.mb-4
                    h2.px-3.py-1.text-white Taquicardia
              p.mb-0 Pulso por encima de 100 ppm en reposo. Puede relacionarse con fiebre, estrés, anemia o alteraciones cardíacas.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Técnica para la toma del pulso
      p.mb-5(data-aos="fade-left") En el proceso de formación, aprender a tomar correctamente el pulso es una habilidad básica para cualquier disciplina relacionada con la salud, el deporte o el bienestar. La técnica adecuada incluye:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Utilizar los dedos índice y medio (nunca el pulgar).
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Localizar arterias superficiales como la radial (muñeca), carótida (cuello), braquial (interior del brazo) o femoral (ingle).
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Contar las pulsaciones durante 15 segundos y multiplicar por 4, o durante un minuto completo para mayor precisión.
            li.d-flex
              i.fas.fa-circle-check.icon-list
              p.mb-0 Realizar la medición en condiciones adecuadas (reposo o actividad, según el objetivo).

        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/33.png', alt='')


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Relevancia educativa y de autocuidado

      p.mb-5(data-aos="fade-left") En contextos educativos, la enseñanza del concepto de pulso permite desarrollar habilidades para:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-7
          ul.lista-ul--color.list-cus.mb-0
            li.d-flex.bg-color-15.pc-3
              i.fas.fa-circle-check.icon-list
              p.mb-0 Promover el autocuidado y la autorregulación del ejercicio físico.
            li.d-flex.pc-3
              i.fas.fa-circle-check.icon-list
              p.mb-0 Detectar señales tempranas de riesgo cardiovascular.
            li.d-flex.bg-color-15.pc-3
              i.fas.fa-circle-check.icon-list
              p.mb-0 Fomentar hábitos saludables relacionados con el control del estrés y la actividad física.
            li.d-flex.pc-3
              i.fas.fa-circle-check.icon-list
              p.mb-0 Comprender cómo responde el cuerpo al esfuerzo, facilitando una mejor planificación del entrenamiento.

        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/34.png', alt='')



      .tarjeta.bg-fondo-2.p-3.mb-0(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 El pulso y sus manifestaciones
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_7_El_pulso_y_sus_manifestaciones.pdf')" target="_blank")
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
