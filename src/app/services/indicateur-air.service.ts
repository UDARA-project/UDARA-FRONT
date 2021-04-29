import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IndicateurAir } from '../models/indicateurAir.interface';

@Injectable({
  providedIn: 'root'
})
export class IndicateurAirService {

  private url: string = environment.urlBack + '/api/indicateurair/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<IndicateurAir[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<IndicateurAir>(this.url + id);
  }

}
