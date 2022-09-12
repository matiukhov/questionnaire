import { Injectable } from '@angular/core';
import { Question } from 'src/classes/question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    let _questions = localStorage.getItem("questions");
    if (_questions && _questions.length > 0)
      this.Questions = JSON.parse(_questions);
    else
      this.Questions = [];
  }

  public Questions: Question[];
}
