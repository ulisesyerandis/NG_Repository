import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public router: any;

  constructor() { }

  ngOnInit() { }

goToStudents() {
throw new Error('Method not implemented.');

this.router.navigate(['students']);
// this.router.navigateByUrl('/student');
// this.router.push('students');
}
  title = 'Ulises Yerandis';
}
