import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CompteUtilisateur } from '../models/compteUtilisateur.interface';
import { FormInscriptionDTO } from '../models/formInscriptionDTO.interface';

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

  create(formInscriptionDTO : FormInscriptionDTO) {
    return this.http.post(this.url, formInscriptionDTO );
  }

  update(compteUtilisateur: CompteUtilisateur, formInscriptionDTO : FormInscriptionDTO) {
    return this.http.put(this.url + compteUtilisateur.id, formInscriptionDTO);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }
  
}