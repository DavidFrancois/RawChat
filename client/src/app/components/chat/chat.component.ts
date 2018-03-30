
import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

import { MessagesService } from './../../services/messages.services';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  private username: string;
  private messages = [];
  private connection;
  private message;

  constructor(private _messagesService: MessagesService) {}

  sendMessage() {
    this._messagesService.sendMessage(new Message(this.message, sessionStorage.getItem('CurrentUser')));
    this.message = '';
  }

  ngOnInit() {
    this.scrollToBottom();
    this.username = sessionStorage.getItem('CurrentUser');
    this.connection = this._messagesService.getMessages().subscribe(messages => {
      messages.forEach(msg => { this.messages.push(msg); });
    });
    this._messagesService.getHistory();
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  propertyClass(author: string): string {
    return (author === this.username) ? 'alert-success' : 'alert-secondary';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
