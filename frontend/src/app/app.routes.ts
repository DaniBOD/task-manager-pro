import { Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'crear-tarea', component: TaskCreateComponent },
  { path: 'tareas', component: TaskListComponent },
];
