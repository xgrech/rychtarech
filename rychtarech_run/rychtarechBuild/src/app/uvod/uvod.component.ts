import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Reference} from "../shared/reference.model";
import {ServerService} from "../server.service";
import {Response} from "@angular/http";
import {forEach} from "@angular/router/src/utils/collection";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-uvod',
    templateUrl: './uvod.component.html',
    styleUrls: ['./uvod.component.css'],
    providers: [ServerService]
})
export class UvodComponent implements OnInit {

    page_name = "ÚVOD";
    referencia: Reference = new Reference('', '', '', '', '', '', '', '');
    referencie: Reference[] = [];

    podiel = 1.85;

    data: any;

    screenHeight = window.outerHeight;
    screenWidth = window.outerWidth;

    mierka: number = 0;
    bh: number;

    url;

    @ViewChild('item') elementView: ElementRef;
    @ViewChild('screen') screenView: ElementRef;
    @ViewChild('bann') bannanView: ElementRef;
    @ViewChild('uvod') uvodView: ElementRef;
    @ViewChild('blacker') blackerView: ElementRef;


    nadpis1 = "Richard Rychtarech"
    nadpis2 = "Návykovo drzý spisovateľ"

    constructor(private serverService: ServerService, sanitizer: DomSanitizer, private route: ActivatedRoute) {


        this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zirB40xCENk');

    }

    ngOnInit() {


        // this.mierka = this.screenHeight - (this.elementView.nativeElement.offsetHeight + this.elementView.nativeElement.offsetTop + 50 + this.screenView.nativeElement.offsetTop);


        if (this.screenWidth < 800) {
            this.mierka = this.screenWidth - this.uvodView.nativeElement.offsetTop - 200;
        }
        else this.mierka = this.screenHeight - (this.elementView.nativeElement.offsetTop + this.elementView.nativeElement.offsetHeight);


        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.nadpis1 = "Richard Rychtarech"
                        this.nadpis2 = "Návykovo drzý spisovateľ"
                        this.page_name = "ÚVOD";

                    }

                    if (queryParams['lang'] == 'en') {
                        this.nadpis1 = "Richard Rychtarech"
                        this.nadpis2 = "An addictively bold writer"
                        this.page_name = "INTRO";

                    }

                    if (queryParams['lang'] == 'nl') {
                        this.nadpis1 = "Richard Rychtarech"
                        this.nadpis2 = "Een verslavend gedurfde schrijver"
                        this.page_name = "INTRO";

                    }
                }
            );

        //
        // console.log(this.bh)
        // console.log(this.mierka)
        // console.log(this.elementView.nativeElement.offsetHeight)
        //
        //
        // console.log('uvod ' + this.uvodView.nativeElement.offsetTop)
        // console.log('uvod ' + this.uvodView.nativeElement.offsetHeight)
        //
        // console.log('bannan ' + this.bannanView.nativeElement.offsetTop)
        // console.log('bannan ' + this.bannanView.nativeElement.offsetHeight)
        //
        // console.log('blacker ' + this.blackerView.nativeElement.offsetTop)
        // console.log('blacker ' + this.blackerView.nativeElement.offsetHeight)
        //
        //
        // console.log('element ' + this.elementView.nativeElement.offsetTop)
        // console.log('element ' + this.elementView.nativeElement.offsetHeight)
        //
        // console.log('screen ' + this.screenView.nativeElement.offsetTop)
        // console.log('screen ' + this.screenView.nativeElement.offsetHeight)

        // this.bannan = 194;

        // console.log('------')
        // console.log("height: " + this.screenHeight)
        // console.log("width: " + this.screenWidth)


        this.serverService.getReference()
            .subscribe(
                (data: Reference[]) => this.referencie = data,
                (error) => console.log(error),
            )
    }


    check() {
        console.log(this.elementView.nativeElement.offsetHeight);

    }

    showData() {
        for (let item of this.referencie) this.referencie.push(item);

        console.log(this.referencie)
        //for (let item of this.data) console.log(item)

    }


    saveInList() {
        console.log(this.referencia);
        this.referencie.push(this.referencia);
    }

    saveRef() {
        this.serverService.storeReference(this.referencie)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            )

    }

}
