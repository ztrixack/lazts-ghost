import { GhostAPI } from "$lib/api/ghost-client";
import { error } from "@sveltejs/kit";

export async function load() {
  const ghost = GhostAPI.getInstance();

  try {
    const settings = await ghost.getSettings();
    const posts = await ghost.getPosts();
    
    return { posts: {posts: [...posts], pagination: posts.meta.pagination }, settings };
  } catch (e) {
    error(404, 'Not found');
  }
}
