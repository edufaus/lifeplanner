<script context="module">
  // let param = []
  let roomid = "0"
  export async function load({params}) {
    console.log("params", params)
    roomid = params.roomId
    return {
      
    }
  }
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
  <h1>RoomId is {roomid}</h1>
  
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
