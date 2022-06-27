export class Account {
  fullName: string;
  username: string;
  profilePictureUrl: string;

  constructor(fullName: string, username: string, profilePictureUrl: string) {
    this.fullName = fullName;
    this.username = username;
    this.profilePictureUrl = profilePictureUrl;
  }
}