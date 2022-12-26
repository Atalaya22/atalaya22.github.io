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
    '3D Artist and Video Game Developer',
  skills: [
    {
      name: '3DS Max',
      iconSrc: 'assets/images/logos/3dsmax.png',
    },
    {
      name: 'Photoshop',
      iconSrc: 'assets/images/logos/photoshop.png',
    },
  ],
  contactForms: [
    {
      name: 'Artstation',
      linkToSource: 'https://joaquinvillena.artstation.com/',
      iconSrc: 'assets/images/logos/artstation.png',
    },
    {
      name: 'Mail',
      linkToSource: 'mailto:ejvillena22@gmail.com',
      iconSrc: 'assets/images/logos/mail.png',
    },
  ],
};
