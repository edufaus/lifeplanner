<script>
	let roomId = 0
</script>
<title>Invalid Room ID</title>
<div class="box">
    <div class="title is-1 is-red">Invalid Room id</div>
</div>
<div class="box">
    <div class="box has-text-centered">
		<div class="button" on:click={createRoom}>Create Room</div>
		<br>
		<br>
		<input maxlength="8" type="number" class="input" placeholder="Room Id" bind:value={roomId}>
		<br>
		<br>
		<a href={ "/room/" + roomId}><div class="button">Join Room</div></a>
	</div>
</div>