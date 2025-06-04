import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Explotacion } from '../../core/models/Explotacion';
import { ExplotacionesService } from '../../services/explotaciones.service';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-explotaciones',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './explotaciones.component.html',
  standalone: true,
  styleUrls: ['./explotaciones.component.css']
})
export class ExplotacionesComponent implements OnInit {
  explotaciones: Explotacion[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private explotacionesService: ExplotacionesService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadExplotaciones();
  }

  loadExplotaciones(): void {
    this.loading = true;
    this.error = null;

    this.explotacionesService.getExplotaciones().subscribe({
      next: (data) => {
        this.explotaciones = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar las explotaciones:', error);
        this.error = 'No se pudieron cargar las explotaciones. Por favor, intenta de nuevo más tarde.';
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: this.error,
          life: 5000
        });
      }
    });
  }

  viewExplotacion(id: number): void {
    this.router.navigate(['/explotaciones', id]);
  }

  retryLoad(): void {
    this.loadExplotaciones();
  }
}
