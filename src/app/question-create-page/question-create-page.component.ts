import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/classes/answer';
import { eQuestionTypes } from 'src/classes/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-create-page',
  templateUrl: './question-create-page.component.html',
  styleUrls: ['./question-create-page.component.css']
})
export class QuestionCreatePageComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  public question: string = '';

  public type: eQuestionTypes = eQuestionTypes.unknown;

  public answers: Answer[] = [];

  types(): number[] {
    return Object.values(eQuestionTypes).filter(value => typeof value === 'number').map(value => { return value as number });
  }

  create() {
    this.data.Add(this.question, this.type, this.answers);
    this.router.navigate(['/']);
  }

  new() {
    this.answers.push(new Answer('', false));
  }

  checked(items: Answer[]) {
    return items.filter(x => x.IsRight);
  }

}
