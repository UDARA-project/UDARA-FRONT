import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NiveauMeteo } from '../models/niveauMeteo.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class NiveauMeteoService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/niveaumeteos')
   }

  get() {
    return this.http.get<NiveauMeteo[]>(this.url);
  }

  search(nomNiveaux: string[], echelleTemps: string) {
    const params = {
      listNiveau: nomNiveaux,
      echelleTemps: echelleTemps
    };
    return this.http.get<NiveauMeteo[]>(`${this.url}/search`, { params });
  }

  searchByCommune(nomCommune: string, nomNiveaux: string[], echelleTemps: string) {
    const params = {
      nomCommune: nomCommune,
      listNiveau: nomNiveaux,
      echelleTemps: echelleTemps
    };
    return this.http.get<NiveauMeteo[]>(`${this.url}/searchByCommune`, { params });
  }

  findById(id : number) {
    return this.http.get<NiveauMeteo>(`${this.url}/${id}`);
  }

}