import { GhostAPI } from "$lib/api/ghost-client";
import { error } from "@sveltejs/kit";

export async function load() {
  const ghost = GhostAPI.getInstance();

  try {
    const settings = await ghost.getSettings();
    
    return { settings };
  } catch (e) {
    error(404, 'Not found');
  }
}
