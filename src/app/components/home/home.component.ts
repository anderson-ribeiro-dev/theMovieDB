
import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newMovies: any[] = [];
  loading: boolean;

  // receive service api
  constructor(private moviedb: MoviedbService) {
    this.loading = true;
    // call methods service
    this.moviedb.discoverMovies()
      .subscribe((data: any) => {
        // console.log(data);
        this.newMovies = data;
        this.loading = false;
      });
    }

}
