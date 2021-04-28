import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
import { ListeNotificationsComponent } from './notifications/liste-notifications/liste-notifications.component';
import { FormulaireNotificationComponent } from './notifications/formulaire-notification/formulaire-notification.component';
import { CreationFavoriComponent } from './page-accueil/creation-favori/creation-favori.component';
import { ExtractionDataComponent } from './page-accueil/extraction-data/extraction-data.component';
import { BarreRechercheComponent } from './page-accueil/barre-recherche/barre-recherche.component';
import { AccueilDataComponent } from './page-accueil/accueil-data/accueil-data.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    Page404Component,
    FooterComponent,
    ListeNotificationsComponent,
    FormulaireNotificationComponent,
    CreationFavoriComponent,
    ExtractionDataComponent,
    BarreRechercheComponent,
    AccueilDataComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class FrameModule { }
