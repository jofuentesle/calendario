import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, d as renderSlot } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$Header, h as headerData, a as $$PageLayout } from './PageLayout_DlnSt-g1.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$LandingLayout2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout2;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["announcement"])} ` })}`, "default": ($$result2) => renderTemplate`   ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[0] ? [headerData.links[0]] : void 0, "actions": [
    {
      class: "btn-secondary w-full sm:mb-0",
      text: "Suscribirme ahora",
      href: "/news-letter"
    }
  ], "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/layouts/LandingLayout2.astro", void 0);

export { $$LandingLayout2 as $ };
