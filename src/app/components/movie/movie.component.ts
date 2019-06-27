import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoviedbService} from '../../services/moviedb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  {

  movie: any = {};
  loadingMovie: boolean;

  constructor(private router: ActivatedRoute, private moviedb: MoviedbService) {

    this.loadingMovie = true;

    this.router.params.subscribe(params => {
      // console.log(params);

      // call methods for id
      this.moviedb.getIdMovies(params['id'])
        .subscribe(movie => {
          // console.log(movie)
          this.movie = movie;
          this.loadingMovie = false;
        })
    })
  }

}
