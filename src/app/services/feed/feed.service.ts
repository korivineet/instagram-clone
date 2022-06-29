import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Story } from './story.model';
import { Post } from './post.model';
import { Account } from '../account/account.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private stories: Story[] = [];
  private posts: Post[] = [];

  public postChanged$ = new Subject<Post[]>();

  constructor() {
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));

    // TODO make followers and publish thier data for feed
    this.posts.push(new Post('apjd2o23Os', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/C79fyRV.jpeg', 23, 'My drawing!', ['Very nice!', 'Love the painting!'], '1 HOUR AGO', false));
    this.posts.push(new Post('kdfje334op', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/C79fyRV.jpeg', 23, 'My drawing!', ['Very nice!', 'Love the painting!'], '1 HOUR AGO', false));
  }

  getStories(): Story[] {
    return this.stories;
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addComment(postId: string, comment: string) {
    const postIndex = this.posts.findIndex(p => p.id === postId);
    this.posts[postIndex].comments.push(comment);
    this.postChanged$.next(this.posts);
  }
}
