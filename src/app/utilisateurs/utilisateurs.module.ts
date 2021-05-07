import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspensionUtilisateurComponent } from './suspension-utilisateur/suspension-utilisateur.component';
import { SuppressionUtilisateurComponent } from './suppression-utilisateur/suppression-utilisateur.component';
import { ReactivationUtilisateurComponent } from './reactivation-utilisateur/reactivation-utilisateur.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { AuthentificationUtilisateurComponent } from './authentification-utilisateur/authentification-utilisateur.component';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditionUtilisateurComponent } from './edition-utilisateur/edition-utilisateur.component';


@NgModule({
  declarations: [
    SuspensionUtilisateurComponent,
    SuppressionUtilisateurComponent,
    ReactivationUtilisateurComponent,
    ListeUtilisateurComponent,
    FormulaireUtilisateurComponent,
    AuthentificationUtilisateurComponent,
    InscriptionUtilisateurComponent,
    EditionUtilisateurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NgSelectModule,
    UtilisateursRoutingModule,
  ]
})
export class UtilisateursModule { }