import MetaDefaultImage from '@/assets/images/meta-default.png';
import avatar from '@/assets/images/avatar.jpg';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
};

export type Seo = {
  title: string;
  description: string;
  type?: string;
  keywords?: string;
  canonicalUrl?: string;
  twitter?: {
    creator?: string;
  };
  robots?: string;
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://shengwang-ee.github.io',
  author: {
    avatar,
    name: 'Sheng Wang',
    headline: 'NUAcT Fellow | Integrated Energy Systems',
    username: 'Hydrogen Integration and Resilience',
    location: 'Newcastle upon Tyne, UK',
  },
  seo: {
    title: 'Sheng Wang | Integrated Energy Systems',
    description:
      'Personal website of Sheng Wang featuring research, publications, projects, and professional activities in integrated energy systems.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@shengwang_ee',
    },
    robots: 'index, follow',
  },
};
