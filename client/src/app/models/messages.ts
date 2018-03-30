export class Message {
  private text: string;
  private author: string;
  private date: Date;
  private readers: string[];

  constructor(text, author) {
    this.text = text;
    this.author = author;
    this.date = new Date();
    this.readers = [];
  }

  getReaders(): string[] {
    return this.readers;
  }

  getText(): string {
    return this.text;
  }

  getAuthors(): string {
    return this.author;
  }

  getDate(): Date {
    return this.date;
  }

  addReader(username): void {
    if (this.readers.indexOf(username) === -1) {
      this.readers.push(username);
    }
  }
}
