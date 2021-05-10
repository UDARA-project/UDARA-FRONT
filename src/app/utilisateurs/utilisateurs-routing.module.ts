import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthGuard } from '../guards/auth.guard';
import { AuthentificationUtilisateurComponent } from './authentification-utilisateur/authentification-utilisateur.component';
import { EditionUtilisateurComponent } from './edition-utilisateur/edition-utilisateur.component';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { ReactivationUtilisateurComponent } from './reactivation-utilisateur/reactivation-utilisateur.component';
import { SuppressionUtilisateurComponent } from './suppression-utilisateur/suppression-utilisateur.component';
import { SuspensionUtilisateurComponent } from './suspension-utilisateur/suspension-utilisateur.component';


const routes: Routes = [
    { path: '**', redirectTo: 'udara/page404' },

    //Utilisateurs
    { path: 'authentification', component: AuthentificationUtilisateurComponent},
    { path: 'editionUtilisateur', component: EditionUtilisateurComponent, canActivate: [AuthGuard]},
    { path: 'inscriptionUtilisateur', component: InscriptionUtilisateurComponent},
    { path: 'listeUtilisateur', component: ListeUtilisateurComponent},
    { path: 'reactivationUtilisateur', component: ReactivationUtilisateurComponent},
    { path: 'suppressionUtilisateur', component: SuppressionUtilisateurComponent},
    { path: 'suspensionUtilisateur', component: SuspensionUtilisateurComponent},

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }