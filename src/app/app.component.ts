import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  loggedIn = false;
  token: string;
  url = 'https://demo.credy.in/api/v1/maya/movies/';
  er = false;

  constructor(private http: HttpClient) { }

  movies: DataService[] = [
    {title: 'A Space Odyssey', description: 'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.', genres: 'Adventure, Sci-Fi', uuid: 1},
    {title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', genres: 'Crime, Drama', uuid: 2},
    {title: 'Citizen Kane', description: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; \'Rosebud\'.', genres: 'Drama, Mystery', uuid: 3},
    {title: 'Raiders of the Lost Ark', description: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler\'s Nazis can obtain its awesome powers.', genres: 'Action, Adventure', uuid: 4},
    {title: 'La Dolce Vita', description: 'A series of stories following a week in the life of a philandering paparazzo journalist living in Rome.', genres: 'Comedy, Drama', uuid: 5},
    {title: 'Seven Samurai', description: 'A veteran samurai, who has fallen on hard times, answers a village\'s request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.', genres: 'Action, Adventure, Drama ', uuid: 6},
    {title: 'There Will Be Blood', description: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.', genres: 'Drama ', uuid: 7},
    {title: 'Goodfellas', description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', genres: 'Biography, Crime, Drama ', uuid: 8},
    {title: 'Beau Travail', description: 'This film focuses on an ex-Foreign Legion officer as he recalls his once glorious life, leading troops in Djibouti.', genres: 'Drama, War ', uuid: 9},
    // tslint:disable-next-line:max-line-length
    {title: 'Persona', description: 'A nurse is put in charge of a mute actress and finds that their personae are melding together.', genres: 'Drama, Thriller ', uuid: 10},
    {title: 'Rashomon', description: 'The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai\'s ghost and a woodcutter.', genres: 'Crime, Drama, Mystery ', uuid: 11},
    // tslint:disable-next-line:max-line-length
    {title: 'The 400 Blows', description: 'A young boy, left without attention, delves into a life of petty crime.', genres: 'Crime, Drama', uuid: 12}
  ];
  // tslint:disable-next-line:typedef
  enter( token: string ) {
    this.loggedIn = true;
    this.token = token;
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    console.log(this.token);
    this.http.get(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }).toPromise().then((data: any) => {
      this.er =  false;
      console.log(data);
    }).catch(() => {
      this.er = true;
    });
  }
}
