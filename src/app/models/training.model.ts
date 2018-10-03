// export class TrainingModel {
//     public intentName: string;
//     public sentences: Array<any>;

//     constructor(intentName: string, sentences: Array<any>) {
//         this.intentName = intentName;
//         this.sentences = sentences;
//     }
// }


export class TrainingModel {
    constructor(public intentName: string, public sentences: Array<any>) {
    }
}
