import { Component, OnInit } from '@angular/core';
import { MsgbrokerwsService } from '../service/msgbrokerws.service';
import { SimplewsService } from '../service/simplews.service';

{
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  msg = 'sss';
  textarea = '';
  constructor(
    private msgBroker: MsgbrokerwsService,
    private ws: SimplewsService
  ) {}

  ngOnInit(): void {}
  sendMessage() {
    this.msgBroker.sendMessage(this.msg);
  }
}
