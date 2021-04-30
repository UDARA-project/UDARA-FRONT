import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.component.html',
  styleUrls: ['./inscription-utilisateur.component.css']
})
export class InscriptionUtilisateurComponent implements OnInit {

  constructor(private CompteUtilisateurService: CompteUtilisateurService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  saveUser(form : NgForm){
    if(form.valid){
      if (!form.value.isActive) {
        form.value.isActive = false;
      }
      this.CompteUtilisateurService.create(form.value).subscribe(res =>{
        this.toastr.success('Please fix the form errors and continue', 'Form Errors!')
        setTimeout(() => {this.router.navigate(['utilisateurs/listeUtilisateur']);
      }, 2000)
      }) 
      } else {
        this.toastr.error('Please fix the form errors and continue', "Form Errors")
      }
   }

}
