import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutFilConversationComponent } from '../ajout-fil-conversation/ajout-fil-conversation.component';
import { FilConversationService, RubriqueService } from '../../services';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { FilConversation } from 'src/app/models/filConversation.interface';

@Component({
  selector: 'app-liste-fils-conversations',
  templateUrl: './liste-fils-conversations.component.html',
  styleUrls: ['./liste-fils-conversations.component.css']
})
export class ListeFilsConversationsComponent implements OnInit {
  rubriques : Rubrique[] = []
  filsConversations : FilConversation[] = []

  constructor(
    public dialog: MatDialog,
    private rubriqueService : RubriqueService,
    private filConversationService : FilConversationService
    ) { }

  ngOnInit(): void {
    this.getRubriquesList(),
    this.getFilsConversations()
  }

  OpenAjoutFilConversion(){
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
      console.log('filsConversation', this.filsConversations)
    })
  }

  

}
