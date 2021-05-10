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
    private modale: NgbActiveModal,
    private communeService: CommuneService) { }

  ngOnInit(): void {
    this.initializeDepartements();
  }

  close(){
    this.modale.dismiss()
  }

  confirm(){
    this.modale.close()
  }

  initializeDepartements() {
    this.communeService.getEveryNameOfDepartement().subscribe(array => this.nomDepartements = array)
  }

  keyupDepartement(nomDepartement: string) {
    this.communeService.getEveryCommuneByDepartement(nomDepartement).subscribe(array => this.nomVilles = array);
  }

}
