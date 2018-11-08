import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    screenWidth = window.outerWidth;
    mobile = false;

    constructor() {
    }

    ngOnInit() {
        if (this.screenWidth < 720) {
            this.mobile = true;
        }
    }


    scrollTop() {
        window.scrollTo(0, 0)
    }

    facebook() {
        window.open("https://www.facebook.com/knihaslovenky/", "_blank");
    }

    instagram() {
        window.open("https://www.instagram.com/richardrychtarech/", "_blank");
    }

    snapchat() {

    }

    pinterest() {

    }

    twitter() {

    }

    linkedin() {

    }

}
