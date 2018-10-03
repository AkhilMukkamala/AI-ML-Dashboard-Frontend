import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



import { TrainingModel } from '../models/training.model';


@Injectable({
  providedIn: 'root'
})
export class IntentsService {

  private apiUrl = 'http://127.0.0.1:5507';

  constructor( private http: HttpClient) { }

  // getAllIntents(): Observable<TrainingModel[]> {
  //   return this.http.get<TrainingModel[]>(this.apiUrl + '/getIntents');
  // }
    getAllIntentsWithSentences(): Observable<TrainingModel[]>  {
    return this.http.get<TrainingModel[]>(this.apiUrl + '/getAll');
  }

  getByIntentName(): Observable<TrainingModel[]>  {
    return this.http.get<TrainingModel[]>(this.apiUrl + '/getByIntentName');
  }

  updateByIntent(body): Observable<TrainingModel[]>  {
     return this.http.post<TrainingModel[]>(this.apiUrl + '/updateByIntent', body);
  }
  
  removeSentenceByIntent(body): Observable<TrainingModel[]>  {
    return this.http.post<TrainingModel[]>(this.apiUrl + '/removeByIntent', body);
  }
}
