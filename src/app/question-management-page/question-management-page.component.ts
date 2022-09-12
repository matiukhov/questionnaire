import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/classes/question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-management-page',
  templateUrl: './question-management-page.component.html',
  styleUrls: ['./question-management-page.component.css']
})
export class QuestionManagementPageComponent implements OnInit {

  constructor(public data: DataService, private router: Router) {
    console.log('QuestionManagementPageComponent data', data);
  }

  ngOnInit(): void {
  }

  edit(item: Question) {
    this.router.navigate(['edit']); //, { queryParams: { id: item.Id } }
  }

  delete(item: Question) {
    this.data.delete(item);
  }

  create() {

  }

  clear() {
    this.data.clear();
  }

  sortedByCreateDate() {
    return this.data.Questions.sort((a, b) => a.CD > b.CD ? -1 : a.CD === b.CD ? 0 : 1);
  }
}
