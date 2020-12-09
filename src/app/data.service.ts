import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: string;
  description: string;
  genres: string;
  uuid: number;
  constructor() { }
}
