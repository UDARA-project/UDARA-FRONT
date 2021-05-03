import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { Page404Component } from './page404/page404.component';
import { ListeNotificationsComponent } from './notifications/liste-notifications/liste-notifications.component';
import { FormulaireNotificationComponent } from './notifications/formulaire-notification/formulaire-notification.component';
import { CreationFavoriComponent } from './page-accueil/creation-favori/creation-favori.component';
import { ExtractionDataComponent } from './page-accueil/extraction-data/extraction-data.component';
import { BarreRechercheComponent } from './page-accueil/barre-recherche/barre-recherche.component';
import { AccueilDataComponent } from './page-accueil/accueil-data/accueil-data.component';
import { FrameRoutingModule } from './frame-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Page404Component,
    ListeNotificationsComponent,
    FormulaireNotificationComponent,
    CreationFavoriComponent,
    ExtractionDataComponent,
    BarreRechercheComponent,
    AccueilDataComponent,
  ],
  imports: [
    CommonModule,
    FrameRoutingModule, 
    SharedModule,
    FormsModule
  ]
})
export class FrameModule { }
