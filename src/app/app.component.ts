import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None, // aplykuje css z tohto componentu na vsetko v kode
})
export class AppComponent {
  title = 'app';
}
