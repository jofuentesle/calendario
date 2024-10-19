import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper, a as $$Headline } from './Headline_5a8u7EpF.mjs';
import { $ as $$DynamicForm } from './DynamicForm_ClYG14jN.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    id,
    isDark = false,
    classes = {}
  } = Astro2.props;
  const title = await Astro2.slots.render("title");
  const subtitle = await Astro2.slots.render("subtitle");
  const tagline = await Astro2.slots.render("tagline");
  const bg = await Astro2.slots.render("bg");
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> <!-- Headline --> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })} <!-- Formulario Dinámico con botón de envío incluido --> <div class="mt-8 w-full"> ${renderComponent($$result2, "DynamicForm", $$DynamicForm, {})} </div> </div> ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/CallToAction.astro", void 0);

export { $$CallToAction as $ };
