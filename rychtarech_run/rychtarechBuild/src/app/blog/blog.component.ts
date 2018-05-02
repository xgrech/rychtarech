import {Component, HostListener, OnInit} from '@angular/core';
import {Clanok} from "../shared/clanok.model";
import {ServerService} from "../server.service";
import {Komentar} from "../shared/komentar.model";
import {Sprava} from "../shared/message.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LocationStrategy} from "@angular/common";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    page_name = "BLOG"
    detailView = false;


    clanok: Clanok = new Clanok('', '', '', '', [''], [], '', [""], 0);
    clanky: Clanok[] = [];

    koment: Komentar = new Komentar('', '', '');

    screenPosition = window.innerHeight;

    mobile = false;

    mailbox: string[];
    subscribe_array: string;

    popularPosts: Clanok[] = [];

    pocetKomentov = 0;

    constructor(private serverService: ServerService, private  router: Router, private route: ActivatedRoute, private url: LocationStrategy) {
        this.clanky = this.serverService.loadClanky()
        this.vyberPopularne(this.clanky);
    }

    ngOnInit() {

        if (this.screenPosition < 720) {
            // console.log('mobilne');
            this.mobile = true;
        }

        this.serverService.getSubscribe()
            .subscribe(
                (data: string[]) => {
                    this.mailbox = data
                },
                (error) => console.log(error),
            )


        this.route.params
            .subscribe(
                (params: Params) => {
                    if(params['id'] > this.clanky.length) this.router.navigate(['/page-not-found'])


                    if (params['id'] != null) {
                        this.clanok = this.clanky[params['id']];
                        this.detailView = true;
                    }


                },
                (error) => console.log(error),
            )
    }

    addSubscribe() {
        if (this.mailbox == null) {
            this.mailbox = new Array(this.subscribe_array);
        }
        else this.mailbox.push(this.subscribe_array);

        this.serverService.addSubscribe(this.mailbox)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.subscribe_array = '';
    }

    pocetComm(clanok: Clanok) {
        if (clanok.komenty == undefined) return 0;
        else return clanok.komenty.length;
    }

    avatarFoto(com) {
        if (com.meno[com.meno.length - 1] === "a") return '../../assets/blog/avatar/3.png';
        else return '../../assets/blog/avatar/1.png'
    }


    vyberPopularne(clanky: Clanok[]) {
        let chosen: number[] = new Array(-1, -2);
        let rand = -1;
        for (let i = 0; i < 4; i++) {
            if (chosen.includes(rand)) {
                rand = Math.floor((Math.random() * clanky.length));
                i = i - 1;
            }
            else {
                chosen.push(rand);
                this.popularPosts.push(clanky[rand]);
            }
        }
    }

    openDetail(clanok: Clanok, index: number) {
        window.scrollTo(0, 0)

        for (let clk of this.clanky) if (clk == this.clanok) {
            clk.pocitadlo += 1;
        }

        // console.log('chceme otvorit')
        // console.log(index)

        this.router.navigate(['blog/', index]);

        // this.serverService.storeClanky(this.clanky)
        //     .subscribe(
        //         (response) => console.log(''),
        //         (error) => console.log(error)
        //     )
    }

    saveKoment(comm) {

        this.koment = comm;

        let datum = new Date();
        datum.getUTCDate()
        let dd = datum.toDateString();
        if (this.clanok.komenty == undefined) {
            this.clanok.komenty = [new Komentar(this.koment.meno, this.koment.obsah, dd)]
        }
        else {
            console.log(dd);
            this.koment.datum = dd;
            this.clanok.komenty.push(this.koment);
        }

        this.serverService.storeClanky(this.clanky)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.koment = new Komentar('', '', '');
    }


}
