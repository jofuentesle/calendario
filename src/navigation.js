import { getPermalink} from './utils/permalinks';
import IconSvg from './assets/icons/IconRepro.svg';

export const headerData = {
  links: [
    {
    text: 'Selecciona tu calendario',
      links: [
        {
          text: 'Calendario para mesa triangular',
          href: getPermalink('/solicitud-presupuesto'),
        },
        {
          text: 'Calendario para mesa con espiral',
          href: getPermalink('/solicitud-presupuesto'),
        },
        {
          text: 'Calendario para pared tipo revista',
          href: getPermalink('/solicitud-presupuesto'),
        },
        {
          text: 'Calendario para pared con espiral',
          href: getPermalink('/solicitud-presupuesto'),
        },
        
      ],
    },
  ]
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        
      ],
    }
  ],
  secondaryLinks: [

  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/reprodissenybcn/?hl=es' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://es.linkedin.com/company/repro-disseny-s.l' },

  ],
  footNote: `
  <div class="footNote text-xs text-muted flex flex-wrap items-center justify-center py-4">
  <!-- Imagen del logo -->
  <img
    class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"
    src="${IconSvg.src}"
    alt="Logo de Repro Disseny, especialista en impresión de calendarios personalizados para 2025 en Barcelona"
    loading="lazy"
  />

  <!-- Texto y enlaces -->
  <span class="ml-2">
    &copy; 2024 
    <a
      href="https://reprodisseny.com"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline"
      aria-label="Sitio web de Repro Disseny, especialistas en impresión de calendarios personalizados para 2025"
    >
      Repro Disseny
    </a> 
    · Todos los derechos reservados.
  </span>

  <!-- Aviso legal -->
  <a
    href="https://reprodisseny.com/page/aviso-legal"
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue-600 underline ml-2 dark:text-muted hover:text-blue-500"
    aria-label="Página de aviso legal de Repro Disseny"
  >
    Aviso legal
  </a>
</div>

  `,
};
