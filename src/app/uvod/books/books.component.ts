import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


    screenWidth = window.outerWidth;
    unknow = false;

    constructor() { }

  ngOnInit() {
    }


    goSlovenky() {
        window.open("https://www.martinus.sk/?uItem=185877", "_blank");
    }
    goNaSmrt() {
        window.open("https://www.martinus.sk/?uItem=254749", "_blank");
    }
    goTvojaNocna() {
        window.open("https://www.martinus.sk/?uItem=134651", "_blank");
    }



}
