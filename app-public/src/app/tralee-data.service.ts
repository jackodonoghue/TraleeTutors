
import { environment } from './../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Grind } from './grind-list/grind-list.component';

@Injectable({
  providedIn: 'root'
})
export class TraleeDataService {

  constructor(private http: HttpClient) { }

  private apiBaseURL = environment.apiURL;

  public getGrinds(): Promise<Grind[]>{
    const url: string = this.apiBaseURL + '/grinds';

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Grind[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}
