import {Component, input, Input} from '@angular/core';
import { CommonModule} from '@angular/common';
import { Explotacion} from '../../core/models/Explotacion';

@Component({
  selector: 'app-buscador-explo',
  imports: [
    CommonModule,
  ],
  templateUrl: './buscador-explo.component.html',
  styleUrl: './buscador-explo.component.css'
})
export class BuscadorExploComponent {
  @Input() Explotacion!: Explotacion;
}
