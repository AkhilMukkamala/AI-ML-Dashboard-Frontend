import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-json-generator',
  templateUrl: './json-generator.component.html',
  styleUrls: ['./json-generator.component.css']
})
export class JsonGeneratorComponent implements OnInit {

  intentName: string = '';
  dialogue: string = '';
  


  constructor() { 
    
  }

  ngOnInit() {
  }

  onPreviewClick() {
    console.log('Preview Clicked')
  }

  onSubmit() {
    console.log("Form Submitted")
  }
}
