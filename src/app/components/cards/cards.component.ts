import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent  {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  viewMovie(item: any) {
    let movieId;
    movieId = item.id;

    this.router.navigate(['/movie', movieId]);
  }

}
