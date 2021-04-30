import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suspension-utilisateur',
  templateUrl: './suspension-utilisateur.component.html',
  styleUrls: ['./suspension-utilisateur.component.css']
})
export class SuspensionUtilisateurComponent implements OnInit {

  constructor(protected modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  // Méthode du modal
  close(){
    this.modalService.dismiss()
  }

  confirm(){
    this.modalService.close()
  }

}
