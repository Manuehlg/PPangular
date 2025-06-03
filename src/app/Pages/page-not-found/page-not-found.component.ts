import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  ngOnInit() {
    // Iniciar la animación de la gota de agua
    this.startWaterAnimation();
  }

  private startWaterAnimation() {
    setInterval(() => {
      const waterDrop = document.querySelector('.water-drop') as HTMLElement;
      if (waterDrop) {
        waterDrop.classList.remove('animate');
        void waterDrop.offsetWidth; // Trigger reflow
        waterDrop.classList.add('animate');
      }
    }, 2000); // La animación se repite cada 2 segundos
  }
}
