import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteUtilisateur } from '../models/compteUtilisateur.interface';
import { Notif } from '../models/notif.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class NotifService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/notifications')
   }

  get() {
    return this.http.get<Notif[]>(this.url);
  }

  getRegion() {
    return this.http.get<string[]>(`${this.url}/Region`);
  }

  getCommune() {
    return this.http.get<string[]>(`${this.url}/Communes`);
  }

  getCommuneByRegion(region: string) {
    return this.http.get<string[]>(`${this.url}/Communes/${region}`);
  }

  findById(id : number) {
    return this.http.get<Notif>(`${this.url}/${id}`);
  }

  findByUser(compteUtilisateur: CompteUtilisateur) {
    return this.http.get<Notif>(`${this.url}/listNotif/${compteUtilisateur.id}`);
  }

  create(notif : Notif) {
    return this.http.post(this.url, notif);
  }

  update(notif : Notif) {
    return this.http.put(`${this.url}/${notif.id}`, notif);
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}