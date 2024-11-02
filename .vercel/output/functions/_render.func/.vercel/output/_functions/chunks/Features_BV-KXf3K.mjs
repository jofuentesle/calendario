import {
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  b as renderComponent,
} from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper, a as $$Headline } from './Headline_5a8u7EpF.mjs';
import { $ as $$ItemGrid } from './ItemGrid_Dxfdd_Rb.mjs';

const $$Astro = createAstro('https://astrowind.vercel.app');
const $$Features = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Features;
    const {
      title = await Astro2.slots.render('title'),
      subtitle = await Astro2.slots.render('subtitle'),
      tagline = await Astro2.slots.render('tagline'),
      items = [],
      columns = 2,
      defaultIcon,
      id,
      isDark = false,
      classes = {},
      bg = await Astro2.slots.render('bg'),
    } = Astro2.props;
    return renderTemplate`${renderComponent(
      $$result,
      'WidgetWrapper',
      $$WidgetWrapper,
      { id: id, isDark: isDark, containerClass: `max-w-5xl ${classes?.container ?? ''}`, bg: bg },
      {
        default: ($$result2) =>
          renderTemplate` ${renderComponent($$result2, 'Headline', $$Headline, { title: title, subtitle: subtitle, tagline: tagline, classes: classes?.headline })} ${renderComponent(
            $$result2,
            'ItemGrid',
            $$ItemGrid,
            {
              items: items,
              columns: columns,
              defaultIcon: defaultIcon,
              classes: {
                container: '',
                title: 'md:text-[1.3rem]',
                icon: 'text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0',
                ...(classes?.items ?? {}),
              },
            }
          )} `,
      }
    )}`;
  },
  'C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Features.astro',
  void 0
);

export { $$Features as $ };
