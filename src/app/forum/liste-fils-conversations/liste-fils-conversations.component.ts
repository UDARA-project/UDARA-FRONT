import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutFilConversationComponent } from '../ajout-fil-conversation/ajout-fil-conversation.component';
import { RubriqueService } from 'src/app/services/rubrique.service';
import { Rubrique } from 'src/app/models/rubrique.interface';

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
    this.rubriquesList()
  }

  OpenAjoutFilConversion(){
    this.dialog.open(AjoutFilConversationComponent);
  }

  rubriquesList(){
   this.rubriqueService.get().subscribe(res => {
     this.rubriques = res
     console.log('rubriques', this.rubriques);
     
   })
  }

  

}
