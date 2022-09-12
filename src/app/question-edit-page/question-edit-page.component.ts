import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/classes/answer';
import { eQuestionTypes } from 'src/classes/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.css']
})
export class QuestionEditPageComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('params', params)
      let _id = params['id'];
      console.log(_id);
      if (_id && _id.length > 0) {
        this.id = parseInt(_id);
        let _question = this.data.Get(this.id);
        if (_question) {
          this.question = _question.Question;
          this.type = _question.Type;
          this.answers = _question.AvalibleAnswers;
        }
      }
    });
  }
  public answers: Answer[] = [];

  private id: number = 0;

  public question: string = '';

  public type: eQuestionTypes = eQuestionTypes.unknown;

  types(): number[] {
    return Object.values(eQuestionTypes).filter(value => typeof value === 'number').map(value => { return value as number });
  }

  new() {
    this.answers.push(new Answer('', false));
  }

  save() {
    this.data.Edit(this.id, this.question, this.type);
    this.router.navigate(['/']);
  }

  checked(items: Answer[]) {
    return items.filter(x => x.IsRight);
  }
}
