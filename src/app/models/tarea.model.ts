export interface Tarea {
  id: number;
  nombre: string;
  estado: boolean;
  prioridad?: 'alta' | 'media' | 'baja';
  fechaVencimiento: Date;
}
