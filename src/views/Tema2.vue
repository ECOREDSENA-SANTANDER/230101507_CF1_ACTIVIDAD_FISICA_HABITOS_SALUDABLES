<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Nutrición e higiene
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')
        .col-sm-12.col-lg-7
          p La nutrición y la higiene son pilares fundamentales para el mantenimiento de la salud y el bienestar integral. Una alimentación equilibrada y adecuada, junto con hábitos de higiene personal y ambiental, contribuyen a prevenir enfermedades, fortalecer el sistema inmunológico y promover un desarrollo físico y mental óptimo. Abordar estos aspectos desde una perspectiva educativa permite fomentar estilos de vida saludables desde edades tempranas y en todos los contextos sociales.
          img.d-none.d-lg-block.hcard-2(src='@/assets/curso/temas/t2/2.svg', alt='')
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Conceptos de alimentación y nutrición
      p.mb-5 La nutrición es un proceso biológico esencial mediante el cual los organismos incorporan y utilizan los nutrientes presentes en los alimentos y líquidos para garantizar su crecimiento, desarrollo, funcionamiento y mantenimiento de las funciones vitales. Además de ser un proceso fisiológico, la nutrición es una ciencia que estudia la relación entre los alimentos, la salud y el bienestar, orientando la adopción de hábitos alimentarios adecuados y sostenibles a lo largo de la vida.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Según la Real Academia Española (RAE), la nutrición implica la ingesta de alimentos de acuerdo con las necesidades dietéticas específicas de cada organismo. En este sentido, una alimentación equilibrada no solo debe satisfacer los requerimientos energéticos, sino también contribuir a la prevención de enfermedades, la mejora del rendimiento físico y mental, y la calidad de vida en general.
      
      .row.justify-content-center.mb-5.bg-color-5.br-6.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t2/4.svg', alt='')
        .col-sm-12.col-lg-10
          .py-5
            p.mb-0 Una herramienta educativa ampliamente utilizada para orientar la alimentación saludable es la pirámide alimentaria, la cual organiza los alimentos en grupos y establece proporciones recomendadas de consumo diario o semanal. Esta pirámide promueve variedad, equilibrio y moderación, permitiendo seleccionar alimentos dentro de cada grupo según las preferencias, necesidades individuales y contexto cultural. En la actualidad, este modelo ha evolucionado en muchas regiones hacia guías más visuales como el “plato saludable” o el “plato del buen comer”, que enfatizan no solo la cantidad, sino también la calidad nutricional y la frecuencia del consumo.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Figura 2.] Pirámide alimenticia
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/5.svg', alt='Pirámide alimenticia con porcentajes sugeridos de consumo, desde cereales en la base (30 %) hasta dulces en la cima (10 %).')
      
      
      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 La pirámide de la alimentación
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_La_piramide_de_la_alimentacion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      p.mb-0(data-aos="fade-left") En el ámbito educativo y comunitario, la pirámide alimentaria sigue siendo un recurso didáctico eficaz para promover estilos de vida saludables, enseñar a combinar adecuadamente los alimentos y fomentar una conciencia crítica frente a la alimentación en contextos de cambio social, económico y cultural.
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Consumo y gasto calórico
      .row.justify-content-center.mb-5.bg-color-10.pc-1

        .col-sm-12.col-lg-8
            .bg-color-white.p-4
              p Las calorías son la unidad de medida utilizada para cuantificar la energía que el cuerpo obtiene a partir de los alimentos y bebidas. Este término fue introducido por primera vez en 1824 por el profesor Nicolas Clément, y desde mediados del siglo XIX se incorporó en los diccionarios científicos de Europa. En la actualidad, el término técnico correcto es kilocaloría (kcal), que equivale a la cantidad de energía necesaria para elevar en un grado centígrado la temperatura de un kilogramo de agua.
              p.mb-0 Cuando una persona consume alimentos, incorpora energía en forma de calorías almacenadas en los enlaces químicos de nutrientes como los carbohidratos, las grasas y las proteínas. Durante el proceso digestivo, estos nutrientes se descomponen y liberan esa energía, que luego es utilizada por el cuerpo para diferentes funciones.
        .col-sm-12.col-lg-4.d-none.d-lg-block.bg-color-2.br-1
          img(src='@/assets/curso/temas/t2/6.svg', alt='')
      p El gasto calórico se refiere a la cantidad de energía que el organismo utiliza para mantenerse en funcionamiento y realizar actividades físicas. Esta energía se emplea principalmente de tres formas:
      
      .row.mb-5(data-aos="fade-left")
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm.d-none.d-lg-block
                .col-sm-12.col-md-3.col-lg-5.m-auto
                    img(src='@/assets/curso/temas/t2/7.svg', alt='')
            .bg-color-white.mb-4(data-aos="fade-left")
              h3.px-3.py-1.text-center Metabolismo basal
            p.mb-0.text-center Es el gasto energético necesario para mantener funciones vitales en reposo, como la respiración, la circulación y la actividad celular.

        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm.d-none.d-lg-block
                .col-sm-12.col-md-3.col-lg-5.m-auto
                    img(src='@/assets/curso/temas/t2/8.svg', alt='')
            .bg-color-white.mb-4(data-aos="fade-left")
              h3.px-3.py-1.text-center Actividad física
            p.mb-0.text-center Incluye todas las acciones corporales, desde caminar y realizar tareas cotidianas hasta hacer ejercicio estructurado.
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.br-5.p-3.p-md-3.p-lg-5
            .row.align-items-center.my-4.justify-content-center.align-items-center.hide-icon-sm.d-none.d-lg-block
                .col-sm-12.col-md-3.col-lg-5.m-auto
                    img(src='@/assets/curso/temas/t2/9.svg', alt='')
            .bg-color-white.mb-4(data-aos="fade-left")
              h3.px-3.py-1.text-center Efecto térmico de los alimentos
            p.mb-0.text-center Es la energía requerida para digerir, absorber y metabolizar los nutrientes consumidos.

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 3.] Dime qué comes y te diré quién eres 
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/10.svg', alt='Distribución del gasto energético: 70 % metabolismo basal, 20 % actividad muscular y 10 % digestión, con ilustración de niños comiendo.')



      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus.bg-color-3.br-1
          .p-4.align-items-center
            p.mb-0.mt-3 Mantener un equilibrio entre el consumo y el gasto calórico es fundamental para conservar un peso saludable y prevenir enfermedades relacionadas con el exceso o déficit de energía, como la obesidad o la desnutrición. La educación nutricional debe enfocarse en promover una alimentación balanceada y una vida activa que permita un manejo adecuado del balance energético individual.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          .bg-color-8.p-3
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
        .col-sm-12.col-lg-4
           p.mb-2 Cuando se habla de “calorías”, se hace referencia a la cantidad de energía que aportan los alimentos al organismo. Esta energía, proveniente de los diferentes grupos alimentarios, debe ser consumida en proporciones adecuadas para garantizar un equilibrio nutricional, especialmente en situaciones de déficit o exceso. Por esta razón, es fundamental conocer cómo combinar los alimentos de forma adecuada para cubrir las necesidades del cuerpo sin generar desbalances.
           img.d-none.d-lg-block(src='@/assets/curso/temas/t2/12.svg', alt='')
      p.mb-5(data-aos="fade-left") Una alimentación saludable no implica la eliminación de ningún grupo alimenticio, ya que no existen alimentos intrínsecamente buenos o malos. El problema radica, en muchos casos, en la cantidad y frecuencia con la que se consumen. La clave está en la moderación, la variedad y la calidad nutricional.
      .bloque-texto-f.color-acento-botones.pt-5.px-5.mb-5(data-aos="fade-left")
        .bloque-texto-f__comillas
          i.fas.fa-quote-left
          i.fas.fa-quote-right
        h4.text-regular.bloque-texto-f__texto Una dieta equilibrada se basa en mantener un balance entre la ingesta calórica y el gasto energético diario, lo cual permite conservar un peso corporal saludable. Este equilibrio se logra mediante un aporte adecuado de los macronutrientes: carbohidratos, proteínas y grasas, cada uno con funciones esenciales en el organismo.
        .bloque-texto-f__autor.mb-3
          h3.mb-4 - Iñárritu, s.f.





      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-12.position-relative
          
          .crd.crd--avatarHorizontal.crd--first.py-4.mb-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/13.svg", alt="alt").img100
              .col
                h5 Agua
                p.mb-0 El consumo de agua es fundamental para el funcionamiento del organismo. Aunque no se considera un nutriente como tal, participa activamente en procesos vitales como la digestión, absorción, transporte de nutrientes, regulación térmica y eliminación de desechos. Se recomienda ingerir al menos dos litros de agua al día, ajustando esta cantidad según la edad, el nivel de actividad física y las condiciones ambientales.
          
          .crd.crd--avatarHorizontal.py-4.mb-4 
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/14.svg", alt="alt").img100
              .col
                h5 Fibra dietaria
                p.mb-0 La fibra es un componente esencial de la alimentación saludable. Aunque no es digerida ni absorbida por el cuerpo, cumple funciones clave en la regulación del tránsito intestinal, el control de la glucosa y el colesterol, y la prevención de enfermedades crónicas. Debe consumirse en cantidades suficientes a través de frutas, verduras, cereales integrales y legumbres, ya que aporta compuestos como la glucosa, lactosa y fructosa en formas beneficiosas para el organismo.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/13.svg", alt="alt").img100
              .col
                h5 Equilibrio de nutrientes
                p.mb-0 Una dieta saludable debe garantizar un equilibrio adecuado entre los diferentes macronutrientes (carbohidratos, proteínas y grasas) y micronutrientes (vitaminas y minerales). Según las recomendaciones de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y la Organización Mundial de la Salud (OMS), los aportes calóricos deben estar equilibrados, considerando las necesidades individuales, el nivel de actividad física y el contexto cultural, para mantener una nutrición óptima y prevenir enfermedades relacionadas con deficiencias o excesos alimentarios.




      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Contenido calórico de alimentos según su grupo y preparación
      p Para mantener una alimentación equilibrada, es fundamental conocer no solo la calidad de los alimentos, sino también su aporte energético. Las calorías que cada alimento proporciona representan la cantidad de energía disponible para el funcionamiento del cuerpo, y su consumo debe ajustarse a las necesidades individuales según la edad, el nivel de actividad física y el estado de salud. 
      .bloque-texto-g.color-secundario.pc-1.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/16.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 A continuación, se presentan diferentes tablas con ejemplos de alimentos agrupados por categorías (legumbres, frutas, verduras, carnes, pescados, bebidas, aperitivos y otros productos varios), junto con su preparación y contenido calórico, lo cual permite tomar decisiones informadas sobre la dieta diaria y fomentar hábitos de vida más saludables.
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Figura 4.] Contenido calórico de alimentos legumbres y frutas
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/17.svg', alt='Tabla comparativa de calorías entre diferentes legumbres cocidas y frutas frescas.')
        .col-sm-12.col-lg-5
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/18.svg', alt='Tabla comparativa de calorías entre diferentes legumbres cocidas y frutas frescas.')

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
            p.mb-0 #[b Figura 5.] Contenido calórico de alimentos verduras y carnes
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/19.svg', alt='Tabla de calorías de verduras según su preparación y sección de carnes con datos erróneos repetidos de frutas frescas.')
        .col-sm-12.col-lg-5
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/20.svg', alt='Tabla de calorías de verduras según su preparación y sección de carnes con datos erróneos repetidos de frutas frescas.')


      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
            p.mb-0 #[b Figura 6.] Contenido de alimentos y bebidas  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/21.svg', alt='Tabla de calorías de distintos tipos de pescados según su preparación y bebidas alcohólicas con sus respectivos aportes calóricos.')
        .col-sm-12.col-lg-5
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/22.svg', alt='Tabla de calorías de distintos tipos de pescados según su preparación y bebidas alcohólicas con sus respectivos aportes calóricos.')

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
            p.mb-0 #[b Figura 7.] Contenido calórico de alimentos aperitivos y varios  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.mb-cus
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/23.svg', alt='Tabla de calorías de aperitivos y alimentos varios como raviolis, chocolate, helado y pizza según su preparación.')
        .col-sm-12.col-lg-5
          figure.mb-0 
            img(src='@/assets/curso/temas/t2/24.svg', alt='Tabla de calorías de aperitivos y alimentos varios como raviolis, chocolate, helado y pizza según su preparación.')
  
      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Consumo y gasto calórico
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4_Consumo_y_gasto_calorico.pdf')" target="_blank")
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
