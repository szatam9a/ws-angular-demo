import { Injectable, OnInit } from '@angular/core';
import { Client, over } from 'webstomp-client';

@Injectable({
  providedIn: 'root',
})
export class MsgbrokerwsService implements OnInit {
  topic = 'topic';
  address = '/address/msg';
  client: Client;
  sock = new WebSocket('ws://localhost:8080/broker');

  constructor() {
    this.client = over(this.sock);

    this.client.connect({}, () => {
      this.client.subscribe(this.topic, (data) => console.log(data.body));
    });
  }

  ngOnInit(): void {}

  subscirbe() {}

  sendMessage(message: string) {
    this.client.send(this.address, message);
  }
}
