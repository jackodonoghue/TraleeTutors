import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TraleeTutorsDataService {

  constructor(private http: Http) { }
}
