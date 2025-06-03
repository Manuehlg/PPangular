import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExplotacionesComponent } from './explotaciones/explotaciones.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PozosComponent } from './pozos/pozos.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Shared
    SharedModule,
    ComponentsModule,

    // PrimeNG
    CardModule,
    ButtonModule,
    DropdownModule,

    // Standalone components
    HomeComponent,
    ExplotacionesComponent,
    InformacionComponent,
    PozosComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    HomeComponent,
    ExplotacionesComponent,
    InformacionComponent,
    PozosComponent,
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
