export class Reference {
   public meno:string;
   public photo:string;
   public povolanie_sk:string;
   public povolanie_en:string;
   public povolanie_nl:string;
   public text_sk:string;
   public text_en:string;
   public text_nl:string;


    constructor(meno: string, photo: string, povolanie_sk: string, povolanie_en: string, povolanie_nl: string, text_sk: string, text_en: string, text_nl: string) {
        this.meno = meno;
        this.photo = photo;
        this.povolanie_sk = povolanie_sk;
        this.povolanie_en = povolanie_en;
        this.povolanie_nl = povolanie_nl;
        this.text_sk = text_sk;
        this.text_en = text_en;
        this.text_nl = text_nl;
    }
}