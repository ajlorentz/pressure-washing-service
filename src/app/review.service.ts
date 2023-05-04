import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Review {
  name: string;
  rating: string;
  description: string;
}

@Injectable({
  providedIn:'root'
})

export class ReviewService {

  private serverUrl = '';

  constructor(private http: HttpClient) { }

  public getAllReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.serverUrl).pipe();
  }

  public createReview(review: Review): Observable<Review>{
    return this.http.post<Review>(this.serverUrl, review).pipe();
  }

}