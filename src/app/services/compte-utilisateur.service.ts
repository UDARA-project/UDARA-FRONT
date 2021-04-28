import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CompteUtilisateur } from '../models/compteUtilisateur.interface';

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurService {

  private url: string = environment.urlBack + '/api/compteutilisateurs/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<CompteUtilisateur[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<CompteUtilisateur>(this.url + id);
  }

  create(compteUtilisateur : CompteUtilisateur) {
    return this.http.post(this.url, compteUtilisateur);
  }

  update(compteUtilisateur : CompteUtilisateur) {
    return this.http.put(this.url + compteUtilisateur.id, compteUtilisateur);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }
  
}