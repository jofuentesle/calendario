import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CWE0viGK.mjs';
/* empty css                                                            */

const logo = new Proxy({"src":"/_astro/reprodisseny.DiMFbhQh.png","width":391,"height":72,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/icons/reprodisseny.png";
							}
							
							return target[name];
						}
					});

const logoB = new Proxy({"src":"/_astro/ReprodissenyLogoB.DN_ZsufY.png","width":391,"height":72,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/icons/ReprodissenyLogoB.png";
							}
							
							return target[name];
						}
					});

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white" data-astro-cid-tvrurpns> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "class": "logo-responsive logo block dark:hidden w-32 md:w-24", "src": logo, "alt": "Logo tipo de Repro Disseny, imprenta digital y offset en Barcelona", "data-astro-cid-tvrurpns": true })} ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "class": "logo-responsive logo hidden dark:block w-32 md:w-24", "src": logoB, "alt": "Logo tipo de Repro Disseny, imprenta digital y offset en Barcelona", "data-astro-cid-tvrurpns": true })} </span> <!-- Estilos encapsulados para el componente Header.astro --> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/Logo.astro", void 0);

export { $$Logo as $ };
