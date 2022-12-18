export interface ProfileInfo {
  name: string;
  description: string;
  skills: Skill[];
  contactForms: ContactForm[];
}

export interface Skill {
  name: string;
  iconSrc: string;
}

export interface ContactForm {
  name: string;
  iconSrc: string;
  linkToSource: string;
}

export const PROFILE_INFO: ProfileInfo = {
  name: 'Joaquín Villena',
  description:
    'Elit velit laboris laboris deserunt voluptate fugiat occaecat minim laboris voluptate. ' +
    'Adipisicing aliquip labore do ipsum voluptate ex dolore. Id dolor id exercitation minim. ' +
    'Fugiat do veniam anim non cupidatat est do ea minim. Velit laborum deserunt amet sit nulla ' +
    'cupidatat ullamco ex. Irure esse dolor reprehenderit deserunt excepteur anim deserunt exercitation. ' +
    'Et adipisicing sit laboris ad commodo qui voluptate incididunt ad sunt amet sit velit.',
  contactForms: [
    {
      name: 'Artstation',
      linkToSource: 'https://joaquinvillena.artstation.com/',
      iconSrc: 'assets/images/logos/artstation.png',
    },
  ],
  skills: [
    {
      name: '3DS Max',
      iconSrc: 'assets/images/logos/3dsmax.png',
    },
  ],
};
