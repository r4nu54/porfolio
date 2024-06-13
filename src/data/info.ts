export const info = {
  baseUrl: '',
  name: 'Raúl Núñez',
  title: 'Porfolio de Raúl Núñez',
  jobDescription: 'Web Developer',
  about: ` Desde pequeño en contacto con la tecnología, +20 años de experiencia como técnico IT en una
        gran empresa nacional, ahora buscando mi sitio como desarrollador web. Estudiante full-time de Benalmádena,
        España.
  `,

  experience: [
    {
      name: 'Freelance Web Developer',
      startDate: 'Junio 2023',
      endDate: 'Presente',
      description: [],
    },

    {
      name: 'My Site Works, S.L. - Web Developer',
      startDate: 'Marzo 2023',
      endDate: 'Junio 2023',
      description: [
        '▪️ Implementación de nuevos componentes a los proyectos de la empresa.',
        '▪️ Ayudando y aprendiendo de otros compañeros.',
        '▪️ Mejoras y refactorización del código. ',
        '▪️ Buenas prácticas y mantenimiento de normas.',
      ],
    },
  ],

  education: [
    {
      name: 'Máster Front End XV - Lemoncode Formación, S.L.',
      startDate: 'Octubre 2023',
      endDate: 'Presente',
      description: [
        'Máster para afianzar mis conocimientos, usando las siguientes tecnologias (React, Nextjs, Angular, Svelte, Vuejs, Flexbox, CSS Grid, Material Design, Jest, Cypress, Webpack, Vite, HTML5, CSS, JavaScript, TypeScript, d3js, CSS in JS, GraphQL, Blazor, Web Components, socket.io, Git, Github Actions.)',
      ],
    },
    {
      name: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW) - Medac, S.L.',
      startDate: 'Octubre 2021',
      endDate: 'Junio 2023',
      description: [
        'El Ciclo Formativo de Desarrollo de Aplicaciones Web oficial por la Juanta de Andalucia en la rama de Informática. La metodología del curso, se centra en aspectos clave del desarrollo front-end, sin descuidar los elementos esenciales del back-end, así como aspectos transversales como bases de datos y sistemas informáticos. ',
      ],
    },
  ],

  socialMedia: {
    twitter: 'https://twitter.com/ranusa',
    github: 'https://github.com/R4NU54',
    email: 'mailto:raul.nunez.santiago@outlook.es',
    linkedin: 'https://www.linkedin.com/in/raulnunezsantiago',
    cv: '/assets/Cv_Raul_Nunez_Santiago.pdf',
  },

  projects: [
    {
      title: 'A simple Mapbox Api Web App.',
      isFeatured: true,
      thumbnail: '/assets/images/MapsAppWeb.webp',
      githubUrl: 'https://github.com/R4NU54/MapsApp',
      liveUrl: 'https://angular16maps.netlify.app//',
    },
    {
      title: 'Raúl Núñez Portfolio',
      isFeatured: false,
      thumbnail: '/assets/images/astro-portfolio.webp',
      githubUrl: 'https://github.com/r4nu54/porfolio',
      liveUrl: 'https://raulnunez.es/',
    },
  ],
};
