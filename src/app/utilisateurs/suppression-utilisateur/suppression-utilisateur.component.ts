import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suppression-utilisateur',
  templateUrl: './suppression-utilisateur.component.html',
  styleUrls: ['./suppression-utilisateur.component.css']
})
export class SuppressionUtilisateurComponent implements OnInit {

  constructor(protected modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(){
    this.modalService.dismiss()
  }

  confirm(){
    this.modalService.close()
  }

}
