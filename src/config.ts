import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'H4RCK1',
  subtitle: 'Cybersecurity',
  lang: 'en',
  themeColor: {
    hue: 235, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/test.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [
    {
      src: '/favicon/favicon-32x32.png', // Path of the favicon, relative to the /public directory
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/h4rck1/blog',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/H4RCK1_cut.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'H4RCK1',
  bio: 'White hacker in proccess',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/h4rck1',
    },
  ],
  quotes: {
    es: [
      'Haz que tus desiciones sean reflejo de tus esperanzas, no de tus miedos.',
      'Cuanto más tardemos en hacer nuestra gran huida, más seremos conducidos a un rincón.',
      'Quizá no sea brillante… pero daré todo de mí.',
      'Nadie puede decir cuál es la elección idónea. Sólo elige la que más te guste.',
      'La excelencia no es un acto, sino un hábito.',
      'Intercambia tu ingenio por desconcierto.',
      'No imites, entiende.',
      'Muestra, no hables.',
      'Él compromiso con el proceso es lo que determina el progreso.',
      'Sé tu mismo, la gente correcta vendra automáticamente.',
      'El mayor error que puedas cometer es pensar continúamente que cometerás uno.',
      'No limites tus desafíos, desafía tus límites.',
      'Un problema es un estado emocional. Sin emociones, es sólo una situación.',
      'El progreso se nota cuando la pregunta que nos torturaba ha perdido su significado.',
      'La diferencia entre un ganador y un perdedor es que el ganador ha perdido más veces que el perdedor.',
    ],
    en: [
      'Make your decisions reflect your hopes, not your fears.',
      'The longer it takes us to make our great escape, the more we will be driven into a corner.',
      'I may not be brilliant... but I will give it my all.',
      'No one can say which is the ideal choice. Just choose the one you like the most.',
      'Excellence is not an act, but a habit.',
      'Exchange your wit for bewilderment.',
      'Do not imitate, understand.',
      "Show, don't tell.",
      'Commitment to the process is what determines progress.',
      'Be yourself, the right people will automatically come.',
      'The biggest mistake you can make is to continually think that you will make one.',
      "Don't limit your challenges, challenge your limits.",
      "A problem is an emotional state. Without emotions, it's just a situation.",
      'Progress is noticed when the question that tortured us has lost its meaning.',
      'The difference between a winner and a loser is that the winner has lost more times than the loser.',
    ],
  },
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
