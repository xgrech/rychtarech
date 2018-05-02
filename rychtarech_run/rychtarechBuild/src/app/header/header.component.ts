import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Output} from "@angular/core";
import {ServerService} from "../server.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {routerNgProbeToken} from "@angular/router/src/router_module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header_sk = "MODERNÉ, AKČNÉ, FILOZOFICKÉ, EROTICKÉ, SPIRITUÁLNE, PLNOKRVNÉ PRÍBEHY"
  header_en = "MODERN, ACTION PACKED, PHILOSOPHICAL, EROTIC, SPIRITUAL, REFRESHING STORIES"
  header_nl = "MODERNE, ACTIEVOLLE, FILOSOFISCHE, EROTISCHE, SPIRITUELE, CLICHÉLOZE VERHALEN"

  header:string = "MODERNÉ, AKČNÉ, FILOZOFICKÉ, EROTICKÉ, SPIRITUÁLNE, PLNOKRVNÉ PRÍBEHY"
  constructor(
      private serverService:ServerService,
      private router:Router,
      private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams
          .subscribe(
              (queryParams: Params) => {

                  if (queryParams['lang'] == 'sk') {
                      this.header = this.header_sk
                  }

                  if (queryParams['lang'] == 'en') {
                      this.header = this.header_en
                  }

                  if (queryParams['lang'] == 'nl') {
                      this.header = this.header_nl
                  }
              }
          )
}


  setLanguage(lang) {
    // console.log(this.router.url)
      this.router.navigate([this.router.url.split('?')[0]], { queryParams: { lang: lang },});
  }




}
