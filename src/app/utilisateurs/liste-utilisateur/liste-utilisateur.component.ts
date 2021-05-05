import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactivationUtilisateurComponent } from '../reactivation-utilisateur/reactivation-utilisateur.component';
import { SuppressionUtilisateurComponent } from '../suppression-utilisateur/suppression-utilisateur.component';
import { SuspensionUtilisateurComponent } from '../suspension-utilisateur/suspension-utilisateur.component';
import { FormInscriptionDTO } from '../../models/formInscriptionDTO.interface';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service';
import { FormModifInfoPersoDTO } from 'src/app/models/formModifInfoPersoDTO.interface';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  utilisateurs: CompteUtilisateur[] = []
  compteUtilisateur: CompteUtilisateur;

  constructor(protected modalService: NgbModal, private compteUtilisateurService: CompteUtilisateurService) { }

  ngOnInit(): void {
    this.listeUtilisateurs();
  }

  listeUtilisateurs(){
    this.compteUtilisateurService.get().subscribe(res => {
      this.utilisateurs = res;
      console.log(this.utilisateurs)
    })
  }

  switchActivation(compteUtilisateur: CompteUtilisateur) {
    let formModifInfoPersoDTO: FormModifInfoPersoDTO = {
      motDePasse: compteUtilisateur.motDePasse,
      nouveauMotDePasse: compteUtilisateur.motDePasse,
      confirmerMotDePasse: compteUtilisateur.motDePasse,
      nom: compteUtilisateur.nom,
      prenom: compteUtilisateur.prenom,
      nomUtilisateur: compteUtilisateur.nomUtilisateur,
      ville: compteUtilisateur.commune,
      codePostal: compteUtilisateur.codePostal,
      Email: compteUtilisateur.email,
      statutActif: !compteUtilisateur.statutActif
    }
    console.log(formModifInfoPersoDTO);
    this.compteUtilisateurService.update(compteUtilisateur, formModifInfoPersoDTO).subscribe(res => console.log(res));
  }

  ajoutSuspendre(){
    this.modalService.open(
      SuspensionUtilisateurComponent
    )
  }

    activation(){
      this.modalService.open(
        ReactivationUtilisateurComponent
      )
  }

  openModal(utilisateur : CompteUtilisateur){
    console.log('utilisateur', utilisateur);
    
    let modal =  this.modalService.open(SuppressionUtilisateurComponent);
    modal.componentInstance.utilisateurs = utilisateur;
     modal.result.then((confirm) => {
       console.log('display');
       
       this.listeUtilisateurs()
     })
   }

  condition = false;

}
