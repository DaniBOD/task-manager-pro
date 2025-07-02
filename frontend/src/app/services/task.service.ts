import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tareas: Task[] = [];
  private nextId = 1;

  constructor() {
    this.tareas = [
      {
        id: this.nextId++,
        titulo: 'Ejemplo de tarea',
        descripcion: 'Esta es una tarea de prueba',
        prioridad: 'media',
        estado: 'pendiente',
        fechaVencimiento: new Date('2025-07-15')
      }
    ];
  }

  getTareas(): Observable<Task[]> {
    return of(this.tareas);
  }

  agregarTarea(tarea: Omit<Task, 'id'>): void {
    const nuevaTarea: Task = { id: this.nextId++, ...tarea };
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  actualizarTarea(id: number, datos: Partial<Task>): void {
    const index = this.tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tareas[index] = { ...this.tareas[index], ...datos };
    }
  }

  obtenerTareaPorId(id: number): Task | undefined {
    return this.tareas.find(t => t.id === id);
  }
}
