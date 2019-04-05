import { AuthGuard } from './services/auth-guard.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const routes: Routes = [
  { path : 'appareils', canActivate: [AuthGuard], component : AppareilViewComponent},
  { path : 'appareils/:id', canActivate: [AuthGuard], component : SingleAppareilComponent},
  { path : 'auth', component : AuthComponent},
  { path : '', component : AppareilViewComponent},
  { path : 'not-found', component : FourOhFourComponent},
  /* '**' doit être à la fin car toutes les url match avec **,
   Angular parcourt tous les path et quand il rencontre ** il redirige vers l'url de **  */
  { path : '**', redirectTo : '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
