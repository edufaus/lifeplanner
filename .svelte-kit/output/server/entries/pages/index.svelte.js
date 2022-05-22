import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-1259f1f6.js";
import { db } from "../endpoints/room/firestore.js";
import { collection } from "firebase/firestore";
import "firebase/app";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-mjk9ig{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId = 0;
  collection(db, "events");
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-mjk9ig"}"><div class="${"box"}"><div class="${"title is-1"}">Life Planner</div></div>
	<div class="${"box"}"><div class="${"title is-3"}">Plan events with others. Create a rooms and share your plans.
			</div></div>
	<div class="${"box"}"><div class="${"button"}">Create Room</div>
		<br>
		<br>
		<input type="${"number"}" class="${"input"}" placeholder="${"Room Id"}"${add_attribute("value", roomId, 0)}>
		<br>
		<br>
		<a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a></div>
</section>`;
});
export { Routes as default };
