import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {

  @Input() item: Contact;
  @Input() isActive: boolean;
  @Output() itemClick = new EventEmitter();

  constructor() { }

  handleItemClick = (contactItem: Contact) => {
    this.itemClick.emit(contactItem)
  }

}
