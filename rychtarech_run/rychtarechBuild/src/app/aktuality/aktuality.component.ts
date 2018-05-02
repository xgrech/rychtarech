import {Component, HostListener, OnInit} from '@angular/core';
import {Clanok} from "../shared/clanok.model";
import {ServerService} from "../server.service";
import {Komentar} from "../shared/komentar.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-aktuality',
    templateUrl: './aktuality.component.html',
    styleUrls: ['./aktuality.component.css']
})
export class AktualityComponent implements OnInit {

    page_name = "AKTUALITY"

    aktualita: Clanok = new Clanok('', '', '', '', [], [], '', [""], 0);
    aktuality: Clanok[] = [];

    detailView = false;

    koment: Komentar = new Komentar('', '', '');

    screenPosition = window.innerHeight;

    mobile = false;

    z = 0;

    pocetKomentov = 0;


    constructor(private serverService: ServerService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        if (this.screenPosition < 720) {
            this.mobile = true;
        }

        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.page_name = "AKTUALITY";
                    }

                    if (queryParams['lang'] == 'en') {
                        this.page_name = "NEWS";
                    }

                    if (queryParams['lang'] == 'nl') {
                        this.page_name = "NIEUWS";
                    }
                }
            );


        this.serverService.getAktuality()
            .subscribe(
                (data: Clanok[]) => {
                    this.aktuality = data
                },

                (error) => console.log(error),
            )
    }


    openDetail(idx) {
        window.scrollTo(0, 0)

        this.serverService.getAktuality()
            .subscribe(
                (data: Clanok[]) => {
                    this.aktuality = data
                },

                (error) => console.log(error),
            )
        this.aktualita = this.aktuality[idx];
        for (let clk of this.aktuality) if (clk == this.aktualita) {
            clk.pocitadlo += 1;
        }
        this.detailView = true;
        this.serverService.storeAktuality(this.aktuality)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
    }

    pocetComm(aktualita: Clanok) {
        if (aktualita.komenty == undefined) return 0;
        else return aktualita.komenty.length;
    }

    avatarFoto(com) {
        if (com.meno[com.meno.length - 1] === "a") return '../../assets/blog/avatar/3.png';
        else return '../../assets/blog/avatar/1.png'
    }

    saveKoment() {

        let datum = new Date();
        datum.getUTCDate()
        datum.getTime()
        let dd = datum.toDateString();
        if (this.aktualita.komenty == undefined) {
            this.aktualita.komenty = [new Komentar(this.koment.meno, this.koment.obsah, dd)]
        }
        else {
            this.koment.datum = dd;
            this.aktualita.komenty.push(this.koment);
        }
        for (let act of this.aktuality) {
            if(this.aktualita['title'] == act['title']) {
                act['komenty'] = this.aktualita['komenty'];
            }
        }

        this.serverService.storeAktuality(this.aktuality)
            .subscribe(
                (response) => console.log('ulozene'),
                (error) => console.log(error)
            )
        this.koment = new Komentar('', '','');

    }

}
