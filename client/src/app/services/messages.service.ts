import { Injectable,  } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class MessagesService {
  private url = 'http://localhost:8080';
  private socket;

  sendMessage(message) {
    this.socket.emit('new_message', message);
  }

  getHistory() {
    this.socket.emit('get_all_messages');
  }

  getMessages() {
    const observable = new Observable<any[]>(observer => {
      this.socket = io(this.url);
      this.socket.on('send_all_messages', messages => {
        observer.next(messages);
      });
      this.socket.on('add_latest_message', (message) => {
        observer.next([message]);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
