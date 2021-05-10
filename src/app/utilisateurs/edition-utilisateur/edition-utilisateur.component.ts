import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { CompteUtilisateurService } from 'src/app/services';

@Component({
  selector: 'app-edition-utilisateur',
  templateUrl: './edition-utilisateur.component.html',
  styleUrls: ['./edition-utilisateur.component.css']
})
export class EditionUtilisateurComponent implements OnInit {

  missingNom: boolean;
  missingPrenom: boolean;
  missingNomUtilisateur: boolean;
  missingCommune: boolean;
  missingCodePostal: boolean;
  informationsValides: boolean;

  missingNouveauMdp: boolean;
  missingMdpConfirme: boolean;
  motDePasseConfirme: boolean;

  user: CompteUtilisateur;

  constructor(private userService : CompteUtilisateurService, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.user);
    this.chargerUtilisateur();
  }

  chargerUtilisateur() {
    this.userService.getByEmail(localStorage.getItem('token')).subscribe(user => {
        console.log('utilisateur', user);
        this.user = user;
    });
  }

  editMotDePasse(form: NgForm){
    this.missingNouveauMdp = form.value.mdp.trim().length;
    console.log(this.missingNouveauMdp);
    

    if (form.valid) {
      if (!form.value.isActive) {
        form.value.isActive = false;
      }
      this.motDePasseConfirme = form.value.mdp === form.value.mdpConfirme;
      if (this.motDePasseConfirme) {
        this.user.motDePasse = form.value.mdpConfirme;
        this.userService.update(this.user).subscribe(res => {
          console.log('res', res);
          this.toastr.success('de votre mot de passe', 'Confirmation de la modification');
          this.chargerUtilisateur();
        })
      } else {
        this.toastr.error('recommencer en saisissant 2 fois le même mot de passe', "Erreur mot de passe ! ")        
      }
    } else {
      this.toastr.error('recommencer en saisissant les deux champs nécessaires', "Echec d'actualisation du mot de passe'")
    }
  }

  editInfosUser(){
    this.missingNom = !this.user.nom || !this.user.nom.trim().length;
    this.missingPrenom = !this.user.prenom || !this.user.prenom.trim().length;
    this.missingNomUtilisateur = !this.user.nomUtilisateur || !this.user.nomUtilisateur.trim().length;
    this.missingCommune = !this.user.commune || !this.user.commune.trim().length;
    this.missingCodePostal = !this.user.codePostal || !this.user.codePostal.trim().length;
    this.informationsValides = !this.missingNom && !this.missingPrenom && !this.missingNomUtilisateur && !this.missingCodePostal && !this.missingCommune; 
    
    if (this.informationsValides) {
      this.userService.update(this.user).subscribe(res => {
        console.log('res', res);
        this.toastr.success('de vos informations personnelles', 'Enregistrement réussi');
        this.chargerUtilisateur();
      });
    } else {
      this.toastr.error("Saisie invalide", "Attention");
    }
  }

}
