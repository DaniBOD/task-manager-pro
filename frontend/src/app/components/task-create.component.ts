import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../app/services/task.service';
import { TaskPriority } from '../../app/models/task.model'; 

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-create.component.html',
})
export class TaskCreateComponent {
  form = {
    titulo: '',
    descripcion: '',
    prioridad: 'media',
    fechaVencimiento: ''
  };

  constructor(private taskService: TaskService) {}

  crearTarea() {
    if (this.form.titulo.trim() && this.form.descripcion.trim() && this.form.fechaVencimiento) {
      this.taskService.agregarTarea({
        ...this.form,
        prioridad: this.form.prioridad as TaskPriority, 
        fechaVencimiento: new Date(this.form.fechaVencimiento),
        estado: 'pendiente'
      });
      this.form = {
        titulo: '',
        descripcion: '',
        prioridad: 'media',
        fechaVencimiento: ''
      };
    } else {
      alert('Por favor completa todos los campos obligatorios.');
    }
  }
}
