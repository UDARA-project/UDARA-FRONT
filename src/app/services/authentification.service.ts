import { Injectable } from '@angular/core';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { HttpClient } from '@angular/common/http';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService{

  url : string = 'http://localhost:4200/accueil'

  constructor(private http : HttpClient) {}

    getByEmail(email : string | null){
      return this.http.get<CompteUtilisateur[]>(this.url)
    }
   }

