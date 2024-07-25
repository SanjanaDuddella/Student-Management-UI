import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { student } from '../student.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  stud: student = new student();
 constructor(private studentService:StudentService, private router:Router){}

 ngOnInit() {}

 addStudent()
 {
  this.studentService.addStudent(this.stud).subscribe(() => {this.router.navigate(['/'])})
 };

}
