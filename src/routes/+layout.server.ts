import {GhostAPI} from "$lib/api/ghost-client";

export async function load() {
  return {
    settings: await GhostAPI.getInstance().getSettings(),
  };
}