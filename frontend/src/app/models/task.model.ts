export type TaskPriority = 'alta' | 'media' | 'baja';
export type TaskStatus = 'pendiente' | 'completada';

export interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: TaskPriority;
  estado: TaskStatus;
  fechaVencimiento: Date;
}
