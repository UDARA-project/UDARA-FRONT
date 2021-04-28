import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormulaireNotificationComponent } from './notifications/formulaire-notification/formulaire-notification.component';
import { AccueilDataComponent } from './page-accueil/accueil-data/accueil-data.component';
import { CreationFavoriComponent } from './page-accueil/creation-favori/creation-favori.component';
import { ExtractionDataComponent } from './page-accueil/extraction-data/extraction-data.component';
import { Page404Component } from './page404/page404.component';



const routes: Routes = [
    { path: '**', redirectTo: 'udara/page404' },

    // Frame :
    { path: 'udara/formNotif', component: FormulaireNotificationComponent},
    { path: 'udara/accueil', component: AccueilDataComponent},
    { path: 'udara/ajoutFavori', component: CreationFavoriComponent},
    { path: 'udara/extractionData', component: ExtractionDataComponent},
    { path: 'udara/page404', component: Page404Component},

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }