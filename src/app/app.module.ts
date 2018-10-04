// Angular Core - imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom Components - Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IntentAnalyserComponent } from './components/intent-analyser/intent-analyser.component';
import { IntentTrainingComponent } from './components/intent-training/intent-training.component';

// PrimeNg Modules - Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CodeHighlighterModule } from 'primeng/codehighlighter';


// Angular Material Module

import { MaterialModule } from './material';

// Other Modules
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import { JsonGeneratorComponent } from './components/json-generator/json-generator.component';



// Services - Providers
// import { IntentsService } from './services/intents.service';

// Routes

const routes: Routes = [
  { path: '', redirectTo: 'training', pathMatch: 'full' },
  {
    path: 'training',
    component: IntentTrainingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'json',
    component: JsonGeneratorComponent
  }
];

@NgModule({
  declarations: [AppComponent, IntentTrainingComponent, HomeComponent, IntentAnalyserComponent, JsonGeneratorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    SlimLoadingBarModule,
    InputTextModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule,
    MaterialModule,
    AngularMultiSelectModule,
    ToastrModule,
    CodeHighlighterModule,
    TagInputModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    RouterModule.forRoot(routes)
  ],
  // entryComponents: [IntentTrainingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
