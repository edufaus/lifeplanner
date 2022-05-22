import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "../../../chunks/index-1259f1f6.js";
import snarkdown from "snarkdown";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../endpoints/room/firestore.js";
import "firebase/app";
let roomid = "0";
const database = collection(db, "events");
let roomEvents;
let date = "2013-01-01";
let time = "00:00";
let eventTitle = "";
let eventMarkdown = `Event Description (With Markdown)`;
async function load({ params }) {
  roomid = params.roomId;
  if (isNaN(roomid) || roomid.length != 8) {
    return { status: 302, redirect: "/room/invalidId" };
  }
  roomEvents = await getEvents(roomid);
  return {};
}
async function getEvents(roomid2) {
  let events = [];
  const q = query(database, where("roomId", "==", roomid2));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let e = doc.data();
    e.date = new Date(e.date);
    events.push(e);
  });
  events.sort((a, b) => a.date - b.date);
  return events;
}
const U5BroomIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<link href="${"~bulma-calendar/dist/css/bulma-calendar.min.css"}" rel="${"stylesheet"}">

${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}
<div class="${"cont"}"><div class="${"box has-text-centered"}"><div class="${"title is-1"}">Life Planner</div>
  <h1>The Room Id is ${escape(roomid)}</h1>
  <div class="${"box block"}"><h1>Create a new Event! <b>events are permanent</b></h1> 
    <input type="${"text"}" class="${"input"}" placeholder="${"Event Title"}"${add_attribute("value", eventTitle, 0)}>
    <textarea class="${"textarea"}" placeholder="${"Event Description (With Markdown)"}">${eventMarkdown}</textarea>
    <input type="${"date"}"${add_attribute("value", date, 0)}>
    <input type="${"time"}"${add_attribute("value", time, 0)}>
    <div class="${"button"}">Create Event</div></div>
  <div class="${""}"><h1>Events</h1> <div class="${"button"}">Update Events</div>
    ${each(roomEvents, (event) => {
    return `<div class="${"box"}"><div class="${"rows"}"><div class="${"column"}"><h1>${escape(event.title)}</h1>
          <div class="${"content"}"><!-- HTML_TAG_START -->${snarkdown(event.markdown)}<!-- HTML_TAG_END --></div>
          <p>${escape(event.date)}</p>
          <p>${escape(event.time)}</p>
        </div></div>
    </div>`;
  })}</div></div>
</div>`;
});
export { U5BroomIdu5D as default, load };
