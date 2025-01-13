import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PublicComponent } from './public/public.component';

// const routes: Routes = []
const routes: Routes = [
  { path: '', redirectTo: 'public/all-book', pathMatch: 'full' },
  { path: 'about-us', component: AppComponent },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) },
  { path: 'public', component: PublicComponent, loadChildren: () => import('./public/public.module').then(x => x.PublicModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
