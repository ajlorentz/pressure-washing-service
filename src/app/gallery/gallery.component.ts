import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = ['https://i.pinimg.com/originals/cb/5e/cb/cb5ecbdca7b134ebf76ce0e5b1c873a5.jpg', 'https://www.tannerspressurewashing.com/wp-content/uploads/2019/08/concrete-pressure-washing-6.jpg', 'https://i.pinimg.com/736x/ce/89/06/ce890674fa5c57057141f0ee45962f7c.jpg', 'https://i.pinimg.com/736x/0d/9d/68/0d9d688c41980083d175c1f793cdaa7c--pressure-washing-cleaning-companies.jpg', 'https://homeyou.s3.amazonaws.com/media/Pressure-washing-the-house/pressure-washing-price.jpg', 'https://www.pressurewashingclearwater.com/uploads/1/3/0/3/13036185/patio-cleaning-tampa-bay-before-after-images_orig.jpg','https://i.pinimg.com/originals/d1/60/31/d16031043f0014d8ab4872c4cb1359b1.png', 'https://dublin-powerwashing.ie/wp-content/uploads/2020/01/Pressure-Washing-Before-After.jpg', 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1677062/164108_877775.png'];

  tiles: Tile[] = [{text: '', cols: 12, rows: 1, color: 'lightgreen'}];

  constructor() { }

  ngOnInit() {
  }

}