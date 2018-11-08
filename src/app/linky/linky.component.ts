import { Component, OnInit } from '@angular/core';
import {Linka} from "../shared/linka.model";
import {ServerService} from "../server.service";
import {Clanok} from "../shared/clanok.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-linky',
  templateUrl: './linky.component.html',
  styleUrls: ['./linky.component.css']
})
export class LinkyComponent implements OnInit {

    page_name = "LINKY"

    link:Linka = new Linka('','','','','')
    linky:Linka[] = []


  constructor(private serverService: ServerService, private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams
          .subscribe(
              (queryParams: Params) => {

                  if (queryParams['lang'] == 'sk') {
                      this.page_name = "LINKY";
                  }

                  if (queryParams['lang'] == 'en') {
                      this.page_name = "LINKS";
                  }

                  if (queryParams['lang'] == 'nl') {
                      this.page_name = "LINKS";
                  }
              }
          );


      this.serverService.getLinky()
          .subscribe(
              (data: Linka[]) => {
                  this.linky = data
              },
              (error) => console.log(error),
          )
  }

  hyperLink(lnk) {
      window.open(lnk.link, "_blank");
  }
}
