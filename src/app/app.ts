import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  header: any;
  workExperience: any[] = [];
  education: any[] = [];
  skills: any[] = [];
  certificates: any[] = [];
  languages: any[] = [];
  interests: any[] = [];

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Suscripción masiva a todas las colecciones
    this.dataService.getHeader().subscribe(res => { this.header = res[0]; this.cdr.detectChanges(); });
    this.dataService.getWorkExperience().subscribe(res => { this.workExperience = res; this.cdr.detectChanges(); });
    this.dataService.getEducation().subscribe(res => { this.education = res; this.cdr.detectChanges(); });
    this.dataService.getSkills().subscribe(res => { this.skills = res; this.cdr.detectChanges(); });
    this.dataService.getCertificates().subscribe(res => { this.certificates = res; this.cdr.detectChanges(); });
    this.dataService.getLanguages().subscribe(res => { this.languages = res; this.cdr.detectChanges(); });
    this.dataService.getInterests().subscribe(res => { this.interests = res; this.cdr.detectChanges(); });
  }
}
