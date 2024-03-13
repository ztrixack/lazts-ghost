import { GHOST_URL, GHOST_KEY, GHOST_VERSION } from '$env/static/private';
import GhostContentAPI from '@tryghost/content-api';

export class GhostAPI {
  private static instance: GhostAPI;
  private api;

  constructor(
    private url: string,
    private key: string,
    private version: 'v2' | 'v3' | 'v4' | 'v5.0' | 'canary'
  ) {
    this.api = new GhostContentAPI({
      url: this.url,
      key: this.key,
      version: this.version,
    });
  }

  public static getInstance() {
    if (!GhostAPI.instance) {
      GhostAPI.instance = new GhostAPI(GHOST_URL, GHOST_KEY, GHOST_VERSION as 'v2' | 'v3' | 'v4' | 'v5.0' | 'canary');
    }
    return GhostAPI.instance;
  }

  public async getSettings() {
    return await this.api.settings.browse();
  }

  public async getSearch() {
    return await this.api.posts.browse({ limit: 'all' }).catch((err: any) => {
      console.log(err);
    });
  }

  public async getPosts(page: number = 1) {
    return await this.api.posts
      .browse({
        include: ['tags', 'authors'],
        limit: 10,
        page: page,
      })
      .catch((err: string | undefined) => {
        throw new Error(err);
      });
  }

  public async getPost(slug: string) {
    return await this.api.posts.read({ slug }, { include: ['tags', 'authors'] }).catch((err: any) => {
      console.error(err);
    });
  }

  public async getPage(slug: string) {
    return await this.api.pages.read({ slug }, { include: ['tags'] }).catch((err: any) => {
      console.error(err);
    });
  }
}
