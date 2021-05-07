import { Component, OnInit } from '@angular/core';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';

@Component({
  selector: 'app-edition-utilisateur',
  templateUrl: './edition-utilisateur.component.html',
  styleUrls: ['./edition-utilisateur.component.css']
})
export class EditionUtilisateurComponent implements OnInit {

  user : CompteUtilisateur = {     
    id: 1,
    nom: "tete",
    prenom: "trtr",
    nomUtilisateur: "trrrrr",
    commune: "ttrrr",
    email: "sfsfdg",
    motDePasse: "sfgsdg",
    codePostal: "sdsdvqs",
    statutActif: true}

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
