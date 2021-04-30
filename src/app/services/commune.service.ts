import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Commune } from '../models/commune.interface';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  private url: string = environment.urlBack + '/api/communes/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Commune[]>(this.url + "liste-commune-dto");
  }

  getEveryName() {
    return this.http.get<string[]>(this.url + "liste-commune");
  }

  findById(id : number) {
    return this.http.get<Commune>(this.url + id);
  }

  findByName(commune: Commune) {
    return this.http.get<Commune[]>(this.url + "search?terme=" + commune.name);
  }

}
  