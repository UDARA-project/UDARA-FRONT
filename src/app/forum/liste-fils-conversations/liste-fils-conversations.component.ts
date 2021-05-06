import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutFilConversationComponent } from '../ajout-fil-conversation/ajout-fil-conversation.component';
import { RubriqueService } from '../../services';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { FilConversation } from 'src/app/models/filConversation.interface';

@Component({
  selector: 'app-liste-fils-conversations',
  templateUrl: './liste-fils-conversations.component.html',
  styleUrls: ['./liste-fils-conversations.component.css']
})
export class ListeFilsConversationsComponent implements OnInit {
  rubriques : Rubrique[] = []

  constructor(
    public dialog: MatDialog,
    private rubriqueService : RubriqueService) { }

  ngOnInit(): void {
    this.getRubriquesList()
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

  

}
