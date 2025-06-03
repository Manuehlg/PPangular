import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExplotacionesComponent } from './explotaciones/explotaciones.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PozosComponent } from './pozos/pozos.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'explotaciones', component: ExplotacionesComponent, data: { title: 'Explotaciones' } },
      { path: 'explotaciones/:id', component: ExplotacionesComponent, data: { title: 'Detalles de Explotación' } },
      { path: 'pozos', component: PozosComponent, data: { title: 'Pozos' } },
      { path: 'informacion', component: InformacionComponent, data: { title: 'Información' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { } 