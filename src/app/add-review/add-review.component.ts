import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';



export interface Review {
  name: string;
  rating: string;
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
              private router: Router) { }

  ngOnInit() {
  }

  public createSubmit() {
    this.reviewService.createReview(this.review).subscribe((data) => {
      this.router.navigate(['/']).then();
    })
  }

}