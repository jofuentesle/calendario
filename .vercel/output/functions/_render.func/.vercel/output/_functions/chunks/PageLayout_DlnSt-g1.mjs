import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderComponent, u as unescapeHTML, F as Fragment, d as renderSlot, n as renderTransition } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_B-_7GVWf.mjs';
import { $ as $$Icon, a as $$ToggleTheme } from './ToggleTheme_BTMd2-Tb.mjs';
import { $ as $$Logo } from './Logo_CPGJtVgM.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { t as trimSlash, g as getHomePermalink, a as getPermalink } from './permalinks_DqrWEVgA.mjs';
/* empty css                                           */
/* empty css                                           */

const $$Astro$4 = createAstro("https://astrowind.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro("https://astrowind.vercel.app");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isbgBlck = true,
    isFullWidth = false,
    showToggleTheme = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark, isbgBlck },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})} data-astro-cid-4wsjtibl> <div class="absolute inset-0" data-astro-cid-4wsjtibl></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full",
    {
      "md:flex md:justify-between": position !== "center"
    },
    {
      "md:grid md:grid-cols-3 md:items-center": position === "center"
    },
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")} data-astro-cid-4wsjtibl> <!-- Logo de Repro Disseny --> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")} data-astro-cid-4wsjtibl> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")} data-astro-cid-4wsjtibl> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-4wsjtibl": true })} </a> <div class="flex items-center md:hidden" data-astro-cid-4wsjtibl> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, { "data-astro-cid-4wsjtibl": true })} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center" aria-label="Main navigation" data-astro-cid-4wsjtibl> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center" data-astro-cid-4wsjtibl> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")} data-astro-cid-4wsjtibl> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-4wsjtibl": true }, { "default": ($$result2) => renderTemplate` <button type="button" class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center" data-astro-cid-4wsjtibl> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline", "data-astro-cid-4wsjtibl": true })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl" data-astro-cid-4wsjtibl> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li data-astro-cid-4wsjtibl> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")} data-astro-cid-4wsjtibl> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-center",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-4wsjtibl> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
  ], "class:list")} data-astro-cid-4wsjtibl> <div class="items-center flex justify-between w-full md:w-auto" data-astro-cid-4wsjtibl> <div class="flex" data-astro-cid-4wsjtibl> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block", "data-astro-cid-4wsjtibl": true })}`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4" data-astro-cid-4wsjtibl> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "btn-secondary w-full sm:mb-0", "data-astro-cid-4wsjtibl": true })}`)} </span>` : ""} </div> </div> </div> </header> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Header.astro", void 0);

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([
    { dark: theme === "dark" },
    "relative border-t border-gray-200 dark:border-slate-800 not-prose"
  ], "class:list")} data-astro-cid-rhv6ztfp> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true" data-astro-cid-rhv6ztfp></div> <div class="relative max-w-7xl mx-auto px-2 sm:px-4 dark:text-slate-300" data-astro-cid-rhv6ztfp> <!-- Contenedor principal --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-1 min-h-[120px] items-center" data-astro-cid-rhv6ztfp> <!-- Sección de Contacto --> <div class="lg:col-span-3 flex flex-col justify-center items-center lg:items-start" data-astro-cid-rhv6ztfp> <div class="mb-1 lg:col-span-1" data-astro-cid-rhv6ztfp> <div class="flex text-muted flex-col items-center lg:items-start" data-astro-cid-rhv6ztfp> <div class="text-center lg:text-left" data-astro-cid-rhv6ztfp> <!-- Teléfono --> <div class="flex items-center" data-astro-cid-rhv6ztfp> <span class="mr-1 text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 inline-flex items-center" data-astro-cid-rhv6ztfp> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-astro-cid-rhv6ztfp> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" data-astro-cid-rhv6ztfp></path> </svg> </span> <a href="tel:+34932749880" class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>+34 93 274 98 90</a> </div> <!-- Correo --> <div class="flex items-center" data-astro-cid-rhv6ztfp> <span class="mr-1 text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 inline-flex items-center" data-astro-cid-rhv6ztfp> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-astro-cid-rhv6ztfp> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" data-astro-cid-rhv6ztfp></path> </svg> </span> <a href="mailto:repro@reprodisseny.com" class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>hola@preprodiseny.com</a> </div> <!-- Dirección --> <div class="flex items-center text-sm" data-astro-cid-rhv6ztfp> <span class="mr-1 text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 inline-flex items-center" data-astro-cid-rhv6ztfp> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-astro-cid-rhv6ztfp> <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" data-astro-cid-rhv6ztfp></path> </svg> </span>
Juan de Mena 19, 08035
</div> </div> </div> </div> </div> <!-- Menú de calendarios --> <div class="lg:col-span-6 flex justify-center items-center" data-astro-cid-rhv6ztfp> <nav class="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-2 text-center" data-astro-cid-rhv6ztfp> <a class="dark:text-gray-300 pb-1 font-medium mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(getPermalink("/calendario-mesa-triangular"), "href")} class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>Mesa triangular</a> <a class="dark:text-gray-300 font-medium mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(getPermalink("/calendario-mesa-espiral"), "href")} class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>Mesa espiral</a> <a class="dark:text-gray-300 font-medium mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(getPermalink("/calendario-pared-revista"), "href")} class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>Pared revista</a> <a class="dark:text-gray-300 font-medium mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center  "${addAttribute(getPermalink("/calendario-pared-espiral"), "href")} class="hover:text-gray-400 text-sm" data-astro-cid-rhv6ztfp>Pared espiral</a> </nav> </div> <!-- Redes sociales --> <div class="lg:col-span-3 flex justify-center lg:justify-end items-center" data-astro-cid-rhv6ztfp> <ul class="flex space-x-2" data-astro-cid-rhv6ztfp> ${socialLinks.map(({ ariaLabel, href, icon }) => renderTemplate`<li data-astro-cid-rhv6ztfp> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")} data-astro-cid-rhv6ztfp> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-4 h-4", "data-astro-cid-rhv6ztfp": true })}`} </a> </li>`)} </ul> </div> </div> <!-- Política de privacidad (al fondo) --> <div class="flex flex-col lg:flex-row justify-between items-center py-2 mt-2 border-t border-gray-200 dark:border-slate-800" data-astro-cid-rhv6ztfp> <div class="text-xs dark:text-muted" data-astro-cid-rhv6ztfp> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> <div data-astro-cid-rhv6ztfp> <a href="#top" class="dark:text-gray-300 font-medium mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" data-astro-cid-rhv6ztfp> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-rhv6ztfp> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" data-astro-cid-rhv6ztfp></path> </svg> </a> </div> </div> </div> </footer> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Footer.astro", void 0);

const $$Announcement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dark text-white text-sm bg-black dark:bg-transparent dark:border-b dark:border-slate-800 flex items-center justify-end px-3 py-2 relative"> <a target="_blank" rel="noopener" class="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200" href="tel:+34932749890"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg>
932 749 890
</a> </div>`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Announcement.astro", void 0);

const IconSvg = new Proxy({"src":"/_astro/IconRepro.DQ6CSvNj.svg","width":75,"height":75,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/icons/IconRepro.svg";
							}
							
							return target[name];
						}
					});

const headerData = {
  links: [
    {
    text: 'Selecciona tu calendario',
      links: [
        {
          text: 'Calendario para mesa triangular',
          href: getPermalink('/calendario-mesa-triangular'),
        },
        {
          text: 'Calendario para mesa con espiral',
          href: getPermalink('/calendario-mesa-espiral'),
        },
        {
          text: 'Calendario para pared tipo revista',
          href: getPermalink('/calendario-pared-revista'),
        },
        {
          text: 'Calendario para pared con espiral',
          href: getPermalink('/calendario-pared-espiral'),
        },
        
      ],
    },
  ]
};

const footerData = {
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

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata, "data-astro-transition-scope": renderTransition($$result, "i3irxrfb") }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["announcement"], renderTemplate` ${renderComponent($$result2, "Announcement", $$Announcement, {})} `)} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/layouts/PageLayout.astro", "self");

export { $$Header as $, $$PageLayout as a, $$Button as b, headerData as h };
