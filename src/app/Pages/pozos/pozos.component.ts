import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-pozos',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DropdownModule],
  templateUrl: './pozos.component.html',
  standalone: true,
  styleUrls: ['./pozos.component.css']
})
export class PozosComponent {
  // Lógica del componente aquí
}
