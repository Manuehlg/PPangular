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
import {UsuarioComponent} from './Pages/usuario/usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explotaciones', component: ExplotacionesComponent },
  { path: 'explotaciones/:id', component: ExplotacionesComponent },
  { path: 'informacion', component: InformacionComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'pozos', component: PozosComponent },
      { path: 'usuario', component: UsuarioComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
