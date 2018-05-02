import {Komentar} from "./komentar.model";

export class Clanok{
    title:string;
    title_description:string;
    date:string;
    perex:string;
    obsah:string[];
    komenty:Komentar[];
    titulna_fotka:string;
    fotky:string[];
    pocitadlo:number;


    constructor(title: string, title_description: string, date: string, perex: string, obsah: string[], komenty: Komentar[], titulna_fotka: string, fotky: string[], pocitadlo: number) {
        this.title = title;
        this.title_description = title_description;
        this.date = date;
        this.perex = perex;
        this.obsah = obsah;
        this.komenty = komenty;
        this.titulna_fotka = titulna_fotka;
        this.fotky = fotky;
        this.pocitadlo = pocitadlo;
    }

}