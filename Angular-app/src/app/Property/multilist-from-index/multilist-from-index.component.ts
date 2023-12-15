import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multilist-from-index',
  templateUrl: './multilist-from-index.component.html',
  styleUrls: ['./multilist-from-index.component.css']
})
export class MultilistFromIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  itemsPerSlide = 5;
  singleSlideOffset = true;
 
  slides = [
    {image: 'assets/image/internal.jpg'},
    {image: 'assets/image/internal2.jpg'},
    {image: 'assets/image/internal3.jpg'},
    {image: 'assets/image/internal4.jpg'},
    {image: 'assets/image/internal5.jpg'},
    {image: 'assets/image/internal6.jpg'},
    {image: 'assets/image/internal7.jpg'},
    {image: 'assets/image/internal8.jpg'},
    {image: 'assets/image/internal1.jpg'},
    {image: 'assets/image/internal2.jpg'}
  ];
}
