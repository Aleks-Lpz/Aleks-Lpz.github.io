import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- FALTA ESTA LÍNEA
import { DataService } from './servicios/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Ahora sí reconocerá qué es CommonModule
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  miPersona: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDatos().subscribe(data => {
      this.miPersona = data;
    });
  }
}
