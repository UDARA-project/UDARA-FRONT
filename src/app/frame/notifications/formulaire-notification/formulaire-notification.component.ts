import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommuneService } from 'src/app/services';

@Component({
  selector: 'app-formulaire-notification',
  templateUrl: './formulaire-notification.component.html',
  styleUrls: ['./formulaire-notification.component.css']
})
export class FormulaireNotificationComponent implements OnInit {

  villeSelectionnee: string;
  nomVilles: string[];
  nomDepartements: string[];

  constructor(
    protected modalService: NgbActiveModal, 
    private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initializeVilles();
    this.initializeDepartements();
  }

  close(){
    this.modalService.dismiss()
  }

  confirm(){
    this.modalService.close()
  }

  initializeVilles() {
    this.communeService.getEveryName().subscribe(array => { 
      this.nomVilles = array; 
      //console.log('nomVilles', this.nomVilles);     
    });
  }

  initializeDepartements() {
    this.communeService.getEveryNameOfDepartement().subscribe(array => this.nomDepartements = array)
  }

  keyupDepartement(nomDepartement: string) {
    this.communeService.getNameCommuneByDepartement(nomDepartement).subscribe(array => this.nomVilles = array);
  }

}
