import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactivationUtilisateurComponent } from '../reactivation-utilisateur/reactivation-utilisateur.component';
import { SuppressionUtilisateurComponent } from '../suppression-utilisateur/suppression-utilisateur.component';
import { SuspensionUtilisateurComponent } from '../suspension-utilisateur/suspension-utilisateur.component';
import { FormInscriptionDTO } from '../../models/formInscriptionDTO.interface';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  formInscription : FormInscriptionDTO

  constructor(protected modalService: NgbModal) { }

  ngOnInit(): void {
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
