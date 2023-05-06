import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

export interface Review {
  id: number;
  name: string;
  rating: number;
  description: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-review-main',
  templateUrl: './review-main.component.html',
  styleUrls: ['./review-main.component.css']
})
export class ReviewMainComponent implements OnInit {
  public reviews: Review[] = [];

  tiles: Tile[] = [{text: '', cols: 12, rows: 11, color: ''},{text: '', cols: 12, rows: 1, color: 'lightgreen'}];

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