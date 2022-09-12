import { IChoice } from "./iChoices";
import { eQuestionTypes } from "./types";

export class Question {
    constructor() {
        this.Type = eQuestionTypes.unknown;
        this.Choice = null;
        this.OpenText = '';
        this.Question = '';
    }
    public Question:String;
    public Type: eQuestionTypes;
    public Choice: IChoice | null;
    public OpenText: string;
}