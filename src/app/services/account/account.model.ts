export class Account {
  id: string;
  fullName: string;
  username: string;
  profilePictureUrl: string;

  constructor(id: string, fullName: string, username: string, profilePictureUrl: string) {
    this.id = id;
    this.fullName = fullName;
    this.username = username;
    this.profilePictureUrl = profilePictureUrl;
  }
}