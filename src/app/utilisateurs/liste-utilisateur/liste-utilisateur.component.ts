import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuppressionUtilisateurComponent } from '../suppression-utilisateur/suppression-utilisateur.component';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  utilisateurs: CompteUtilisateur[] = []
  compteUtilisateur: CompteUtilisateur;

  constructor(protected modalService: NgbModal,
    private toastr: ToastrService,
    private compteUtilisateurService: CompteUtilisateurService) { }

  ngOnInit(): void {
    this.listeUtilisateurs();
  }

  listeUtilisateurs() {
    this.compteUtilisateurService.get().subscribe(res => this.utilisateurs = res)
  }

  switchActivation(compteUtilisateur: CompteUtilisateur) {
    compteUtilisateur.statutActif = !compteUtilisateur.statutActif;
    this.compteUtilisateurService.update(compteUtilisateur).subscribe(res =>
      compteUtilisateur.statutActif ? this.toastr.success('Utilisateur activé') : this.toastr.warning('Utilisateur suspendu')
    );
  }

  openModal(compteUtilisateur: CompteUtilisateur) {
    let modal = this.modalService.open(SuppressionUtilisateurComponent);
    modal.componentInstance.utilisateurs = compteUtilisateur;
    modal.result.then(
      (confirm) => this.compteUtilisateurService.delete(compteUtilisateur).subscribe(res => {
        this.toastr.error('Utilisateur supprimé')
        this.listeUtilisateurs()
      }),
      (dismiss) => console.log("dismiss")
      )
  }


}
