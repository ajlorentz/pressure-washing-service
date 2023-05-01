import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    {text: '', cols: 4, rows: 2, color: ''},
    {text: '', cols: 3, rows: 1, color: ''},
    {text: `
      <h2>Contact Us</h2>
  
      <p>If you have any questions or feedback, please feel free to reach out to us:</p>
  
      <ul>
        <li><strong>Email:</strong> pwservice@company.com</li>
        <li><strong>Phone:</strong> (701) 777-7700</li>
        <li><strong>Address:</strong> 123 Main St, Fargo, ND</li>
      </ul>
    `, cols: 1, rows: 2, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 2, rows: 1, color: ''},
  ];
  

}