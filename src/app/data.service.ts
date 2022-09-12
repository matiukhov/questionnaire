import { Injectable } from '@angular/core';
import { Answer } from 'src/classes/answer';
import { Question } from 'src/classes/question';
import { eQuestionTypes } from 'src/classes/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ResetMultiAnswer(question: Question, answer: Answer) {
    let index = question.SelectedAnswers.indexOf(answer);
    if (index != -1){
      question.SelectedAnswers.splice(index, 1);
      this.save();
    }
  }
  SetMultiAnswer(question: Question, answer: Answer) {
    let index = question.SelectedAnswers.indexOf(answer);
    if (index == -1){
      question.SelectedAnswers.push(answer);
      this.save();
    }      
  }
  SetAnswer(item: Question) {
    item.IsAnswered = true;
    item.AD = new Date();
    this.save();
  }

  ResetAnswer(item: Question) {
    item.IsAnswered = false;
    item.SelectedAnswers = [];
    this.save();
  }

  SetSingleAnswer(item: Question, value: Answer) {
    item.SelectedAnswers = [value];
    this.save();
  }

  delete(item: Question) {
    this.Questions.splice(this.Questions.indexOf(item), 1);
    this.save();
  }

  clear() {
    this.Questions = [];
    this.save();
  }

  Edit(id: number, question: string, type: eQuestionTypes) {
    let _question = this.Get(id);
    if (_question) {
      _question.Question = question;
      _question.Type = type;
      this.save();
    }
  }

  Get(id: number): Question | undefined {
    return this.Questions?.find(x => x.Id == id);
  }

  Add(question: string, type: eQuestionTypes, answers: Answer[]) {
    this.Questions.push(new Question(this.Questions.length + 1, question, type, answers));
    this.save();
  }

  constructor() {
    let _questions = localStorage.getItem("questions");
    if (_questions && _questions.length > 0)
      this.Questions = JSON.parse(_questions);
    else
      this.Questions = [];
  }

  public Questions: Question[];

  public get UnansweredQuestions(): Question[] {
    return this.Questions.filter(x => !x.IsAnswered);
  }

  public get AnsweredQuestions(): Question[] {
    return this.Questions.filter(x => x.IsAnswered);
  }

  private save() {
    localStorage.setItem("questions", JSON.stringify(this.Questions));
  }
}
