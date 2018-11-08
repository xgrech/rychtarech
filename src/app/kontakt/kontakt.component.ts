import {Component, OnInit} from '@angular/core';
import {Sprava} from "../shared/message.model";
import {Reference} from "../shared/reference.model";
import {ServerService} from "../server.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Komentar} from "../shared/komentar.model";

@Component({
    selector: 'app-kontakt',
    templateUrl: './kontakt.component.html',
    styleUrls: ['./kontakt.component.css']
})


export class KontaktComponent implements OnInit {

    page_name = "KONTAKT"
    sprava: Sprava = new Sprava('', '', '');
    mailbox: Sprava[] = [];


    constructor(private serverService: ServerService, private route:ActivatedRoute) {
    }

    ngOnInit() {

        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.page_name = "KONTAKT";
                    }

                    if (queryParams['lang'] == 'en') {
                        this.page_name = "CONTACT ";
                    }

                    if (queryParams['lang'] == 'nl') {
                        this.page_name = "CONTACT";
                    }
                }
            );


        this.serverService.getMailbox()
            .subscribe(
                (data: Sprava[]) => this.mailbox = data,
                (error) => console.log(error),
            )
    }

    send() {
        let datum = new Date();
        datum.getUTCDate()
        let dd = datum.toDateString();
        this.sprava.date = dd;

        if (this.mailbox == undefined) {
            this.mailbox = [new Sprava(this.sprava.meno, this.sprava.email, this.sprava.message)]
        }
        else {
            this.mailbox.unshift(this.sprava);
        }

        this.serverService.storeMailbox(this.mailbox)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.sprava = new Sprava('', '', '');
    }

    doTextareaValueChange(ev) {
        try {
            this.sprava.message = ev.target.value;
        } catch (e) {
            console.info('could not set textarea-value');
        }
    }

    facebook() {
        window.location.href = 'https://www.facebook.com/knihaslovenky/';
    }

    instagram() {
        window.location.href = 'https://www.instagram.com/richardrychtarech/';

    }
}
