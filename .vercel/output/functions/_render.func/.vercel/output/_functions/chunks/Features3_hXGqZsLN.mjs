import {
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  b as renderComponent,
  m as maybeRenderHead,
  F as Fragment,
  u as unescapeHTML,
} from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper, a as $$Headline } from './Headline_5a8u7EpF.mjs';
import { $ as $$ItemGrid } from './ItemGrid_Dxfdd_Rb.mjs';
import { $ as $$Image } from './Image_DYKDXq-I.mjs';

const $$Astro = createAstro('https://astrowind.vercel.app');
const $$Features3 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Features3;
    const {
      title = await Astro2.slots.render('title'),
      subtitle = await Astro2.slots.render('subtitle'),
      tagline = await Astro2.slots.render('tagline'),
      image,
      items = [],
      columns,
      defaultIcon,
      isBeforeContent,
      isAfterContent,
      id,
      isDark = false,
      classes = {},
      bg = await Astro2.slots.render('bg'),
    } = Astro2.props;
    return renderTemplate`${renderComponent(
      $$result,
      'WidgetWrapper',
      $$WidgetWrapper,
      {
        id: id,
        isDark: isDark,
        containerClass: `${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''} ${classes?.container ?? ''}`,
        bg: bg,
      },
      {
        default: ($$result2) =>
          renderTemplate` ${renderComponent($$result2, 'Headline', $$Headline, { title: title, subtitle: subtitle, tagline: tagline, classes: classes?.headline })} ${maybeRenderHead()}<div aria-hidden="true" class="aspect-w-16 aspect-h-7"> ${image && renderTemplate`<div class="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"> ${typeof image === 'string' ? renderTemplate`${renderComponent($$result2, 'Fragment', Fragment, {}, { default: ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, 'Image', $$Image, { class: 'w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg', width: 'auto', height: 320, widths: [400, 768], layout: 'fullWidth', ...image })}`} </div>`} </div> ${renderComponent(
            $$result2,
            'ItemGrid',
            $$ItemGrid,
            {
              items: items,
              columns: columns,
              defaultIcon: defaultIcon,
              classes: {
                container: 'mt-12',
                panel: 'max-w-full sm:max-w-md',
                title: 'text-lg font-semibold',
                description: 'mt-0.5',
                icon: 'flex-shrink-0 mt-1 text-primary w-6 h-6',
                ...(classes?.items ?? {}),
              },
            }
          )} `,
      }
    )}`;
  },
  'C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Features3.astro',
  void 0
);

export { $$Features3 as $ };
