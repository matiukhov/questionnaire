import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { Answer } from 'src/classes/answer';
import { Question } from 'src/classes/question';
import { eQuestionTypes } from 'src/classes/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-answer-page',
  templateUrl: './question-answer-page.component.html',
  styleUrls: ['./question-answer-page.component.css']
})
export class QuestionAnswerPageComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  userSingleAnswer(question: Question, event: MatRadioChange) {
    this.data.SetSingleAnswer(question, event.value);
    console.log('userSingleAnswer', question, event);
  }

  userMultiAnswer(question: Question, answer: Answer, event: MatCheckboxChange) {
    console.log('userMultiAnswer', question, answer, event);
    if (event.checked)
      this.data.SetMultiAnswer(question, answer);
    else
      this.data.ResetMultiAnswer(question, answer);
  }

  userOpenAnswer(question: Question, event: any) {
    this.data.SetSingleAnswer(question, new Answer(event.target.value, true));
    console.log('userOpenAnswer', question, event.target.value);
  }

  answer(item: Question) {
    console.log('answer', item);
    this.data.SetAnswer(item);
  }

  reanswer(item: Question) {
    this.data.ResetAnswer(item);
  }

  isCorrect(item: Question) {
    if (item.Type == eQuestionTypes.open) {
      console.log("isCorrect  eQuestionTypes.open", item)
      return item.SelectedAnswers.length == 1 && item.SelectedAnswers[0].Text.length > 2 && item.SelectedAnswers[0].Text.length < 256;
    }

    let _correctAns = item.AvalibleAnswers.filter(x => x.IsRight).sort((a, b) => a.Text > b.Text ? 1 : a.Text == b.Text ? 0 : -1).map(x => x.Text);
    let _selectAns = item.SelectedAnswers.sort((a, b) => a.Text > b.Text ? 1 : a.Text == b.Text ? 0 : -1).map(x => x.Text);
    console.log('isCorrect', _correctAns, _selectAns, this.isEquils(_correctAns, _selectAns), item);
    return this.isEquils(_correctAns, _selectAns);
  }

  isEquils(arr1: string[], arr2: string[]) {
    return JSON.stringify(arr1) == JSON.stringify(arr2);
  }

  sortedByAnswerDate() {
    return this.data.AnsweredQuestions.sort((a, b) => a.AD > b.AD ? -1 : a.AD === b.AD ? 0 : 1);
  }

}
