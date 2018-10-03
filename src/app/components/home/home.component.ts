import { Component, OnInit } from "@angular/core";
import { IntentsService } from "../../services/intents.service";
import { Observable } from "rxjs";

import { TrainingModel } from "../../models/training.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  myIntents: any;
  tableHeader: any[];
  intents: TrainingModel[];
  constructor(private intentService: IntentsService) {}

  missedDialogues: any = [
    { dialogue: "dummy", probableIntents: ["yes", "no", "printing-issue"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "hello"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "printing-issue"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "hello"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "printing-issue"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "hello"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "printing-issue"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "hello"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "printing-issue"] },
    { dialogue: "dummy", probableIntents: ["yes", "no", "hello"] }
  ];
  items = ["Yes", "No", "printing-issue"];

  ngOnInit() {
    this.intentService.getAllIntentsWithSentences().subscribe(data => {
      this.intents = data;
      // this.myIntents = data.map(intents => intents.intentName);
      // this.intents = this.myIntents.join(', ');
      console.log(this.intents);
    });

    this.tableHeader = [
      // { field: 'No', header: 'No' },
      { field: "intentName", header: "Intents" },
      { field: "sentences", header: "Sentences" }
      // { field: 'Actions', header: 'Actions' }
    ];
  }

  getIntents() {
    return this.intents;
  }

  onChange(event) {
    console.log(event);
  }
}


export class TrainingMissedDialogues {
  constructor(public dialogues: string, public currentIntent: Array<any>) {
  }
}