export const THEME_MODE_KEY = 'appTheme';
export const LANGUAGE_KEY = 'language';
export const TRANSLATION_KEY = 'translations';

export const TRANSLATIONS_STRINGS: {
  [key: string]: {
    [subKey: string]: string;
  };
} = {
  USA: {
    about: 'About',
    projects: 'Projects',
    certifications: 'Certifications',
  },
  BRL: {
    about: 'Sobre mim',
    projects: 'Projectos',
    certifications: 'Certificações',
  },
};

export function scrollIntoSection(section: string): void {
  const elemento = document.getElementById(section);
  if (elemento) {
    const offset = 40;
    const top = elemento.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
