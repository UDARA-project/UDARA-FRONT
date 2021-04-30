import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactivation-utilisateur',
  templateUrl: './reactivation-utilisateur.component.html',
  styleUrls: ['./reactivation-utilisateur.component.css']
})
export class ReactivationUtilisateurComponent implements OnInit {

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
