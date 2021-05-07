import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteUtilisateurService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentification-utilisateur',
  templateUrl: './authentification-utilisateur.component.html',
  styleUrls: ['./authentification-utilisateur.component.css']
})
export class AuthentificationUtilisateurComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<CompteUtilisateur>;
  public currentUser: Observable<CompteUtilisateurService>;

  email: string = "";
  form: FormGroup 

  constructor(private http: HttpClient, private compteUtilisateurService: CompteUtilisateurService, private toastr: ToastrService, private router: Router, public fb: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.fb.group({ 
      email: ['', Validators.required], 
      password:['', Validators.required] 
    }); 
  }

  login(form: NgForm) {
    this.compteUtilisateurService.getByEmail(form.value.email).subscribe(param => {
      console.log(param);
      if (param) {
        localStorage.setItem("token", param.email)
        if(param.motDePasse === form.value.motDePasse) {    
          this.router.navigate(['accueil'])
        } else {
          this.toastr.error("Le mot de passe ou l'identifiant ne sont pas valides")
        }
       
      } else {
        this.toastr.error('Erreur de saisie')
      }
    })
  }

}


