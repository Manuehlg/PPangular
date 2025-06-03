import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  slideIcons = [
    'fas fa-water',
    'fas fa-industry',
    'fas fa-leaf'
  ];

  slideTitles = [
    'Gestión Eficiente del Agua',
    'Control de Explotaciones',
    'Sostenibilidad Ambiental'
  ];

  slideDescriptions = [
    'Optimiza el uso y distribución del agua en tus pozos con tecnología avanzada',
    'Mantén un registro detallado y control total de tus explotaciones',
    'Contribuye al uso responsable de los recursos hídricos'
  ];

  slideLinks = [
    '/pozos',
    '/explotaciones',
    '/informacion'
  ];

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    // Reiniciar el temporizador cuando se cambia manualmente
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

  private startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slideTitles.length;
    }, 5000); // Cambia cada 5 segundos
  }
}
