import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  fotky:string[] = ['../../../assets/bio/1.jpg',
      '../../../assets/bio/2.jpg',
      '../../../assets/bio/3.jpg',
      '../../../assets/bio/4.jpg',
      '../../../assets/bio/5.jpg',
      '../../../assets/bio/6.jpg',
      '../../../assets/bio/7.jpg',
      '../../../assets/bio/8.jpg',
      '../../../assets/bio/9.jpg',
      '../../../assets/bio/10.jpg',
      '../../../assets/bio/11.jpg',
      '../../../assets/bio/12.jpg'];
  focused_foto;
  i;
  pocet_fotiek = 11;

  show_gallery = false;
  gallery_status:string = 'Otvor galériu';

  constructor() {
        this.i = 0;
  }



  ngOnInit() {

      this.focused_foto = this.fotky[this.i];
  }

  gallery_trigger() {
    if(!this.show_gallery) this.gallery_status = "Zatvor galériu"
      else this.gallery_status = "Otvor galériu"
    this.show_gallery = !this.show_gallery;
  }

  dalsia() {

    if (this.i == this.pocet_fotiek) this.i = 0;
    else this.i = this.i+1;console.log(this.i)
    this.focused_foto = this.fotky[this.i]

  }
  predchadzajuca() {

      if (this.i == 0) this.i = this.pocet_fotiek;
      else this.i = this.i-1;console.log(this.i)
      this.focused_foto = this.fotky[this.i]

  }

  focus_this(index) {
    console.log(index)
    this.focused_foto = this.fotky[index];
    this.i = index;

  }
}
