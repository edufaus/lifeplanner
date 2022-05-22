import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index-1259f1f6.js";
const InvalidId = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId = 0;
  return `<div class="${"box"}"><div class="${"title is-1 is-red"}">Invalid Room id</div></div>
<div class="${"box"}"><div class="${"button"}">Create Room</div>
    <br>
    <br>
    <input type="${"number"}" class="${"input"}" placeholder="${"Room Id"}"${add_attribute("value", roomId, 0)}>
    <br>
    <br>
    <a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a></div>`;
});
export { InvalidId as default };
