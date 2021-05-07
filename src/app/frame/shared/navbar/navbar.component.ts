import { Component, OnInit } from '@angular/core';
import { FormulaireNotificationComponent } from '../../notifications/formulaire-notification/formulaire-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  creationNotification: FormulaireNotificationComponent

  logo_path : string = "./assets/images/logoUdara.png";

  constructor(
    protected modalService: NgbModal,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalService.open(FormulaireNotificationComponent);
  }

}
