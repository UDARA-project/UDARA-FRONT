import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
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
    { path: 'udara/authentification', component: AuthentificationUtilisateurComponent},
    { path: 'udara/editionUtilisateur', component: EditionUtilisateurComponent},
    { path: 'udara/inscriptionUtilisateur', component: InscriptionUtilisateurComponent},
    { path: 'udara/listeUtilisateur', component: ListeUtilisateurComponent},
    { path: 'udara/reactivationUtilisateur', component: ReactivationUtilisateurComponent},
    { path: 'udara/suppressionUtilisateur', component: SuppressionUtilisateurComponent},
    { path: 'udara/suspensionUtilisateur', component: SuspensionUtilisateurComponent},

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }