import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  constructor(private studentService:StudentService){}
  students: student[] = [];
  ngOnInit() {this.loadStudent()}

  loadStudent()
  {
    this.studentService.getStudents().subscribe((data:student[])=>{this.students = data});
  }
  
  deleteStudent(id:number)
  {
    this.studentService.deleteStudent(id).subscribe(() => {this.loadStudent()});
  }
}
