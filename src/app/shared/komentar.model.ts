export class Komentar{
    meno:string;
    datum:string;
    obsah:string;


    constructor(meno: string, obsah: string, date: string) {
        this.meno = meno;
        this.datum = date;
        this.obsah = obsah;
    }


}

