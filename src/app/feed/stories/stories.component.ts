import { Component, OnInit } from '@angular/core';

import { Story } from './../../services/feed/story.model';
import { FeedService } from '../../services/feed/feed.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.stories = this.feedService.getStories();
  }

}
