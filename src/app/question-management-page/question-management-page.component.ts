import { Component, OnInit } from '@angular/core';
import { Question } from 'src/classes/question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-management-page',
  templateUrl: './question-management-page.component.html',
  styleUrls: ['./question-management-page.component.css']
})
export class QuestionManagementPageComponent implements OnInit {

  constructor(public data: DataService) {

  }

  ngOnInit(): void {
  }

  edit(item: Question) {

  }

  delete(item: Question) {

  }

  create(){
    
  }
}
