import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { HttpClient } from '@angular/common/http';


export interface Review {
  id: number;
  name: string;
  rating: number;
  description: string;
}


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  public review: Review = {} as Review;

  constructor(private reviewService: ReviewService,
              private router: Router, private http: HttpClient) { }
    
    rId: number = 0;
    rName: string;
    rRating: number;
    rDescription: string;

  ngOnInit() {
    this.rId = this.reviewService.getNextID();
  }

  // public createSubmit() {
  //   this.reviewService.createReview(this.review).subscribe((data) => {
  //     this.router.navigate(['/gallery']).then();
  //   })
  // }


  addNewReview() {
    const newReview: Review = {
      id: this.rId,
      name: this.rName,
      rating: this.rRating,
      description: this.rDescription,
    };
    this.reviewService
      .createReview(newReview)
      .subscribe((data) => console.log(data));

    this.reviewService.getAllReviews().subscribe();
  }

}