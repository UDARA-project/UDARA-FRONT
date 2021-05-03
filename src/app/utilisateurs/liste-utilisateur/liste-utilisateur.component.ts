import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactivationUtilisateurComponent } from '../reactivation-utilisateur/reactivation-utilisateur.component';
import { SuppressionUtilisateurComponent } from '../suppression-utilisateur/suppression-utilisateur.component';
import { SuspensionUtilisateurComponent } from '../suspension-utilisateur/suspension-utilisateur.component';
import { FormInscriptionDTO } from '../../models/formInscriptionDTO.interface';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  utilisateurs :CompteUtilisateur[] = []

  formInscription : FormInscriptionDTO

  constructor(protected modalService: NgbModal, private compteUtilisateurService: CompteUtilisateurService) { }

  ngOnInit(): void {
    this.listeUtilisateurs();
  }

  listeUtilisateurs(){
    this.compteUtilisateurService.get().subscribe(res => {
      this.utilisateurs = res;
    })
  }

  ajoutSuspendre(){
    this.modalService.open(
      SuspensionUtilisateurComponent
    )
  }

  ajoutSupprimer(){
    this.modalService.open(
      SuppressionUtilisateurComponent
    )
  }

    activation(){
      this.modalService.open(
        ReactivationUtilisateurComponent
      )
  }

  condition = false;

}
