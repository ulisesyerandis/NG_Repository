import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export default class StudentComponent {
  student: any;

  constructor(private service: StudentService)
  { }
  
public fillStudentsData(): void {
  this.service.getAllStudents().subscribe({
      next: (response: any) => {
          this.student = response;
          console.log("Hello world");
      },
      error: (error: any) => {
          console.log(error)
      },
  });
  
}
}
