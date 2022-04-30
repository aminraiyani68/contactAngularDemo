import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact, Email, Phone } from 'src/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() selectedContact: Contact;
  @Input() contactList: Contact[] = [];
  @Input() isContactListLoading = false;
  @Output() selectContact = new EventEmitter();

  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectContact = (userItem: Contact) => {
    this.selectContact.emit(userItem)
  }

  filteredContactList = () => {
    if (!this.searchText) return this.contactList;

    return this.contactList.filter((contactItem: Contact) => {
      return contactItem.first_name.toLowerCase().includes(this.searchText.toLowerCase())
        || contactItem.last_name.toLowerCase().includes(this.searchText.toLowerCase())
        || contactItem.phones.filter((p: Phone) => p.phone.includes(this.searchText.toLowerCase())).length > 0
        || contactItem.emails.filter((e: Email) => e.email.includes(this.searchText.toLowerCase())).length > 0
    });
  }

}
