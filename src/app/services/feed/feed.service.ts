import { Injectable } from '@angular/core';

import { Story } from './story.model';
import { Post } from './post.model';
import { Account } from '../account/account.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private stories: Story[] = [];
  private posts: Post[] = [];

  constructor() {
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));

    // TODO make followers and publish thier data for feed
    this.posts.push(new Post(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/C79fyRV.jpeg', 23, 'My drawing!', ['Very nice!', 'Love the painting!'], '1 HOUR AGO', false));
  }

  getStories(): Story[] {
    return this.stories;
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
