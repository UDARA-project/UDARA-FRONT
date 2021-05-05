import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteUtilisateur } from '../models/compteUtilisateur.interface';
import { FormInscriptionDTO } from '../models/formInscriptionDTO.interface';
import { FormModifInfoPersoDTO } from '../models/formModifInfoPersoDTO.interface';
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

  create(formInscriptionDTO : FormInscriptionDTO) {
    return this.http.post(this.url, formInscriptionDTO );
  }

  update(compteUtilisateur: CompteUtilisateur, formModifInfoPersoDTO : FormModifInfoPersoDTO) {
    return this.http.put(`${this.url}/${compteUtilisateur.id}`, formModifInfoPersoDTO);
  }

  delete(utilisateur : CompteUtilisateur) {
    return this.http.delete(`${this.url}/${utilisateur.id}`)
  }
  
}