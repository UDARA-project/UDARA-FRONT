import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilConversation } from 'src/app/models/filConversation.interface';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { RubriqueService } from 'src/app/services';
import { FilConversationService } from 'src/app/services/fil-conversation.service';

@Component({
  selector: 'app-ajout-fil-conversation',
  templateUrl: './ajout-fil-conversation.component.html',
  styleUrls: ['./ajout-fil-conversation.component.css']
})
export class AjoutFilConversationComponent implements OnInit {
  rubriques : Rubrique[] = []
  rubriqueform : Rubrique

  constructor( 
    public dialogRef: MatDialogRef<AjoutFilConversationComponent>,
    private serviceFilConversation : FilConversationService,
    private rubriqueService : RubriqueService
    
    ) { }

  ngOnInit(): void {
    this.getRubriquesList()
  }

  getRubriquesList(){
    this.rubriqueService.get().subscribe(res => {
      this.rubriques = res
      console.log('rubriques add', this.rubriques);
      
    })
  }

  AjoutFilConversation(form : NgForm){
    form.value.rubrique = this.rubriqueform
    console.log('form value',form.value)
    if (form.valid) {
      console.log("coucou");
     this.serviceFilConversation.create(form.value).subscribe(res => {
      if (res) {
        console.log('res', res);
      }
    })
    }
  }

  selectrubrique(rubrique : Rubrique){
    this.rubriqueform = rubrique
    console.log("rubriqueSelected",rubrique)
  }


}
