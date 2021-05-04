import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commune } from '../models/commune.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class CommuneService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/communes')
   }

  get() {
    return this.http.get<Commune[]>(`${this.url}/liste-commune-dto`);
  }

  getEveryName() {
    return this.http.get<string[]>(`${this.url}/liste-commune`);
  }

  getEveryNameOfDepartement() {
    return this.http.get<string[]>(`${this.url}/liste-departement`);
  }

  getNameCommuneByDepartement(codeDepartement: string) {
    const params = { departement: codeDepartement};
    return this.http.get<string[]>(`${this.url}/searchByDepartement`, { params });
  }

  findById(id : number) {
    return this.http.get<Commune>(`${this.url}/${id}`);
  }

  findByName(nomCommune: string) {
    const params = { terme: nomCommune};
    return this.http.get<Commune>(`${this.url}/search`, { params });
  }

}
  