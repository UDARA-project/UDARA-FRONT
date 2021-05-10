import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthGuard } from './guards/auth.guard';
import { EditionUtilisateurComponent } from './utilisateurs/edition-utilisateur/edition-utilisateur.component';


const routes: Routes = [
    // { path: '**', redirectTo: 'udara/page404' },
    { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) },
    { path: 'frame', loadChildren: () => import('./frame/frame.module').then(m => m.FrameModule)  },
    { path: 'utilisateurs', loadChildren: () => import('./utilisateurs/utilisateurs.module').then(m => m.UtilisateursModule)  }

];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }