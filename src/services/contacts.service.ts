import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIManager } from './apimanager.service';
import { ContactApi, HttpMethodsTypeEnum } from 'src/utility/constants';
import { Contact } from 'src/models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private _apiManager: APIManager) { }

    getContacts = (): Observable<Contact[]> => {
        return this._apiManager.httpHelperMethod(
            HttpMethodsTypeEnum.GET, ContactApi.CONTACTS);
    }
    getContactDetail = (contactId: number): Observable<Contact> => {
        const url = `${ContactApi.CONTACT_DETAIL}`.replace('{contactId}', contactId.toString());
        return this._apiManager.httpHelperMethod(HttpMethodsTypeEnum.GET, url)
    }

}
