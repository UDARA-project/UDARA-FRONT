import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favori } from '../models/favori.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/favoris')
   }

  get() {
    return this.http.get<Favori[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Favori>(`${this.url}/${id}`);
  }

  create(favori : Favori) {
    return this.http.post(this.url, favori);
  }

  update(favori : Favori) {
    return this.http.put(`${this.url}/${favori.id}`, favori);
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  
}
