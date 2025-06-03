import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-informacion',
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './informacion.component.html',
  standalone: true,
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  // Lógica del componente aquí
}
