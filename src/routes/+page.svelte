<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	import { onMount } from 'svelte';

type BlobFile = {
  pathname: string;
  url: string;
};

let files: BlobFile[] = [];

onMount(async () => {
  const response = await fetch('/api/blobs');
  if (response.ok) {
	const { blobs } = await response.json();
	files = blobs;
  } else {
	console.error('Errore nel recupero dei file.');
  }
});
	
  </script>
  
  <div>
	simulazioneee
  </div>
  <form
	use:enhance
	action="?/upload"
	method="POST"
	enctype="multipart/form-data"
  >
	<input type="file" name="file" required />
	<button>Upload</button>
  
	{#if form}
	  <p>uploaded {form.uploaded}</p>
	{/if}
  </form>

  <div>
	{#each files as file}
	  <div>
		<a href={file.url} target="_blank">{file.pathname}</a>
	  </div>
	{/each}
  </div>