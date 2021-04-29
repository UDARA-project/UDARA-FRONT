import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Favori } from '../models/favori.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriService {

  private url: string = environment.urlBack + '/api/favoris/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Favori[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Favori>(this.url + id);
  }

  create(favori : Favori) {
    return this.http.post(this.url, favori);
  }

  update(favori : Favori) {
    return this.http.put(this.url + favori.id, favori);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }
  
}
