<script>
	let roomId = 0
</script>
<div class="box">
    <div class="title is-1 is-red">Invalid Room id</div>
</div>
<div class="box">
    <div class="button">Create Room</div>
    <br>
    <br>
    <input type="number" class="input" placeholder="Room Id" bind:value={roomId}>
    <br>
    <br>
    <a href={ "/room/" + roomId}><div class="button">Join Room</div></a>
</div>