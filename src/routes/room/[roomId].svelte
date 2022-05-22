<script context="module">
  import {db} from "./firestore.js";
  import { collection, query, where, getDocs, addDoc} from "firebase/firestore";
  import snarkdown from 'snarkdown'

  let roomid = "0"
  const database = collection(db, "events")
  let roomEvents;

  let date = "2022-05-22"
  let time = "00:00"
  let eventTitle = ""
  let eventMarkdown = `Event Description (With Markdown)`
  
  function reload(){
    location.reload()
  }
  export async function load({params}) {
    roomid = params.roomId
    if (isNaN(roomid) || roomid.length != 8) {
      return {
        status: 302,
        redirect: "/room/invalidId"
      }
    }
    roomEvents = await getEvents(roomid)
    return {}
  }
  async function getEvents(roomid){
    let events = []
    const q = query(database, where("roomId", "==", roomid))
    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let e = doc.data()
  e.date = new Date(e.date)
  events.push(e)
});
    events.sort((a,b) => a.date - b.date)
    return events
  }
  async function createEvent() {
    console.log("createEvent")
    let event = {
      roomId: roomid,
      date: date,
      time: time,
      title: eventTitle,
      markdown: eventMarkdown
    }

    console.log(roomEvents, event, roomEvents.includes(event))
    if (roomEvents.includes(event) == true){
      return
    }
    console.log("roomevents",roomEvents)
    console.log("event", event)
    await addDoc(database,event)
      .then(() =>
      location.reload()
      )
  }
  
</script>


<!-- svelte-ignore module-script-reactive-declaration -->
<!-- svelte-ignore module-script-reactive-declaration -->
<link href="~bulma-calendar/dist/css/bulma-calendar.min.css" rel="stylesheet">
<script src="~bulma-calendar/dist/js/bulma-calendar.min.js"></script>
<svelte:head>
	<title>About</title>
</svelte:head>
<div class="cont">
  <div class="box has-text-centered">
    <div class="title is-1">Life Planner</div>
  <h1>The Room Id is {roomid}</h1>
  <div class="box block">
    <h1>Create a new Event! <b>events are permanent</b></h1> 
    <input type="text" class="input" placeholder="Event Title" bind:value={eventTitle}>
    <br>
    <br>
    <textarea class="textarea" bind:value={eventMarkdown} placeholder="Event Description (With Markdown)"/>
    <div class="has-text-centered">
      <input type="date" bind:value={date}>
      <input type="time" bind:value={time}>
      <div class="button" on:click={createEvent}>Create Event</div>
    </div>
  </div>
  <div class="">
    <h1>Events</h1> <div class="button" on:click={reload}>Update Events</div>
    {#each roomEvents as event}
    <div class="box">
      <div class="rows">
        <div class="column">
          <h1 class="title is-1">{event.title}</h1>
          <hr>
          <div class="content">{@html snarkdown(event.markdown)}</div>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>
      </div>
    </div>
    {/each}
  </div>
  </div>
</div>

<style>
	.conte {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
  
</style>
