async function getMod() {
  return import('./get-started-website-with-astro-tailwind-css_dcQci_ra.mjs');
}
const collectedLinks = [];
const collectedStyles = [];
const collectedScripts = [];
const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
