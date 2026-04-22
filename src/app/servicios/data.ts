import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) {}

  // Métodos para obtener cada colección
  getHeader(): Observable<any[]> {
    const ref = collection(this.firestore, 'header');
    return collectionData(ref);
  }

  getWorkExperience(): Observable<any[]> {
    const ref = collection(this.firestore, 'work-experience');
    return collectionData(ref);
  }

  getEducation(): Observable<any[]> {
    const ref = collection(this.firestore, 'education');
    return collectionData(ref);
  }

  getSkills(): Observable<any[]> {
    const ref = collection(this.firestore, 'skills');
    return collectionData(ref);
  }

  getCertificates(): Observable<any[]> {
    const ref = collection(this.firestore, 'certificates');
    return collectionData(ref);
  }

  getLanguages(): Observable<any[]> {
    const ref = collection(this.firestore, 'languages');
    return collectionData(ref);
  }

  getInterests(): Observable<any[]> {
    const ref = collection(this.firestore, 'interests');
    return collectionData(ref);
  }
}
