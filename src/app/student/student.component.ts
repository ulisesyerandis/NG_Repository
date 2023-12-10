import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
StudentService: any;
  student: any;

  
public fillStudentsData(): void {
  this.StudentService.getAllStudents().subscribe({
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
