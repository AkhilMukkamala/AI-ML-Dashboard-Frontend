import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { IntentsService } from "../../services/intents.service";
import { ToastrService } from "ngx-toastr";
import { TrainingModel } from "../../models/training.model";

@Component({
  selector: "app-intent-training",
  templateUrl: "./intent-training.component.html",
  styleUrls: ["./intent-training.component.css"]
})
export class IntentTrainingComponent implements OnInit {
  @ViewChild("intentName")
  intentName: ElementRef;
  @ViewChild("sentence")
  sentence: ElementRef;
  @ViewChild("dintentName")
  dintentName: ElementRef;
  @ViewChild("dsentence")
  dsentence: ElementRef;

  myIntents: TrainingModel[];
  allIntents: any;
  intentsAfterDeletion: TrainingModel[];

  constructor(
    private intentService: IntentsService,
    private toastr: ToastrService,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.getAllIntentsWithSentences();
  }

  getAllIntentsWithSentences() {
    this.intentService.getAllIntentsWithSentences().subscribe(data => {
      this.allIntents = JSON.parse(JSON.stringify(data));
    });
  }

  addSentenceToIntent(intentName, sentence) {
    const body = { intentName, sentence };
    if (!intentName || !sentence) {
      this.toastr.error("IntentName/Sentence Missing", "Error");
    } else {
      this.intentService.updateByIntent(body).subscribe(data => {
        this.myIntents = JSON.parse(JSON.stringify(data));
        this.toastr.success("Sentence Added", "Successfull");
        this.intentName.nativeElement.value = "";
        this.sentence.nativeElement.value = "";
      });
    }
    this.getAllIntentsWithSentences();
  }
  deleteSentence(intentName, sentence) {
    const body = { intentName, sentence };
    if (!intentName || !sentence) {
      this.toastr.error("IntentName/Sentence Missing", "Error");
    } else {
      this.intentService.removeSentenceByIntent(body).subscribe(data => {
        this.intentsAfterDeletion = JSON.parse(JSON.stringify(data));
        this.toastr.success("Sentence Deleted", "Successfull");
        this.dintentName.nativeElement.value = "";
        this.dsentence.nativeElement.value = "";
      });
    }
    this.getAllIntentsWithSentences();
  }

  clearFields() {
    if (
      this.intentName.nativeElement.value === "" &&
      this.sentence.nativeElement.value === "" &&
      this.dintentName.nativeElement.value === "" &&
      this.dsentence.nativeElement.value === ""
    ) {
      this.toastr.info("Nothing to Clear", "Info");
    } else {
      this.intentName.nativeElement.value = "";
      this.sentence.nativeElement.value = "";
      this.dintentName.nativeElement.value = "";
      this.dsentence.nativeElement.value = "";
      this.toastr.success("Cleared", "Success");
    }
  }
}
