import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AjoutFilConversationComponent } from './ajout-fil-conversation/ajout-fil-conversation.component';
import { AjoutRubriqueComponent } from './ajout-rubrique/ajout-rubrique.component';
import { ContenuFilConversationComponent } from './contenu-fil-conversation/contenu-fil-conversation.component';
import { ListeFilsConversationsComponent } from './liste-fils-conversations/liste-fils-conversations.component';
import { ListeRubriqueComponent } from './liste-rubrique/liste-rubrique.component';



const routes: Routes = [
    { path: '**', redirectTo: 'udara/page404' },

    // Forum 
    { path: 'udara/ajoutFilsDConversation', component: AjoutFilConversationComponent},
    { path: 'udara/ajoutRubrique', component: AjoutRubriqueComponent},
    { path: 'udara/contenuFilDConversation', component: ContenuFilConversationComponent},
    { path: 'udara/listeFilsConversations', component: ListeFilsConversationsComponent},
    { path: 'udara/listeRubrique', component: ListeRubriqueComponent},

 

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }