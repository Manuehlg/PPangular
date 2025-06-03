import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ExplotacionesComponent } from './Pages/explotaciones/explotaciones.component';
import { InformacionComponent } from './Pages/informacion/informacion.component';
import { LoginComponent } from './Pages/login/login.component';
import { PozosComponent } from './Pages/pozos/pozos.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explotaciones', component: ExplotacionesComponent, },
  { path: 'explotaciones/:id', component: ExplotacionesComponent,  },
  { path: 'informacion', component: InformacionComponent, },
  { path: 'pozos', component: PozosComponent, canActivate: [AuthGuard] },
  { path: 'usuario', component: PozosComponent, canActivate: [AuthGuard] }, // Assuming 'usuario' is also protected
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
