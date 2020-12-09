import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.css']
})
export class MoviesDisplayComponent implements OnInit {

  constructor() {
  }

  // tslint:disable-next-line:no-input-rename
  @Input('movie') movie: {title: string, description: string, genres: string, uuid: number};
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  clicked(){
    console.log('clicked');
  }
}
