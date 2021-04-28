import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Rubrique } from '../models/rubrique.interface';

@Injectable({
  providedIn: 'root'
})
export class RubriqueService {

  private url: string = environment.urlBack + '/api/rubriques/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Rubrique[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Rubrique>(this.url + id);
  }

  create(rubrique : Rubrique) {
    return this.http.post(this.url, rubrique);
  }

  update(rubrique : Rubrique) {
    return this.http.put(this.url + rubrique.nom, rubrique);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }

}