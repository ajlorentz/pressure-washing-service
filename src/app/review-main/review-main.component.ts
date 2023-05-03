import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

export interface Review {
  name: string;
  rating: string;
  description: string;
}

@Component({
  selector: 'app-review-main',
  templateUrl: './review-main.component.html',
  styleUrls: ['./review-main.component.css']
})
export class ReviewMainComponent implements OnInit {
  public reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getAllReviewsFromServer();
  }

  public getAllReviewsFromServer(){
    this.reviewService.getAllReviews().subscribe((data:Review[]) => {
      this.reviews = data;
    })
  }
}