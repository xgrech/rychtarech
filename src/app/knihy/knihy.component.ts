import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-knihy',
  templateUrl: './knihy.component.html',
  styleUrls: ['./knihy.component.css']
})
export class KnihyComponent implements OnInit {

    page_name = "KNIHY"

  constructor(private route:ActivatedRoute ) { }

  ngOnInit() {
      this.route.queryParams
          .subscribe(
              (queryParams: Params) => {

                  if (queryParams['lang'] == 'sk') {
                      this.page_name = "KNIHY";
                  }

                  if (queryParams['lang'] == 'en') {
                      this.page_name = "BOOKS ";
                  }

                  if (queryParams['lang'] == 'nl') {
                      this.page_name = "BOEKEN";
                  }
              }
          );
  }

}
