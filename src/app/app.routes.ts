import { Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './Pages/home/home.component';
import { ExplotacionesComponent } from './Pages/explotaciones/explotaciones.component';
import { InformacionComponent } from './Pages/informacion/informacion.component';
import { LoginComponent } from './Pages/login/login.component';
import { PozosComponent } from './Pages/pozos/pozos.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

// Guard
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'explotaciones', component: ExplotacionesComponent },
      { path: 'explotaciones/:id', component: ExplotacionesComponent },
      { path: 'informacion', component: InformacionComponent },
      { path: 'pozos', component: PozosComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
