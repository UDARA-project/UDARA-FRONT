import { Component, OnInit } from '@angular/core';
import { FormulaireNotificationComponent } from '../../notifications/formulaire-notification/formulaire-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Notif } from 'src/app/models/notif.interface';
import { Routes, RouterModule, Router } from '@angular/router';
import { CompteUtilisateurService } from 'src/app/services';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';

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

  utilisateur : CompteUtilisateur

  logo_path : string = "./assets/images/logoUdara.png";

  constructor(
    protected modalService: NgbModal,
    private router : Router,
    private userService : CompteUtilisateurService
  ) { }

  ngOnInit(): void {
    console.log("notif", this.notifs);
    this.chargerUtilisateur()
    
  }

  openModal(){
    this.modalService.open(FormulaireNotificationComponent);
  }
  
  logout(){
 
    localStorage.removeItem('token');
    this.router.navigate(['accueil']);
    document.location.reload();
    console.log(localStorage);
    
  }

  chargerUtilisateur() {
    this.userService.getByEmail(localStorage.getItem('token')).subscribe(user => {
        console.log('utilisateur', user);
        this.utilisateur = user;
    });
  }
}