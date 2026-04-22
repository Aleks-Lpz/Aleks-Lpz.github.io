import { Component, OnInit } from '@angular/core';
import { DataService } from './servicios/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  title = 'Aleks.github.io';
  miPersona: any; // Aquí se guardará la info de la guía

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los datos
    this.dataService.getDatos().subscribe(data => {
      this.miPersona = data;
    });
  }
}
