import { Injectable } from '@angular/core';

import { Story } from './story.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private stories: Story[] = [];

  constructor() { 
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.stories.push(new Story('vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
  }

  getStories(): Story[] {
    return this.stories;
  }
}
