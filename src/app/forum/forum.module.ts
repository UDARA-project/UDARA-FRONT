import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRubriqueComponent } from './liste-rubrique/liste-rubrique.component';
import { AjoutRubriqueComponent } from './ajout-rubrique/ajout-rubrique.component';
import { ListeFilsConversationsComponent } from './liste-fils-conversations/liste-fils-conversations.component';
import { ContenuFilConversationComponent } from './contenu-fil-conversation/contenu-fil-conversation.component';
import { AjoutFilConversationComponent } from './ajout-fil-conversation/ajout-fil-conversation.component';
import { ForumRoutingModule } from './forum-routing.module';



@NgModule({
  declarations: [
    ListeRubriqueComponent,
    AjoutRubriqueComponent,
    ListeFilsConversationsComponent,
    ContenuFilConversationComponent,
    AjoutFilConversationComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
