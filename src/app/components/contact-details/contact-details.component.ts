import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  @Input() contactDetail: Contact;

  constructor() { }

}
