import { Answer } from "./answer";
import { eQuestionTypes } from "./types";

export class Question {
    constructor(id: number, question: string, type: eQuestionTypes, answers: Answer[]) {
        this.Id = id;
        this.Type = type;
        this.Question = question;
        this.AvalibleAnswers = answers;
        this.SelectedAnswers = [];
        this.CD = new Date();
        this.AD = new Date();
        this.IsAnswered = false;
    }

    // constructor() {
    //     this.Type = eQuestionTypes.unknown;
    //     this.Choice = null;
    //     this.Question = '';
    // }
    public Id: number;
    public Question: string;
    public Type: eQuestionTypes;
    public CD: Date;
    public AD: Date;
    public AvalibleAnswers: Answer[];
    public SelectedAnswers: Answer[];
    public IsAnswered: boolean;

}