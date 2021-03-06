import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rubrique } from '../models/rubrique.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class RubriqueService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/rubriques')
   }

  get() {
    return this.http.get<Rubrique[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Rubrique>(`${this.url}/${id}`);
  }

  create(rubrique : Rubrique) {
    console.log("serviceRubriquecreate", rubrique)
    return this.http.post(this.url, rubrique);
  }

  update(rubrique : Rubrique) {
    console.log("serviceRubriqueUpdate", rubrique)
    return this.http.put(`${this.url}/${rubrique.id}`, rubrique);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}