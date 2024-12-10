import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export interface Table {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  price1: string;
  price1b: string;
  price2: string;
  price2b: string;
  price3: string;
  price3b: string;
  price4: string;
  price4b: string;
  price5: string;
  price5b: string;
  isDark: boolean;
  classes: string;
  bg: string;
}
export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: Taxonomy;
  /**  */
  tags?: Taxonomy[];
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number | string;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}

export interface Input {
  type: 'text' | 'email' | 'tel' | 'select'; // Añadimos 'select' como tipo permitido
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>; // Añadimos las opciones para los selects
  required?: boolean;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  id: string; // Identificador del formulario
  method: string; // Método del formulario (GET, POST)
  action: string; // URL de destino para el envío del formulario
  inputs: FormInput[]; // Array de campos del formulario
  textarea?: {
    name?: string;
    label: string;
    placeholder?: string;
    rows?: number;
  };
  disclaimer?: {
    label: string;
    required?: boolean;
  };
  button?: string; // Texto del botón
  description?: string; // Descripción del formulario
  requiredFields?: string[]; // Lista de campos obligatorios
}

// WIDGETS
export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
  content?: string;
  actions?: string | CallToAction[];
  image?: string | unknown;
  galleryImages?: { src: string; alt: string }[];
}
type GalleryImages = GalleryImage[];

export interface Team extends Omit<Headline, 'classes'>, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Omit<Headline, 'classes'>, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Omit<Headline, 'classes'>, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

export interface Brands extends Omit<Headline, 'classes'>, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Faqs extends Omit<Headline, 'classes'>, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Content extends Omit<Headline, 'classes'>, Widget {
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

/*

export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {
  
  buttonText?: string;
  options?: Array<{ value: string; label: string; image: string }>;
  method?: string;
  action?: string;
  icon?: string;
  id: string;
  title: string;
  calendarType: string;
  inputs: Array<{
    name: string;
    label: string;
    type: string;
    required?: boolean;
    icon?: string;
    pattern?: string;
    errorMessage?: string;
}

export interface InputOption {
  value: string;
  label: string;
  icon?: string;
}

export interface FormInput {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
  pattern?: string;
  value?: string;
  icon?: string; // Nueva propiedad opcional para el ícono
  calendarType?: string;
}
*/

// types.d.ts
export interface InputField {
  name?: string;
  label?: string;
  type?: string;
  icon?: string;
  required?: boolean;
  value?: string;
}

// Definición del tipo InputField para admitir múltiples tipos de input, incluyendo select
export type InputField =
  | {
      name: string;
      label: string;
      type: 'text' | 'email' | 'tel' | 'hidden';
      required?: boolean;
      icon?: string;
      value?: string;
      options?: never; // `options` no está permitido en estos tipos
    }
  | {
      name: string;
      label: string;
      type: 'select';
      required?: boolean;
      options: { value: string; label: string }[]; // Opciones para el select
    };

export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {
  id?: string;
  title?: string;
  calendarType?: string;
  inputs?: InputField[]; // Array de campos de entrada definidos en InputField
  isDark?: boolean;
  classes?: {
    container?: string;
  };
  bg?: string;
}

export {};

declare global {
  interface Window {
    _htmlClassName?: string;
    initCookieConsent: () => {
      run: (config: CookieConsentConfig) => void;
      getStatus: () => string;
      getCategories: () => Record<string, boolean>;
  }
}
}