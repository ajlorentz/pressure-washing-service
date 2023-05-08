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
    {text: '', cols: 4, rows: 1, color: ''},
    {text: `<img src="https://media.istockphoto.com/id/1336188285/photo/exterior-cleaning-work-in-progress.jpg?s=612x612&w=0&k=20&c=7dQgl7S4Sz6AETT5ycw4fockeSKnjYQfmFcg0QZwYaU=" alt="washing siding">`, cols: 4, rows: 4, color: 'black'},
    {text: '', cols: 4, rows: 3, color: ''},
    {text: `
    <div class="about-tile">
    <h2>About</h2>

    <p>Welcome to our pressure washing company! We are a team of dedicated professionals who are passionate about delivering top-quality pressure washing services to our clients.</p>

    <p>Our company was founded on the belief that a clean exterior is not only aesthetically pleasing, but also helps to maintain the structural integrity of your property. With years of experience in the pressure washing industry, we have honed our skills and techniques to provide the best possible results for our clients.</p>
    
    <p>We take pride in our attention to detail, and we always go the extra mile to ensure that every surface we clean is spotless. Whether you need your driveway, deck, or siding cleaned, we have the tools and expertise to get the job done right.</p>
    
    <p>At our company, we understand that every client has unique needs and expectations. That's why we take the time to listen to your concerns and tailor our services to meet your specific requirements. We also believe in transparent pricing, so you can always expect a fair and honest quote for our services.</p>
    
    <p>Our team consists of friendly and professional technicians who are dedicated to delivering exceptional customer service. We strive to create a positive experience for our clients from start to finish, and we're always happy to answer any questions you may have along the way.</p>
    
    <p>We are fully licensed and insured, and we adhere to all safety regulations to ensure a safe and efficient service. We also use eco-friendly cleaning products, so you can feel good about the impact our services have on the environment.</p>
    
    <p>Thank you for considering our pressure washing company for your cleaning needs. We look forward to helping you achieve a cleaner, brighter exterior for your home or business.</p>
    </div>
  `, cols: 3, rows: 9, color: 'lightgreen'},
    {text: '', cols: 1, rows: 6, color: ''},
    {text: '', cols: 5, rows: 1, color: ''},
    {text: `
      <h2>Contact Us</h2>
  
      <p>If you have any questions or feedback, please feel free to reach out to us:</p>
        <p><strong>Email:</strong> pwservice@company.com</p>
        <p><strong>Phone:</strong> (701) 777-7700</p>
        <p><strong>Address:</strong> 123 Main St, Fargo, ND</p>

    `, cols: 3, rows: 2, color: 'lightgreen'},
    {text: '', cols: 4, rows: 1, color: ''},
    {text: `<img src="https://media.istockphoto.com/id/1306260764/photo/man-cleaning-red-conrete-pavement-block-using-high-pressure-water-cleaner-paving-cleaning.jpg?s=612x612&w=0&k=20&c=Rfqp12b1yGUiOhHGF86HmqtGlfotrtIebnDgw_LuXAQ=" alt="washing brick">`, cols: 4, rows: 4, color: 'black'},
    {text: '', cols: 12, rows: 1, color: ''},
    {text: '', cols: 12, rows: 1, color: 'lightgreen'},
  ];
  

}