import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutFilConversationComponent } from '../ajout-fil-conversation/ajout-fil-conversation.component';
import { CompteUtilisateurService, FilConversationService, RubriqueService } from '../../services';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { FilConversation } from 'src/app/models/filConversation.interface';
import { Router } from '@angular/router';
import _ from 'underscore';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';

@Component({
  selector: 'app-liste-fils-conversations',
  templateUrl: './liste-fils-conversations.component.html',
  styleUrls: ['./liste-fils-conversations.component.css']
})
export class ListeFilsConversationsComponent implements OnInit {
  rubriques : Rubrique[] = []
  filsConversations : FilConversation[] = []
  utilisateur : CompteUtilisateur

  constructor(
    public dialog: MatDialog,
    private rubriqueService : RubriqueService,
    private filConversationService : FilConversationService,
    private userService : CompteUtilisateurService,
    ) { }

  ngOnInit(): void {
    this.getRubriquesList()
    this.getFilsConversations()
    this.chargerUtilisateur();
  }

  openAjoutFilConversion(){
    this.dialog.open(AjoutFilConversationComponent);
  }

  getRubriquesList(){
   this.rubriqueService.get().subscribe(res => {
     this.rubriques = res
     console.log('rubriques', this.rubriques);
     
   })
  }

  getFilsConversations(){
    this.filConversationService.get().subscribe(res => {
      this.filsConversations = res
      console.log('filsConversations', this.filsConversations)
    })
  }

  filterByRubrique(rubrique : Rubrique){
    console.log("filterByRubrique rubrique :", rubrique);
    this.filConversationService.findByRubrique(rubrique.id).subscribe(res => {
      console.log("res filsConversation rubrique",res)
      this.filsConversations = res
    })
  }

  chargerUtilisateur() {
    this.userService.getByEmail(localStorage.getItem('token')).subscribe(user => {
        console.log('utilisateur', user);
        this.utilisateur = user;
    });
  }

  deleteFilConversation(filConversation : FilConversation){
    console.log("delete", filConversation)
    this.filConversationService.delete(filConversation.id).subscribe(res => {
      console.log("res", res)
    })
  }

}
