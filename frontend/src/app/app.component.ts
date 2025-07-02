import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/tareas" routerLinkActive="active">Lista de Tareas</a> |
      <a routerLink="/crear-tarea" routerLinkActive="active">Crear Tarea</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background: #eee;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    nav a {
      margin-right: 10px;
      text-decoration: none;
    }
    .active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
