import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Review {
  id: number;
  name: string;
  rating: number;
  description: string;
}

@Injectable({
  providedIn:'root'
})

export class ReviewService {

  // private serverUrl = 'https://customerinfo-52cc7-default-rtdb.firebaseio.com/' + 'review.json';

  constructor(private http: HttpClient) { }

  // public getAllReviews(): Observable<Review[]>{
  //   return this.http.get<Review[]>(this.serverUrl).pipe();
  // }

  // public createReview(review: Review): Observable<Review>{
  //   return this.http.post<Review>(this.serverUrl, review).pipe();
  // }

  // createReview(newReview: Review) {
  //   return this.http.post(
  //     this.serverUrl,
  //     newReview
  //   );
  // }

  nextID: number = 0;

  getNextID(): number {
    return ++this.nextID;
  }

  createReview(newRev: Review){
    return this.http.post(
      'https://customerinfo-52cc7-default-rtdb.firebaseio.com/' + 'review.json',
      newRev
    );
  }

  getAllReviews(): Observable<Review[]> {
    return this.http
      .get<Review[]>(
        'https://customerinfo-52cc7-default-rtdb.firebaseio.com/' + 'review.json'
      )
      .pipe(
        map((responseData) => {
          const reviewArray: Review[] = [];
          for (let key in responseData) reviewArray.push(responseData[key]);
          return reviewArray;
        })
      );
  }
}