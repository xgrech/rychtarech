import {Component, Input, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {Reference} from "../../shared/reference.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-recenzie',
    templateUrl: './recenzie.component.html',
    styleUrls: ['./recenzie.component.css'],

})
export class RecenzieComponent implements OnInit {

    @Input('referencie') referencie: Reference[];
    data: any;
    language = 'sk';
    povolanie = '';
    text = '';

    constructor(private route: ActivatedRoute) {
    }

    getPovolanie(ref) {
        if (this.language == 'sk') return ref.povolanie_sk;
        if (this.language == 'en') return ref.povolanie_en;
        if (this.language == 'nl') return ref.povolanie_nl
    }

    getRefText(ref) {
        if (this.language == 'sk') return ref.text_sk;
        if (this.language == 'en') return ref.text_en;
        if (this.language == 'nl') return ref.text_nl;
    }

    ngOnInit() {


        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.language = 'sk';
                    }

                    if (queryParams['lang'] == 'en') {
                        this.language = 'en';
                    }

                    if (queryParams['lang'] == 'nl') {
                        this.language = 'nl';
                    }
                }
            )


        // this.route.queryParams
        //     .subscribe(
        //         (queryParams: Params) => {
        //
        //             if (queryParams['lang'] == 'sk') {
        //
        //
        //             }
        //
        //             if (queryParams['lang'] == 'en') {
        //
        //             }
        //
        //             if (queryParams['lang'] == 'nl') {
        //
        //
        //
        //             }
        //         }
        //     )

    }

}
