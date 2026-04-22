// src/app/servicios/data.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Asegúrate de tener HttpClientModule en tu app-module.ts
  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    // La guía suele usar un JSON en assets para simular la DB
   return this.http.get('data/persona.json');
  }
}
