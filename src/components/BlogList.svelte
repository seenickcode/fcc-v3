<script lang="ts">
	import { onMount } from 'svelte';
	import { blogPosts } from '../lib/db';
	import type { Post } from '../../cms/schema';

	export let posts: Post[] = [];

	onMount(async () => posts = await blogPosts.all());
</script>

<div>
  {#each posts as p}
    <div class="blog-list-item">
      <div class="title">
        <a href="/blog/{p.slug.current}">{p.title}</a>
      </div>
    </div>
  {/each}
</div>