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
    nom: "Flamel",
    prenom: "Nicolas",
    nomUtilisateur: "NicoFlamel",
    commune: "Monteux",
    email: "nicolas.flamel@email.fr",
    motDePasse: "mdp",
    codePostal: "84170",
    statutActif: true
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
