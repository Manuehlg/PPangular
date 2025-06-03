import { Component } from '@angular/core';

@Component({
  standalone: false, // Asegúrate de que sigue siendo standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoPozo';
}
