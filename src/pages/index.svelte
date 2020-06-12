<script>
	import Post from './r/Post.svelte';
	import { ready, metatags } from "@sveltech/routify";
	let posts;
	let page = 1;
	let count = 25;

    async function getSubredditPosts(after, before) {
		posts = null;
		let fetchUrl = `https://www.reddit.com/.json`;
		if (after) {
			fetchUrl += `?after=${after}&count=${count}`
			count += 25;
			page++;
		}
		if (before) {
			fetchUrl += `?before=${before}&count=${count}`
			count -= 25;
			page--;
		}
		const response = await fetch(fetchUrl, { cache: 'force-cache' });
        posts = await response.json();
        $ready();
    }
	
	metatags['title'] = `Frontpage | Svelte for Reddit`

    $: getSubredditPosts();
</script>

{#if posts}
	{#each posts.data.children as post}
		<Post postData={post.data} />
	{/each}
	<div class="subreddit__pagination">
		{#if posts.data.before}
			<button on:click={() => getSubredditPosts(null, posts.data.before)}>Previous Page</button>
		{/if}
		{#if posts.data.after}
			<button on:click={() => getSubredditPosts(posts.data.after, null)}>Next Page</button>
		{/if}
	</div>
{:else}
	<div class="loadingPosts">
		Loading frontpage
	</div>
{/if}

<style>
.subreddit__pagination {
	margin: 1.2rem 0;
}
.subreddit__pagination button {
	background-color: #fff;
	color: #0079d3;
	border: 1px solid #0079d3;
	border-radius: 2px;
	font-weight: 500;
	padding: 0.6rem 1rem;
	font-size: 1.2rem;
	cursor: pointer;
	margin-right: 1rem;
}
</style>