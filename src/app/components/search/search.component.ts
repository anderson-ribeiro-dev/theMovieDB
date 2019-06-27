import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  movie: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) { }

  search(finish: string) {
    // console.log(finish);

    this.loading = true;
    this.moviedb.searchMovies(finish).subscribe((data: any) => {
      // console.log(data);
      this.movie = data;
      this.loading = false;
    });
  }
}
