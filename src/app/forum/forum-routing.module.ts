import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AjoutFilConversationComponent } from './ajout-fil-conversation/ajout-fil-conversation.component';
import { ContenuFilConversationComponent } from './contenu-fil-conversation/contenu-fil-conversation.component';
import { ListeFilsConversationsComponent } from './liste-fils-conversations/liste-fils-conversations.component';
import { ListeRubriqueComponent } from './rubriques/liste-rubrique/liste-rubrique.component';



const routes: Routes = [

    // Forum 
    { path: 'ajoutFilsDConversation', component: AjoutFilConversationComponent},
    { path: 'contenuFilDConversation', component: ContenuFilConversationComponent},
    { path: 'listeFilsConversations', component: ListeFilsConversationsComponent},
    { path: 'listeRubrique', component: ListeRubriqueComponent},
 

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }