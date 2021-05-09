import { Component, OnInit } from '@angular/core';
import { FormulaireNotificationComponent } from '../../notifications/formulaire-notification/formulaire-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Notif } from 'src/app/models/notif.interface';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  creationNotification: FormulaireNotificationComponent
  notifs: Notif[] = [{
    id: 1, 
    texte: "Notification exemple 2", 
    heure: "17:36 - 05 mai 2021",
    lu: false
  },
  {
    id: 2, 
    texte: "Notification exemple 1", 
    heure: "12:45 - 12 decembre 2020",
    lu: false
  }]

  logo_path : string = "./assets/images/logoUdara.png";

  constructor(
    protected modalService: NgbModal,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log("notif", this.notifs);
    
  }

  openModal(){
    this.modalService.open(FormulaireNotificationComponent);
  }
  
  logout(){
 
    localStorage.removeItem('token');
    this.router.navigate(['utilisateurs/authentification']);
    console.log(localStorage);
    
  }
}