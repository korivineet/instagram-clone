import { Account } from "../account/account.model";

export class Post {
  id: string;
  account: Account;
  photoUrl: string;
  likes: number;
  caption: string;
  comments: string[];
  timestamp: string;
  saved: boolean;
  likedByUser: boolean;
  location?: string;

  constructor(
    id: string,
    account: Account,
    photoUrl: string,
    likes: number,
    caption: string,
    comments: string[],
    timestamp: string,
    saved: boolean,
    location?: string
  ) {
    this.id = id;
    this.account = account;
    this.photoUrl = photoUrl;
    this.likes = likes;
    this.caption = caption;
    this.comments = comments;
    this.timestamp = timestamp;
    this.saved = saved;
    this.likedByUser = false;
    this.location = location;
  }
}