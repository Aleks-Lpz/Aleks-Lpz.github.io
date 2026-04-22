import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Este método es el que llamaremos desde el componente
  getDatos(): Observable<any> {
    // Por ahora puedes apuntar a un JSON local o a una URL si ya tienes la API
    return this.http.get('assets/data/datos.json'); 
  }
}
