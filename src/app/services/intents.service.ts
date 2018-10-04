import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



import { TrainingModel } from '../models/training.model';


@Injectable({
  providedIn: 'root'
})
export class IntentsService {

  private apiUrl = 'https://ai-ml-dashboard-backend.herokuapp.com';

  constructor( private http: HttpClient) { }

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
