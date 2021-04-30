import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NiveauMeteo } from '../models/niveauMeteo.interface';

@Injectable({
  providedIn: 'root'
})
export class NiveauMeteoService {

  private url: string = environment.urlBack + '/api/niveaumeteos/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<NiveauMeteo[]>(this.url);
  }

  getByName(nomCommune: string, nomNiveau: string) {
    return this.http.get<NiveauMeteo[]>(this.url + nomCommune + "/" + nomNiveau);
  }

  getAllByName(nomCommune: string) {
    return this.http.get<NiveauMeteo[]>(this.url + "search?nomCommune=" + nomCommune);
  }

  findById(id : number) {
    return this.http.get<NiveauMeteo>(this.url + id);
  }

}