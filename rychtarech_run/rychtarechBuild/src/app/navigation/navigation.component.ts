import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    @Input('actual') actual_page: string;
    @Output() zomin = new EventEmitter<boolean>();

    toogleMenu = false;

    language = "sk"

    constructor(private route: ActivatedRoute) {
    }

    home = "ÚVOD"
    aktuality = "AKTUALITY"
    knihy = "KNIHY"
    bio = 'BIO'
    blog = "BLOG"
    linky = "LINKY"
    kontakt = "KONTAKT"

    ngOnInit() {
        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.language = "sk"

                        this.home = "ÚVOD"
                        this.aktuality = "AKTUALITY"
                        this.knihy = "KNIHY"
                        this.bio = 'BIO'
                        this.blog = "BLOG"
                        this.linky = "LINKY"
                        this.kontakt = "KONTAKT"

                    }

                    if (queryParams['lang'] == 'en') {
                        this.language = "en"

                        this.home = "INTRO"
                        this.aktuality = "NEWS"
                        this.knihy = "BOOKS"
                        this.bio = 'BIO'
                        this.blog = "BLOG"
                        this.linky = "LINKS"
                        this.kontakt = "CONTACT"

                    }

                    if (queryParams['lang'] == 'nl') {
                        this.language = "nl"


                        this.home = "INTRO"
                        this.aktuality = "NIEUWS"
                        this.knihy = "BOEKEN"
                        this.bio = 'BIO'
                        this.blog = "BLOG"
                        this.linky = "LINKS"
                        this.kontakt = "CONTACT"


                    }
                }
            )
    }


    onToogleMenu() {
        console.log('palime')
        this.toogleMenu = !this.toogleMenu;
        //this.zomin.emit(this.toogleMenu);
    }
}
