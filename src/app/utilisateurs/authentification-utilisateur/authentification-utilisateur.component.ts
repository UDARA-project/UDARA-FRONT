import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteUtilisateurService } from 'src/app/services';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentification-utilisateur',
  templateUrl: './authentification-utilisateur.component.html',
  styleUrls: ['./authentification-utilisateur.component.css']
})
export class AuthentificationUtilisateurComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<CompteUtilisateur>;
  public currentUser: Observable<CompteUtilisateurService>;

  email : string = "";

  constructor(private http: HttpClient, private authentificationService: AuthentificationService, private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
  }

//   login(nomUtilisateur, motDePasse) {
//     return this.http.post<any>(`${config.apiUrl}/utilisateurs/authentification`, { nomUtilisateur, motDePasse })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }));
// }

login(form : NgForm){
    
  this.authentificationService.getByEmail(form.value.email).subscribe( param => {
    console.log(param);
    if(param.length){
      localStorage.setItem("token", param[0].email);        
      this.router.navigate(['accueil'])      
    } else {       
      this.toastr.error('Erreur de saisie')      
    }
  })
  
}

}
