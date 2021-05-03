import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndicateurAir } from '../models/indicateurAir.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class IndicateurAirService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/indicateurair')
   }

  get() {
    return this.http.get<IndicateurAir[]>(this.url);
  }

  search(nomIndicateurs: string[], echelleTemps: string) {
    const params = {
      listIndicateur: nomIndicateurs,
      echelleTemps: echelleTemps
    };
    return this.http.get<IndicateurAir[]>(`${this.url}/search`, { params });
  }

  searchByCommune(nomCommune: string, nomIndicateurs: string[], echelleTemps: string) {
    const params = {
      nomCommune: nomCommune,
      listIndicateur: nomIndicateurs,
      echelleTemps: echelleTemps
    };
    return this.http.get<IndicateurAir[]>(`${this.url}/searchByCommune`, { params });
  }
    
  findById(id : number) {
    return this.http.get<IndicateurAir>(`${this.url}/${id}`);
  }

}
