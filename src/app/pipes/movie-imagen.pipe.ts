import { Pipe, PipeTransform } from '@angular/core';

//Pass Picture of movies
@Pipe({
  name: 'moviePicture'
})

export class MovieImagenPipe implements PipeTransform {
  transform(movie: any): any {
    // path generic for get picture
    let url = 'http://image.tmdb.org/t/p/w400';
    if(movie.poster_path){
      return url + movie.poster_path;
    } else {
      if(movie.backdrop_path){
        return url + movie.backdrop_path;
      } else {
        // picture generic
        return 'assets/img/noimage.png';

      }
    }

  }
}
