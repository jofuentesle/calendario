import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { b as $$Button } from './PageLayout_DlnSt-g1.mjs';
import { $ as $$WidgetWrapper, a as $$Headline } from './Headline_5a8u7EpF.mjs';

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  const {
    inputs = [],
    textarea,
    disclaimer,
    button = "Enviar",
    description = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="dynamicForm" method="POST" action="../../pages/api/send-quotes"> ${inputs && inputs.map(({ type = "text", name, label = "", options = [], icons = null }) => renderTemplate`<div class="mb-6 content-between"> <label${addAttribute(name, "for")} class="block text-sm font-medium">${label}</label> ${type === "select" ? renderTemplate`<select${addAttribute(name, "name")}${addAttribute(name, "id")} required class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200"> <option value="" disabled selected>Selecciona una opción</option> ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}>${option.label}</option>`)} </select>` : type === "radio" ? (
    // Lógica para Radio Buttons
    options.map((option) => renderTemplate`<div class="inline-flex items-center mb-2"> <input type="radio"${addAttribute(option.value, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")} class="hidden" required> <label${addAttribute(option.value, "for")} class="cursor-pointer"> <img${addAttribute(option.image, "src")}${addAttribute(option.label, "alt")} class="h-10 w-10 rounded-full border-2 border-gray-300"> <span class="text-sm font-medium text-gray-700">${option.label}</span> </label> </div>`)
  ) : renderTemplate`<div class="relative"> ${icons && renderTemplate`<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> ${icons} </svg> </span>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")} required class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200"${addAttribute(`Ingrese su ${label.toLowerCase()}`, "placeholder")}> </div>`} </div>`)} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/ui/Form.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    selects = [],
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto 
  ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "selects": selects, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Contact.astro", void 0);

export { $$Contact as $ };
