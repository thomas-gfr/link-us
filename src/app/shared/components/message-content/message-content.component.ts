import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss'],
})
export class MessageContentComponent implements OnInit {
    @Input() item: any

    constructor() { }

    ngOnInit() {}

}
