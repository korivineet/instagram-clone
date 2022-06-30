import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Story } from './story.model';
import { PostComment, Post } from './post.model';
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
    this.posts.push(new Post('apjd2o23os', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/C79fyRV.jpeg', 23, 'My drawing!', [new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Wow!'), new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Love the painting!')], '1 HOUR AGO', false));
    this.posts.push(new Post('kdfje334op', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/T3LlPCG.jpeg', 12, 'Here are some planes', [new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Awesome'), new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Amazing!'), new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Fabulous!')], '10 HOURS AGO', false));
    this.posts.push(new Post('ri2Piriegb', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/nT62LkO.jpeg', 18, 'Catto', [], '1 DAY AGO', false));
    this.posts.push(new Post('ieudh7U2sd', new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'https://i.imgur.com/BUTbdWK.png', 25, 'Stroberri', [new PostComment(new Account('xdSK85Tgsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'), 'Love it')], '2 DAYS AGO', false));
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

  addComment(postId: string, comment: PostComment) {
    const postIndex = this.posts.findIndex(p => p.id === postId);
    comment.content = comment.content.trim();
    this.posts[postIndex].comments.push(comment);
    this.postChanged$.next(this.posts.slice());
  }

  /**
  * @params postId
  * @params type - value: 'dec' or 'inc' (for decrement or increment) 
  * @return null
  */
  toggleLikeCountOnLikeClicked(postId: string, type: string) {
    const postIndex = this.posts.findIndex(p => p.id === postId);
    if (type === 'inc') {
      this.posts[postIndex].likes = ++this.posts[postIndex].likes;
    } else {
      this.posts[postIndex].likes = --this.posts[postIndex].likes;
    }
    this.postChanged$.next(this.posts.slice());
  }
}
