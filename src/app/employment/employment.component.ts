import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  formData: any = {};
  submitted: boolean = false;
  tiles: Tile[] = [{ text: '', cols: 12, rows: 1, color: 'lightgreen' }];
  constructor() {}
  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {}
}
