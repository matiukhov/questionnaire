export class Answer {
    constructor(text:string, isRight:boolean) {
        this.Text = text;
        this.IsRight = isRight;
    }
    public IsRight: boolean;
    public Text: string;
}