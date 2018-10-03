import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { IntentsService } from '../../services/intents.service';
import { Observable } from 'rxjs';

import { TrainingModel } from '../../models/training.model';

@Component({
  selector: 'app-intent-analyser',
  templateUrl: './intent-analyser.component.html',
  styleUrls: ['./intent-analyser.component.css']
})
export class IntentAnalyserComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  dropdownList = [];
  selectedIntents = [];
  // toppings = new FormControl();

  mydropdownSettings = {
    singleSelection: false,
    text: 'Select Intents',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'myclass custom-class'
  };

  constructor(private intentService: IntentsService) {}

  displayedColumns: string[] = ['No', 'Intent', 'Sentences'];
  dataSource = new IntentDataSource(this.intentService);

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.intentService.getAllIntentsWithSentences().subscribe(data => {
    //   this.dropdownList = data;
    // });
}

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onItemSelect(item: any) {
    this.selectedIntents = item.intentName;
    console.log(item);
    console.log(this.selectedIntents);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedIntents);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}

export class IntentDataSource extends DataSource<any> {
  constructor(private intentService: IntentsService) {
    super();
  }
  connect(): Observable<TrainingModel[]> {
    return this.intentService.getAllIntentsWithSentences();
  }
  disconnect() {}

}
