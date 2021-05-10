import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AjoutFilConversationComponent } from './ajout-fil-conversation/ajout-fil-conversation.component';
import { ContenuFilConversationComponent } from './contenu-fil-conversation/contenu-fil-conversation.component';
import { ForumRoutingModule } from './forum-routing.module';
import { ListeFilsConversationsComponent } from './liste-fils-conversations/liste-fils-conversations.component';
import { ListeRubriqueComponent } from './rubriques/liste-rubrique/liste-rubrique.component';
import { CarteFilConversationComponent } from './carte-fil-conversation/carte-fil-conversation.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { SuprimerRubriqueComponent } from './rubriques/suprimer-rubrique/suprimer-rubrique.component';


@NgModule({
  declarations: [
    ListeRubriqueComponent,
    ListeFilsConversationsComponent,
    ContenuFilConversationComponent,
    AjoutFilConversationComponent,
    CarteFilConversationComponent,
    SuprimerRubriqueComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ForumRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule
  ]
})
export class ForumModule { }
