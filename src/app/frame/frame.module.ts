import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './header/navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
import { ListeNotificationsComponent } from './notifications/liste-notifications/liste-notifications.component';
import { FormulaireNotificationComponent } from './notifications/formulaire-notification/formulaire-notification.component';
import { CreationFavoriComponent } from './page-accueil/creation-favori/creation-favori.component';
import { ExtractionDataComponent } from './page-accueil/extraction-data/extraction-data.component';
import { BarreRechercheComponent } from './page-accueil/barre-recherche/barre-recherche.component';
import { PageAccueilComponent } from './page-accueil/page-accueil/page-accueil.component';
import { AccueilDataComponent } from './page-accueil/accueil-data/accueil-data.component';



@NgModule({
  declarations: [
    NavbarComponent,
    Page404Component,
    FooterComponent,
    ListeNotificationsComponent,
    FormulaireNotificationComponent,
    CreationFavoriComponent,
    ExtractionDataComponent,
    BarreRechercheComponent,
    PageAccueilComponent,
    AccueilDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrameModule { }
