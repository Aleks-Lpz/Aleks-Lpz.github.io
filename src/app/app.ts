// src/app/app.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './servicios/data';

@Component({
  selector: 'app-root',
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
