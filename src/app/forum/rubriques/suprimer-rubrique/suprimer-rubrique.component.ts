import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { RubriqueService } from '../../../services';

@Component({
  selector: 'app-suprimer-rubrique',
  templateUrl: './suprimer-rubrique.component.html',
  styleUrls: ['./suprimer-rubrique.component.css']
})
export class SuprimerRubriqueComponent implements OnInit {
  @Input() rubrique : Rubrique

  constructor(
    private rubriqueService : RubriqueService,
    public dialogRef: MatDialogRef<SuprimerRubriqueComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.rubrique)
  }

  annuler(){
    this.dialogRef.close()
  }

  valider(){
    console.log("appuie valider")
    this.rubriqueService.delete(this.rubrique.id).subscribe(res => {
      if (res) {
        this.dialogRef.close
        console.log("c'est good !")
      }
    })

  }
}
