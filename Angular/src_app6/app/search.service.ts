import { Injectable } from '@angular/core';
import{ Http,HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { }

  search(term:string)
  {
    return this.http;
    .get(`http://www.`)
    .togetPromise
  }

}
