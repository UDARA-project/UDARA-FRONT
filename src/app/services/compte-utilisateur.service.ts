import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteUtilisateur } from '../models/compteUtilisateur.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/compteutilisateurs')
   }

  get() {
    return this.http.get<CompteUtilisateur[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<CompteUtilisateur>(`${this.url}/${id}`);
  }

  getByEmail(email : string | null){
    const params = { userEmail: email};
    return this.http.get<CompteUtilisateur>(`${this.url}/searchByEmail`, { params })
  }

  create(compteUtilisateur: CompteUtilisateur) {
    return this.http.post(this.url, compteUtilisateur);
  }

  update(compteUtilisateur: CompteUtilisateur) {
    return this.http.put(`${this.url}/${compteUtilisateur.id}`, compteUtilisateur);
  }

  delete(compteUtilisateur : CompteUtilisateur) {
    return this.http.delete(`${this.url}/${compteUtilisateur.id}`)
  }
  
}