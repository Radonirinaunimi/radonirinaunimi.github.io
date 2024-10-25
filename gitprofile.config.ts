// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'radonirinaunimi', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'NNPDF/nnpdf',
          'NNPDF/pineappl',
          'NNPDF/nnusf',
          'NNPDF/yadism',
          'NNPDF/HpT-N3LO',
          'Radonirinaunimi/cmpx-spfunc',
          'Radonirinaunimi/dotfiles',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Tanjona R. Rabemananjara',
    twitter: '@Tanjona_Phys',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://radonirinaunimi.github.io',
    phone: '',
    email: 't.rabemananjara@nikhef.nl',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Rust',
    'Python',
    'C++',
    'C++',
    'Fortran',
    'Julia',
    'R',
    'Mathematica',
    'CSS',
    'HTML',
    'LaTeX',
    'Tensorflow',
    'Keras',
    'Pytorch',
    'GNU/Linux',
  ],
  experiences: [
    {
      company: 'Nikhef (Dutch National Institute for Subatomic Physics)',
      position: 'Research Associate',
      from: 'November 2021',
      to: 'Present',
      companyLink: 'https://www.nikhef.nl/en/',
    },
    {
      company: 'Vrije Universiteit Amsterdam',
      position: 'Research Associate',
      from: 'November 2021',
      to: 'Present',
      companyLink: 'https://vu.nl/en',
    },
    {
      company: 'University of Amsterdam',
      position: 'Teaching Assisstant for ML',
      from: 'September 2022',
      to: 'October 2022',
      companyLink: 'https://www.uva.nl/en',
    },
    {
      company: 'Unviersity of Milan',
      position: 'Teaching Assistant for QFT',
      from: 'March 2021',
      to: 'July 2021',
      companyLink: 'https://www.unimi.it/en',
    },
    {
      company: 'Unviersity of Milan',
      position: 'Teaching Assistant for QFT',
      from: 'March 2019',
      to: 'July 2019',
      companyLink: 'https://www.unimi.it/en',
    },
    {
      company: 'Universtiy of Cape Town',
      position: 'Teaching Assistant for QFTII',
      from: 'October 2017',
      to: 'December 2017',
      companyLink: 'https://uct.ac.za/',
    },
    {
      company: 'CERN',
      position: 'Summer Intern',
      from: 'June 2016',
      to: 'August 2016',
      companyLink: 'https://home.cern/',
    },
  ],
  certifications: [
    {
      name: 'Research Integrity',
      body: 'Natural and Phyiscal Sciences',
      year: 'December 2019',
      link: 'https://www.ox.ac.uk/',
    },
  ],
  educations: [
    {
      institution: 'University of Milan',
      degree: 'PhD in Theoretical Physics',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Universtiy of Cape Town',
      degree: 'MSc in Theoretical Physics',
      from: '2017',
      to: '2018',
    },
    {
      institution: 'Stellenbosch University',
      degree: 'MSc in Mathematical Sciences',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'University of Antananarivo',
      degree: 'Maitrise in Physics & Chemistry',
      from: '2012',
      to: '2016',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi', // 'lofi'

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
