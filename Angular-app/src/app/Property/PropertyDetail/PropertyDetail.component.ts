import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/Property';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-PropertyDetail',
  templateUrl: './PropertyDetail.component.html',
  styleUrls: ['./PropertyDetail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  okay=0
  public propertyId!:number
  property:Property|undefined=new Property();
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
    {image: 'assets/image/internal9.jpg'}
  ];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private Service:MyServiceService
    ) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id']
    console.log(this.route)
    this.route.data.subscribe((data:Data)=>{
      this.property=data['prop']
    })
    // ohh we are not using the .params ,instead we use data
    // this.route.params.subscribe(params=>{
    //   console.log('hmm',params)
    //   this.propertyId= +params['id']

    //   // call propidFn and input Id
    //   // #region
    //   // this.Service.GetPropById(this.propertyId).subscribe(
    //   //   // pass a callback
    //   //   (propModel:Property|undefined)=>{
    //   //   this.property=propModel
    //   //     // this.property.Name = propModel?.Name;
    //   //     // console.log('okay',this.property,propModel)
    //   //   },error=>this.router.navigate(['/'])
    //   // )
    //   // #endregion
    // })

  }
  handleclick(){
    this.router.navigate(['/'])
  }
  handlenext(){
    this.propertyId++
    this.router.navigate(['/properties/' + this.propertyId])
  }
}
