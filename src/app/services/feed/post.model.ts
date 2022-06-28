import { Account } from "../account/account.model";

export class Post {
  account: Account;
  photoUrl: string;
  likes: number;
  caption: string;
  comments: string[];
  timestamp: string;
  saved: boolean;
  location?: string;

  constructor(
    account: Account,
    photoUrl: string,
    likes: number,
    caption: string,
    comments: string[],
    timestamp: string,
    saved: boolean,
    location?: string
  ) {
    this.account = account;
    this.photoUrl = photoUrl;
    this.likes = likes;
    this.caption = caption;
    this.comments = comments;
    this.timestamp = timestamp;
    this.saved = saved;
    this.location = location;
  }
}