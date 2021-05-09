
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteUtilisateurService } from '../services/compte-utilisateur.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private compteUtilisateurService : CompteUtilisateurService, private router : Router){}

  async canActivate() : Promise<any> {   
     if (localStorage.getItem('token')) {      
       let res = await this.compteUtilisateurService.getByEmail(localStorage.getItem('token')).toPromise()      
       if (res) {        
         return true      
        }    
        } else {            
          return this.router.navigate(['utilisateurs/authentification'])    
        }  
      }
}