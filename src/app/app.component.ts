import { Component } from '@angular/core';
import { MoviedbService } from './services/moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(public _ms: MoviedbService) {
    // this._ms.discoverMovies().subscribe(data =>
    //   console.log(data));
  }
}
