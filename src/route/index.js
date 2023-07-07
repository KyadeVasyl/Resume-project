// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Khust',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project.Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
    for such events like: money line - first win / draw / second win, totals etc.`,
      },

    },

    footer,
  })
})


// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {

      hobbies: [
        {
          name: 'Learning & teaching English',
          isMain: false,
        },

        {
          name: 'Swimming',
          isMain: true,
        },

        {
          name: 'Dancing',
          isMain: true,
        },
      ],

      skills: [
        {
          name: 'HTML',
          point: 5,
          isTop: true,
        },
        {
          name: 'HBS',
          point: 5,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 5,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 4,
        },
        {
          name: 'Git',
          point: 4,
        },

        {
          name: 'React.js',
          point: 0,
        },

        {
          name: 'PHP',
          point: null,
        },
      ],
    },
    footer,
  })
})


router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'University of Cambridge',
          isEnd: true,
        },

        {
          name: 'University of Oxford',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'English teacher',
          id: 44,
        },

        {
          name: 'Full stack developer',
          id: 45,
        },

        {
          name: 'Sales bootcamp',
          id: 46,
        },
      ],

    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack ',
          company: {
            name: 'DCoast',
            url: null,
          },
          duration: {
            from: 'november 2021',
            to: null,
          },
          projectAmount: 3,

          projects: [{
            name: 'Pop game',
            url: 'allo.ua',
            about: 'Create a visual an advertising campaign to attract new players. Design email newsletters according to scenarios. Creating custom icons.',
            stacks: [{
              name: 'React.js',
              stackAmount: 22,
            },
            {
              name: 'HTML / CSS',
              stackAmount: 11,
            },
            ],
            awards: [
              {
                name: 'Blabla 2023',
                awardAmount: 2,
              },
              {
                name: 'Bla 2022',
                awardAmount: 1,
              },
            ],
          }],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
