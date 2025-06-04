import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from '../core/models/Usuario';
import { environment } from '../../environments/environment';

interface LoginResponse {
  usuario: Usuario;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl + '/usuarios';

  constructor(private http: HttpClient) {
    // Verificar la sesión al iniciar el servicio
    this.checkSession();
  }

  private checkSession(): void {
    const token = localStorage.getItem('token');
    const lastActivity = localStorage.getItem('lastActivity');
    
    if (token && lastActivity) {
      // Verificar si han pasado más de 24 horas desde la última actividad
      const now = new Date().getTime();
      const last = parseInt(lastActivity, 10);
      
      if (now - last > 24 * 60 * 60 * 1000) {
        // Si han pasado más de 24 horas, cerrar sesión
        this.logout();
      } else {
        // Actualizar timestamp de última actividad
        this.updateLastActivity();
      }
    }
  }

  private updateLastActivity(): void {
    localStorage.setItem('lastActivity', new Date().getTime().toString());
  }

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        // Guardar token y datos de usuario
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.usuario.id?.toString() || '');
        localStorage.setItem('userName', response.usuario.nombre);
        this.updateLastActivity();
      }),
      map(response => response.usuario),
      catchError(this.handleError)
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.updateLastActivity();
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('lastActivity');
  }

  getCurrentUser(): Usuario | null {
    const id = localStorage.getItem('userId');
    const nombre = localStorage.getItem('userName');
    if (id && nombre) {
      this.updateLastActivity();
      return new Usuario(+id, '', '', '', nombre, '');
    }
    return null;
  }

  getUserId(): string | null {
    const id = localStorage.getItem('userId');
    if (id) {
      this.updateLastActivity();
      return id;
    }
    return null;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error en el servidor.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status === 401) {
        errorMessage = 'Credenciales inválidas';
      } else if (error.status === 404) {
        errorMessage = 'Usuario no encontrado';
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
