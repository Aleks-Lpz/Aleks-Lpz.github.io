import { Component, OnInit } from '@angular/core';
import { DataService } from './servicios/data';

@Component({
  selector: 'app-root',
  standalone: true, // Esto es lo que causa el conflicto con declarations
  imports: [CommonModule], // Para que el *ngIf funcione si no usas @if
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit { // Verifica que diga AppComponent
  miPersona: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDatos().subscribe(data => {
      this.miPersona = data;
    });
  }
}
