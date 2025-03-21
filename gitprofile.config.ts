// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'radonirinaunimi', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Sample of Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
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
          'N3PDF/ganpdfs',
          'N3PDF/pycompressor',
          'NNPDF/HpT-N3LO',
          'NNPDF/HpT-MON',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Selected Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ensemble ML Hyperoptimisation with Hardware Acceleration',
          description:
            'Harnessing the full power of hardware acceleration such as GPUs to hyperoptimise ML models using ensemble-based metrics with paralle exploration of the hyperparameter space using MongoDB.',
          imageUrl:
            'https://i.postimg.cc/QMzMrrSS/Screenshot-2025-03-10-at-22-54-41.png',
          link: 'https://arxiv.org/abs/2410.16248',
        },
        {
          title: 'Neutrino Structure Functions from Neural Network methods',
          description:
            'A machine learning framework that povides predictions for neutrino inelastic structure functions valid for the complete range of energies relevant for phenomenology involving neutrino experiments.',
          imageUrl:
            'https://i.postimg.cc/G2smLS5R/Screenshot-2025-03-10-at-22-52-37.png',
          link: 'https://doi.org/10.1007/JHEP05(2023)149',
        },
        {
          title:
            'Generative Adversarial Networks (GANs) for Parton Distribution Functions',
          description:
            'A framework to bootstrap Monte Carlo (MC) based Parton Distribution Functions (PDFs) using generative adversarial techniques by enhancing the statistics of the prior PDF through generation of artifical replicas.',
          imageUrl:
            'https://i.postimg.cc/Ls5s7skn/Screenshot-2025-03-10-at-22-55-39.png',
          link: 'https://doi.org/10.1140/epjc/s10052-021-09338-8',
        },
        {
          title: 'Compression algorithm for Parton Distribution Functions',
          description:
            'A compression algorithm for Parton Distribution Functions (PDFs) that extracts from an initial set of Monte Carlo (MC) replicas a subset that most truthfully reproduces the statistical properties of the prior.',
          imageUrl:
            'https://i.postimg.cc/rwQmQ4rB/Screenshot-2025-03-10-at-22-57-03.png',
          link: 'https://doi.org/10.1140/epjc/s10052-021-09338-8',
        },
      ],
    },
  },
  seo: {
    title: 'Tanjona R.',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Tanjona R. Rabemananjara',
    twitter: '@Tanjona_Phys',
    website: 'https://radonirinaunimi.github.io',
    phone: '',
    email: 'rrabeman@nikhef.nl',
  },
  resume: {
    fileUrl: 'https://tanjona-cv.tiiny.site', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Rust',
    'Python',
    'C++',
    'C++',
    'Fortran',
    'Julia',
    'R',
    'Azure',
    'Docker',
    'MongoDB',
    'CUDA',
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
      title:
        'Hyperparameter Optimisation in Deep Learning from Ensemble Methods: Applications to Proton Structure',
      conferenceName: '',
      journalName: 'arXiv:2410.16248',
      authors:
        'Juan Cruz-Martinez, Aron Jansen, Gijs van Oord, Tanjona R. Rabemananjara, Carlos M. R. Rocha, Juan Rojo, Roy Stegeman',
      link: 'https://arxiv.org/abs/2410.16248',
      description:
        'Deep learning models are defined in terms of a large number of hyperparameters, such as network architectures and optimiser settings. These hyperparameters must be determined separately from the model parameters such as network weights, and are often fixed by ad-hoc methods or by manual inspection of the results. An algorithmic, objective determination of hyperparameters demands the introduction of dedicated target metrics, different from those adopted for the model training. Here we present a new approach to the automated determination of hyperparameters in deep learning models based on statistical estimators constructed from an ensemble of models sampling the underlying  probability distribution in model space. This strategy requires the simultaneous parallel training of up to several hundreds of models and can be effectively implemented by deploying hardware accelerators such as GPUs. As a proof-of-concept, we apply this method to the determination of the partonic substructure of the proton within the NNPDF framework and demonstrate the robustness of the resultant model uncertainty estimates. The new GPU-optimised NNPDF code results in a speed-up of up to two orders of magnitude, a stabilisation of the memory requirements, and a reduction in energy consumption of up to 90% as compared to sequential CPU-based model training. While focusing on proton structure, our method is fully general and is applicable to any deep learning problem relying on hyperparameter optimisation for an ensemble of models.',
    },
    {
      title: 'Neutrino Structure Functions from GeV to EeV Energies',
      conferenceName: '',
      journalName: 'Journal of High Energy Physics',
      authors:
        'Alessandro Candido, Alfonso Garcia, Giacomo Magni, Tanjona Rabemananjara, Juan Rojo, Roy Stegeman',
      link: 'https://link.springer.com/article/10.1007/JHEP05(2023)149',
      description:
        'The interpretation of present and future neutrino experiments requires accurate theoretical predictions for neutrino-nucleus scattering rates. Neutrino structure functions can be reliably evaluated in the deep-inelastic scattering regime within the perturbative QCD (pQCD) framework. At low momentum transfers (Q2 ≤ few GeV2), inelastic structure functions are however affected by large uncertainties which distort event rate predictions for neutrino energies Eν​up to the TeV scale. Here we present a determination of neutrino inelastic structure functions valid for the complete range of energies relevant for phenomenology, from the GeV region entering oscillation analyses to the multi-EeV region accessible at neutrino telescopes. Our NNSFν approach combines a machine-learning parametrisation of experimental data with pQCD calculations based on state-of-the-art analyses of proton and nuclear parton distributions (PDFs). We compare our determination to other calculations, in particular to the popular Bodek-Yang model. We provide updated predictions for inclusive cross sections for a range of energies and target nuclei, including those relevant for LHC far-forward neutrino experiments such as FASERν, SND@LHC, and the Forward Physics Facility. The NNSFν determination is made available as fast interpolation LHAPDF grids, and can be accessed both through an independent driver code and directly interfaced to neutrino event generators such as GENIE.',
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
    defaultTheme: 'dark', // 'lofi'

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

  enablePWA: true,
};

export default CONFIG;
