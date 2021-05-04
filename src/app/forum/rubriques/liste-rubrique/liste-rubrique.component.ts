import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Rubrique } from 'src/app/models/rubrique.interface';
import { RubriqueService } from '../../../services';
import { SuprimerRubriqueComponent } from '../suprimer-rubrique/suprimer-rubrique.component';


@Component({
  selector: 'app-liste-rubrique',
  templateUrl: './liste-rubrique.component.html',
  styleUrls: ['./liste-rubrique.component.css']
})
export class ListeRubriqueComponent implements OnInit {
  rubriques : Rubrique[] = []

  constructor(
    private rubriqueService : RubriqueService,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
   this.rubriquesList()
  }

  rubriquesList(){
    this.rubriqueService.get().subscribe(res => {
      this.rubriques = res
      console.log('rubriques', this.rubriques);
    })    
  }

  // Carte Affichage normal
  editRubrique(rubrique: Rubrique){
    rubrique.edit = !rubrique.edit
  }

  addRubrique(){
    this.rubriques.push({ id : null , nom: null , edit: true});
  }

  annuler(rubrique: Rubrique){
    console.log(rubrique);
    if(!rubrique.id){
      console.log("on doit supprimer la carte");
    } else {
      rubrique.edit = !rubrique.edit
    }
    
  }

 

  // Bouton supprimer
  suprimerRubrique(rubrique : Rubrique){
    let dialogue = this.dialog.open(SuprimerRubriqueComponent);
    dialogue.componentInstance.rubrique = rubrique;
  }

  // toater
  showSuccess() {
    this.toastr.success('Successful creation !');
  }
  shocFail() {
    this.toastr.error('Error creation !');
  }

}