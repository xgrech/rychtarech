export class Sprava {
    meno:string;
    email:string;
    message:string;
    date:any;

    constructor(meno: string, email: string, message: string) {
        this.meno = meno;
        this.email = email;
        this.message = message;
    }

}