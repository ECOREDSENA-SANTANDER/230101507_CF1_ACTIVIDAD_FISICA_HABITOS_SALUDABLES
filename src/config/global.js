export default {
  global: {
    Name: 'Promoción del bienestar físico y hábitos saludables',
    Description:
      'Para favorecer la apropiación de competencias básicas en el proceso de formación profesional integral, es fundamental brindar herramientas que promuevan el bienestar físico y mental. Estas herramientas no solo fortalecen el desempeño en el ámbito laboral, sino que también contribuyen a una mejor calidad de vida personal y social, fomentando estilos de vida saludables, la autorregulación y el cuidado del cuerpo como base para un desarrollo integral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de psicomotricidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Habilidades psicomotrices básicas y específicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Las habilidades del pensamiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Nutrición e higiene',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Consumo y gasto calórico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Contenido calórico de alimentos según su grupo y preparación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Hábitos saludables',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Adecuación física para la vida',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ergonomía',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Adecuación física para la vida.',
      referencia: 'Ministerio del Deporte. (2025). Actividad Física.',
      tipo: 'Articulo',
      link:
        'https://www.mindeporte.gov.co/mindeporte/quienes-somos/dependencias/direccion-fomento-desarrollo/actividad-fisica-3',
    },
    {
      tema: 'Hábitos saludables.',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Actividad física.',
      tipo: 'Articulo',
      link:
        'https://www.minsalud.gov.co/salud/Paginas/Actividad-F%C3%ADsica.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar',
      significado: 'estado general de equilibrio físico, mental y social.',
    },
    {
      termino: 'Hábitos',
      significado:
        'conductas repetidas que influyen en la salud y el estilo de vida.',
    },
    {
      termino: 'Salud',
      significado: 'estado integral de bienestar físico, emocional y social.',
    },
    {
      termino: 'Motricidad',
      significado: 'capacidad de movimiento del cuerpo humano.',
    },
    {
      termino: 'Nutrición',
      significado:
        'proceso mediante el cual el cuerpo obtiene y utiliza nutrientes.',
    },
    {
      termino: 'Alimentación',
      significado: 'ingesta de alimentos para cubrir necesidades biológicas.',
    },
    {
      termino: 'Higiene',
      significado:
        'conjunto de prácticas para conservar la salud y prevenir enfermedades.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'ciencia que adapta el trabajo y los entornos al cuerpo humano.',
    },
    {
      termino: 'Postura',
      significado: 'posición que adopta el cuerpo en reposo o movimiento.',
    },
    {
      termino: 'Calorías',
      significado: 'unidad de medida de la energía que aportan los alimentos.',
    },
    {
      termino: 'Condición',
      significado:
        'estado físico general del cuerpo en relación con sus capacidades.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso de medición para conocer el estado de una capacidad o condición.',
    },
    {
      termino: 'Ejercicio',
      significado:
        'actividad física planificada para mejorar o mantener la salud.',
    },
    {
      termino: 'Pulso',
      significado:
        'movimiento rítmico de las arterias que refleja la actividad cardíaca.',
    },
    {
      termino: 'Descanso',
      significado:
        'tiempo destinado a la recuperación física y mental del organismo.',
    },
  ],
  referencias: [
    {
      referencia: 'Alimentación y Vida Saludable. (s.f). Calameo.',
      link: 'https://www.calameo.com/read/0058856274f6fc76ba867',
    },
    {
      referencia:
        'Vieyra, M. (2017). PRUEBAS (TESTS) DE VALORACION DE LA CONDICION FISICA.',
      link:
        'https://www.academia.edu/31039110/PRUEBAS_TESTS_DE_VALORACION_DE_LA_CONDICION_FISICA',
    },
    {
      referencia:
        'Asociación Española de Ergonomía. (s.f).¿Qué es la ergonomía?.',
      link: 'http://www.ergonomos.es/ergonomia.php',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Decálogo de una Alimentación saludable.',
      link:
        'https://www.minsalud.gov.co/salud/Paginas/alimentacion-saludable.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Daniel Alberto Beltrán Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroindustrial y Empresarial -  Regional Cundinamarca',
        },
        {
          nombre: 'Laura Paola Gelvez Monsalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
