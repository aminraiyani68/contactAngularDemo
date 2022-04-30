import { Component } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-exercise';
  allContactList: Contact[] = [];
  isContactListLoading = false;
  isContactDetailLoading = false;
  selectedContact: Contact;

  constructor(
    public _contactService: ContactService,
  ) { }

  ngOnInit() {
    this.bindContactList();
  }

  // child component events
  handleSelectContact = (eve: any) => {
    this.bindSelectedContact(eve.id)
  }

  // handle api responses
  handleContactList = (response: Contact[]) => {
    this.allContactList = response;
    this.isContactListLoading = false;
  };

  handleContactDetail = (response: Contact) => {
    this.selectedContact = response;
    this.isContactDetailLoading = false;
  }

  // bind data
  bindContactList = () => {
    this.isContactListLoading = true;
    this.getContacts().subscribe({
      next: (v) => this.handleContactList(v),
      error: (e) => console.error(e),
      // complete: () => console.info('complete')
    })
  }

  bindSelectedContact = (contactId: number) => {
    this.isContactDetailLoading = true;
    this.getContactDetail(contactId).subscribe({
      next: (v) => this.handleContactDetail(v),
      error: (e) => console.error(e),
      // complete: () => console.info('complete')
    })
  };

  // api calls
  getContacts = () => {
    return this._contactService.getContacts();
  };

  getContactDetail = (contactId: number) => {
    return this._contactService.getContactDetail(contactId);
  };

}
