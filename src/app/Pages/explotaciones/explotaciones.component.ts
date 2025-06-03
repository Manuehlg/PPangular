import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Explotacion } from '../../core/models/Explotacion';
import { HttpClientModule } from '@angular/common/http';
import { ExplotacionesService } from '../../services/explotaciones.service';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-explotaciones',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './explotaciones.component.html',
  standalone: true,
  styleUrls: ['./explotaciones.component.css']
})
export class ExplotacionesComponent implements OnInit {
  listaExplotaciones: Explotacion[] = [];
  filteredExplotaciones: Explotacion[] = [];
  searchTerm: string = '';
  currentExplotacion: Explotacion | null = null;

  constructor(
    private explotacionesService: ExplotacionesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Vista de detalles
        this.loadExplotacionDetails(Number(params['id']));
      } else {
        // Vista de lista
        this.loadExplotaciones();
      }
    });
  }

  loadExplotaciones(): void {
    this.explotacionesService.getByUsuario(1).subscribe({
      next: (explotaciones) => {
        this.listaExplotaciones = explotaciones;
        this.filteredExplotaciones = explotaciones;
      },
      error: (error: Error) => {
        console.error('Error al obtener las explotaciones:', error);
      }
    });
  }

  loadExplotacionDetails(id: number): void {
    this.explotacionesService.getExplotacionById(id).subscribe({
      next: (explotacion) => {
        if (explotacion) {
          this.currentExplotacion = explotacion;
        } else {
          this.router.navigate(['/Pages/explotaciones']);
        }
      },
      error: (error: Error) => {
        console.error('Error al obtener los detalles de la explotación:', error);
        this.router.navigate(['/Pages/explotaciones']);
      }
    });
  }

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.filteredExplotaciones = this.listaExplotaciones;
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase().trim();
    this.filteredExplotaciones = this.listaExplotaciones.filter(explotacion =>
      explotacion.name.toLowerCase().includes(searchTermLower) ||
      explotacion.city.toLowerCase().includes(searchTermLower)
    );
  }

  viewDetails(explotacion: Explotacion): void {
    this.router.navigate(['/Pages/explotaciones', explotacion.id]);
  }

  goBack(): void {
    this.router.navigate(['/Pages/explotaciones']);
  }
}
