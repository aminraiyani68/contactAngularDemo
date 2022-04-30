import { environment } from "src/environments/environment";

const BASE_URL = `${environment.apiUrl}`;

export enum HttpMethodsTypeEnum {
    GET = 'get',
    POST = 'post',
    // we can add as many here like PUT/PATCH
}

export class ContactApi {
    public static CONTACTS = BASE_URL + '/contacts';
    public static CONTACT_DETAIL = BASE_URL + '/contacts/{contactId}';
}