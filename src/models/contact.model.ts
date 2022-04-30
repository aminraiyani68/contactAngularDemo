interface Email {
    email: string;
    isPrimary?: boolean;
}

interface Phone {
    phone: string;
    isPrimary?: boolean;
}

interface Social {
    fb: string
    pin: string
    twitter: string
    linkedIn: string
    google: string
}

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    bio: string;
    emails: Email[]
    dial: string;
    meeting: string;
    phones: Phone[];
    social: Social;
    profilePic: string;
}

export { Email, Phone, Social, Contact }