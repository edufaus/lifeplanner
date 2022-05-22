

<script>
	import {db} from "./room/firestore.js";
  import { collection, query, where, getDocs} from "firebase/firestore";
	let roomId = 0
	const database = collection(db, "events")
	async function createRoom() {
		var randomRoomId = Math.floor(10000000 + Math.random() * 90000000);
		const q = query(database, where("roomId", "==", randomRoomId))
    	const querySnapshot = await getDocs(q);
		if (querySnapshot.size == 0) {
			roomId = randomRoomId
			location.href = "/room/" + roomId
		} else {
			return createRoom()
		}
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="box">
		<div class="title is-1">Life Planner</div>
	</div>
	<div class="box">
		<div class="title is-3">
			Plan events with others. Create a rooms and share your plans.
			</div>
	</div>
	<div class="box">
		<div class="button" on:click={createRoom}>Create Room</div>
		<br>
		<br>
		<input type="number" class="input" placeholder="Room Id" bind:value={roomId}>
		<br>
		<br>
		<a href={ "/room/" + roomId}><div class="button">Join Room</div></a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
