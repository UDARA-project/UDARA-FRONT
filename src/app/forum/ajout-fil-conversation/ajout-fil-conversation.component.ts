import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilConversationService } from 'src/app/services/fil-conversation.service';

@Component({
  selector: 'app-ajout-fil-conversation',
  templateUrl: './ajout-fil-conversation.component.html',
  styleUrls: ['./ajout-fil-conversation.component.css']
})
export class AjoutFilConversationComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<AjoutFilConversationComponent>,
    private serviceFilConversation : FilConversationService
    
    ) { }

  ngOnInit(): void {
  }

  AjoutFilConversation(form : NgForm){
    if (form.valid) {
     this.serviceFilConversation.create(form.value).subscribe(res => {
      if (res) {
        console.log('res', res);
      }
    })
    }
  }
}
