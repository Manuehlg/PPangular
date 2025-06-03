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

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => Usuario.fromJson(response)), // Usa tu método personalizado
      tap(user => {
        localStorage.setItem('userId', user.id?.toString() || '');
        localStorage.setItem('userName', user.nombre); // opcional
      }),
      catchError(this.handleError)
    );
  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  getCurrentUser(): Usuario | null {
    const id = localStorage.getItem('userId');
    const nombre = localStorage.getItem('userName');
    return id && nombre
      ? new Usuario(+id, '', '', '', '', nombre, '') // Puedes ajustar según lo que guardes
      : null;
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
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
