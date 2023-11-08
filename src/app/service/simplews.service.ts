import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';

@Injectable({
  providedIn: 'root',
})
export class SimplewsService {
  socket = webSocket({
    url: 'ws:/localhost:8080/communication',
    deserializer: ({ data }) => data,
  });
  constructor() {
    this.socket.subscribe({
      next: (msg) => {
        console.log(msg);
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  ngOnInit(): void {}
  sendMessage(message: string) {
    this.socket.next(message);
  }
}
