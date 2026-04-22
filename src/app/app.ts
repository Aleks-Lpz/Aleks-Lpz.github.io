import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Agregamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { DataService } from './servicios/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  miPersona: any;

  // Inyectamos el detector de cambios
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataService.getDatos().subscribe({
      next: (data) => {
        this.miPersona = data;
        this.cdr.detectChanges(); // <--- FORZAMOS LA VISTA
        console.log('Datos cargados en variable:', this.miPersona);
      },
      error: (err) => console.error('Error al asignar datos:', err)
    });
  }
}
