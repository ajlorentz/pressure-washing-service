import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  formData: any = {};
  submitted: boolean = false;
  constructor() {}
  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {}
}
