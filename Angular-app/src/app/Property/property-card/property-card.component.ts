import { Component, Input, OnInit} from '@angular/core';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
// import { Iproperty } from '../Iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input()property!: IPropertyBase;
  @Input()hidenIcons!:boolean
  ngOnInit(): void {
    // console.log('check-price',this.property.Price)
  }
  
}
