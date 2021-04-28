import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AjoutFilConversationComponent } from './forum/ajout-fil-conversation/ajout-fil-conversation.component';
import { AjoutRubriqueComponent } from './forum/ajout-rubrique/ajout-rubrique.component';
import { ContenuFilConversationComponent } from './forum/contenu-fil-conversation/contenu-fil-conversation.component';
import { ListeFilsConversationsComponent } from './forum/liste-fils-conversations/liste-fils-conversations.component';
import { ListeRubriqueComponent } from './forum/liste-rubrique/liste-rubrique.component';
import { FormulaireNotificationComponent } from './frame/notifications/formulaire-notification/formulaire-notification.component';
import { AccueilDataComponent } from './frame/page-accueil/accueil-data/accueil-data.component';
import { CreationFavoriComponent } from './frame/page-accueil/creation-favori/creation-favori.component';
import { ExtractionDataComponent } from './frame/page-accueil/extraction-data/extraction-data.component';
import { Page404Component } from './frame/page404/page404.component';
import { AuthentificationUtilisateurComponent } from './utilisateurs/authentification-utilisateur/authentification-utilisateur.component';
import { EditionUtilisateurComponent } from './utilisateurs/edition-utilisateur/edition-utilisateur.component';
import { InscriptionUtilisateurComponent } from './utilisateurs/inscription-utilisateur/inscription-utilisateur.component';
import { ListeUtilisateurComponent } from './utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { ReactivationUtilisateurComponent } from './utilisateurs/reactivation-utilisateur/reactivation-utilisateur.component';
import { SuppressionUtilisateurComponent } from './utilisateurs/suppression-utilisateur/suppression-utilisateur.component';
import { SuspensionUtilisateurComponent } from './utilisateurs/suspension-utilisateur/suspension-utilisateur.component';

const routes: Routes = [
    { path: '**', redirectTo: 'udara/page404' },

    // Forum 
    { path: 'udara/ajoutFilsDConversation', component: AjoutFilConversationComponent},
    { path: 'udara/ajoutRubrique', component: AjoutRubriqueComponent},
    { path: 'udara/contenuFilDConversation', component: ContenuFilConversationComponent},
    { path: 'udara/listeFilsConversations', component: ListeFilsConversationsComponent},
    { path: 'udara/listeRubrique', component: ListeRubriqueComponent},

    // Frame :
    { path: 'udara/formNotif', component: FormulaireNotificationComponent},
    { path: 'udara/accueil', component: AccueilDataComponent},
    { path: 'udara/ajoutFavori', component: CreationFavoriComponent},
    { path: 'udara/extractionData', component: ExtractionDataComponent},
    { path: 'udara/page404', component: Page404Component},

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