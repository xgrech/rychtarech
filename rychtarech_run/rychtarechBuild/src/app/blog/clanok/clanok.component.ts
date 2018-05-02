import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Clanok} from "../../shared/clanok.model";
import {Komentar} from "../../shared/komentar.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clanok',
  templateUrl: './clanok.component.html',
  styleUrls: ['./clanok.component.css']
})
export class ClanokComponent implements OnInit {


  @Input() clanok: Clanok;
  @Input() koment: Komentar;
  @Input() detailView:boolean;
  @Output() fireComment = new EventEmitter<Komentar>();
  // @Output() spet = new EventEmitter<boolean>();


    constructor(private router:Router) { }

  ngOnInit() {
  }

  saveKoment() {
      this.fireComment.emit(this.koment);
  }
  spat() {
      // this.spet.emit(false);
      this.router.navigate(['/blog']);


  }

    avatarFoto(com) {
        if (com.meno[com.meno.length - 1] === "a") return '../../assets/blog/avatar/3.png';
        else return '../../assets/blog/avatar/1.png'
    }

}
