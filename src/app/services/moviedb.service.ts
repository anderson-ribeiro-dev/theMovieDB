
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// map reactive
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviedbService {
  [x: string]: any;

  private apiKey: string = 'ffb84dbfb17a3adb2048fafc136479db'; // key api the movie db
  private urlMoviedb: string = 'https://api.themoviedb.org/3'; // url default


  constructor(private http: HttpClient) {}

  // call url api
  //https://www.themoviedb.org/documentation/api
  urlBase(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apiKey
      }&language=pt-BR&callback=JSONP_CALLBACK`;

      // important to check the use of jsonp to be able to apply to other domains
      return this.http.jsonp(url, '');
  }

  // https://www.themoviedb.org/documentation/api
  urlForMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${this.apiKey
      }&language=pt-BR&callback=JSONP_CALLBACK`;

    // important to check the use of jsonp to be able to apply to other domains
    return this.http.jsonp(url, '');
  }

  // https://www.themoviedb.org/documentation/api
  discoverMovies() {
    return this.urlBase('/discover/movie?sort_by=popularity.desc').pipe(
      map((data: any) => data.results) // results search api
    );
  }

  searchMovies(finish: string){
    return this.urlBase(`/search/movie?query=${finish}&sort_by=popularity.desc`
      ).pipe(map((data: any) => data.results) //results search api
    );
  }

  getIdMovies(id: string){
    return this.urlForMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }
}
