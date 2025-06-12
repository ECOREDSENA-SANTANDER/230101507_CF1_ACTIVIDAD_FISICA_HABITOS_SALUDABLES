<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Hábitos saludables
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-11.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p La Organización Mundial de la Salud (OMS) define la salud como un estado de completo bienestar físico, mental y social, y no solamente como la ausencia de enfermedades, esta visión integral invita a comprender la salud como una experiencia de equilibrio en todas las dimensiones del ser humano: el cuerpo, la mente, las emociones y las relaciones sociales, por ello, hablar de salud también significa hablar de los estilos de vida que adoptamos cada día, los cuales pueden proteger, mantener o deteriorar nuestro bienestar a lo largo del tiempo.
          p.mb-0 Los estilos de vida saludables se refieren al conjunto de comportamientos y decisiones que las personas asumen voluntariamente y que, cuando se practican de forma constante, contribuyen al desarrollo de una vida sana, plena y con mejor calidad. En el entorno educativo, adquirir estos conocimientos desde la etapa estudiantil es clave para formar ciudadanos conscientes, autónomos y comprometidos con su propio bienestar y el de su comunidad.
        
      .row.justify-content-center.mb-5.bg-color-4.br-3.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t3/2.svg', alt='')
        .col-sm-12.col-lg-11
          .py-5
            p.mb-0 Desde esta perspectiva, los hábitos saludables son rutinas cotidianas que influyen directamente en la salud física, mental, emocional y social, se construyen a través de la repetición, la educación, el ejemplo familiar y la interacción con el entorno. Aprender a consolidar estos hábitos desde temprana edad no solo previene enfermedades, sino que también favorece el rendimiento académico, la autoestima, el autocontrol y las relaciones positivas con los demás.
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Principales hábitos saludables y su impacto en la vida diaria
  
  
      .bg-full-width.bg-fondo-3.mb-5(data-aos="fade-left")
        .px-4.px-md-5.py-3
          .tarjeta.bg-color-white.py-4.px-5
            SlyderA(tipo="b")
              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Alimentación saludable
                  p Una nutrición adecuada permite que el cuerpo funcione de manera óptima, incluir frutas, verduras, proteínas magras, legumbres, cereales integrales y grasas saludables proporciona energía, mejora la concentración, fortalece el sistema inmune y previene enfermedades como la anemia, la obesidad, la hipertensión o la diabetes.
                  p.mb-0 Ejemplo: reemplazar las gaseosas por agua natural o jugos sin azúcar; llevar frutas al colegio como merienda en vez de snacks ultraprocesados.
 
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/3.png', alt='')


              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Balance energético
                  p Es el equilibrio entre las calorías que se consumen mediante los alimentos y las que se gastan en las actividades diarias, un balance correcto ayuda a mantener un peso saludable y a prevenir tanto la desnutrición como el sobrepeso.
                  p.mb-0 Ejemplo: si se consume una comida alta en calorías, es importante realizar alguna actividad física para equilibrar el gasto energético.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/4.png', alt='')

              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Actividad física regular
                  p Mover el cuerpo diariamente mejora la salud muscular, ósea, cardiovascular y emocional, no es necesario practicar deportes de alto rendimiento; caminar al colegio, jugar con amigos, bailar o montar bicicleta son formas válidas y efectivas, la actividad física ayuda a reducir el estrés, mejora el estado de ánimo y fortalece la autoestima.
                  p.mb-0 Ejemplo: subir escaleras en lugar de usar el ascensor, jugar en el recreo en vez de permanecer sentado.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/5.png', alt='')

              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Descanso reparador
                  p.mb-0 Dormir entre 7 y 9 horas diarias permite al cuerpo recuperarse, asimilar lo aprendido durante el día, regular emociones y mantener el sistema inmune fuerte. El sueño es tan importante como la alimentación o el ejercicio.
                  p.mb-0Ejemplo: evitar el uso de pantallas (celular, TV, computador) al menos 30 minutos antes de dormir para mejorar la calidad del sueño.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/6.png', alt='')


              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Higiene personal y del entorno
                  p.mb-0 La limpieza del cuerpo, la ropa, los espacios y los objetos personales ayuda a prevenir enfermedades y promueve una imagen positiva de uno mismo, incluye hábitos como el lavado de manos, la ducha diaria, el cepillado dental, el corte de uñas y la limpieza del entorno escolar y familiar.
                  p.mb-0 Ejemplo: lavarse las manos antes de comer y después de ir al baño, cepillarse los dientes tres veces al día.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/7.png', alt='')


              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Autocuidado emocional
                  p Reconocer lo que sentimos, hablar sobre nuestras emociones, buscar ayuda cuando es necesario y saber manejar el estrés y los conflictos son elementos esenciales del bienestar emocional. La salud mental es parte fundamental de una vida saludable.
                  p.mb-0 Ejemplo: conversar con una persona de confianza cuando se está triste, frustrado o enojado, en lugar de reprimir lo que se siente.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/8.png', alt='')


              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Relaciones sanas y entornos positivos
                  p Las amistades, el respeto por los demás, la comunicación asertiva y el buen trato fortalecen la salud social, estar rodeado de personas que nos valoran, escuchar y ser escuchados, y vivir en un entorno libre de violencia son factores clave para crecer en armonía.
                  p.mb-0 Ejemplo: evitar el bullying, practicar la empatía y colaborar en las tareas escolares en equipo.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/9.png', alt='')


              .row.justify-content-center.mb-0.pc-2.pt-4
                .col-sm-12.col-lg-8
                  h4.mb-5 Organización y hábitos de estudio
                  p.mb-0 Un estilo de vida saludable también implica aprender a distribuir bien el tiempo, equilibrando el estudio con el descanso y el ocio, planificar tareas, evitar la procrastinación y respetar horarios son hábitos que favorecen tanto la salud mental como el rendimiento académico.
                  p.mb-0 Ejemplo: hacer una lista de tareas pendientes y establecer horarios para estudiar, descansar y divertirse.

                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/10.png', alt='')















  
  
  
  
      .row.justify-content-center.mb-5.bg-color-5.br-6.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img.m-auto(src='@/assets/curso/temas/t1/17.svg', alt='')
        .col-sm-12.col-lg-10
          .py-5
            p.mb-0 Los hábitos saludables no solo son prácticas beneficiosas para el cuerpo y la mente, sino también expresiones de autocuidado, responsabilidad y amor propio; adoptarlos desde la etapa temprana permite no solo prevenir enfermedades, sino también construir una vida con mayor bienestar, equilibrio y propósito. Aprender a tomar decisiones conscientes en cuanto a la alimentación, el descanso, la actividad física, la higiene, el manejo de emociones y el estudio es una inversión en el presente y en el futuro. La salud no es un destino, sino un camino que se recorre día a día, y cada elección cuenta.

      .tarjeta.bg-fondo-2.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/bg/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
                p.mb-0.bg-color-9 Alimentación y hábitos saludables
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_Alimentacion_y_habitos_saludables.pdf')" target="_blank")
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
