import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { NgForm } from '@angular/forms';
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

  constructor(private http: HttpClient, private compteUtilisateurService: CompteUtilisateurService, private toastr: ToastrService, private router: Router) { }

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

  login(form: NgForm) {
    this.compteUtilisateurService.getByEmail(form.value.email).subscribe(param => {
      console.log(param);
      if (param) {
        localStorage.setItem("token", param.email);
        this.router.navigate(['accueil'])
      } else {
        this.toastr.error('Erreur de saisie')
      }
    })
  }

}


