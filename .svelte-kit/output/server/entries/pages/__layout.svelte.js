import { c as create_ssr_component } from "../../chunks/index-1259f1f6.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"}">
<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

`;
});
export { _layout as default };
