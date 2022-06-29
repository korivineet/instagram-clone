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

    // TODO make followers and publish their data for feed
    this.posts.push(new Post('apjd2o23os', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/C79fyRV.jpeg', 23, 'My drawing!', ['Very nice!', 'Love the painting!'], '1 HOUR AGO', false));
    this.posts.push(new Post('kdfje334op', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/T3LlPCG.jpeg', 12, 'Here are some planes', ['Wow!', 'Amazing!', 'Fabulous'], '10 HOURS AGO', false));
    this.posts.push(new Post('ri2Piriegb', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/nT62LkO.jpeg', 18, 'Catto', [], '1 DAY AGO', false));
    this.posts.push(new Post('ieudh7U2sd', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/BUTbdWK.png', 25, 'Stroberri', ['Cool!', 'Love it'], '2 DAYS AGO', false));
  }

  getStories(): Story[] {
    return this.stories.slice();
  }

  getPosts(): Post[] {
    return this.posts.slice();
  }

  getPost(postId: string): Post {
    const post = this.posts.find(p => p.id === postId) as Post;    
    return post;
  }

  addComment(postId: string, comment: string) {
    const postIndex = this.posts.findIndex(p => p.id === postId);
    this.posts[postIndex].comments.push(comment.trim());
    this.postChanged$.next(this.posts.slice());
  }
}
