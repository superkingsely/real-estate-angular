import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/Property';
import { DataShareService } from 'src/app/services/dataShare.service';
// import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties: Property[] = [];
  todaysDate=new Date()
  City=''
  search=''
  SortByParams:string=''
  SortDir='ascend'
  
 
  constructor(
    private myService:MyServiceService,
    private route:ActivatedRoute,
    private shareData:DataShareService
    ) {
    
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    // receiving data from a sibling comp
    this.shareData.currentSortByParams.subscribe(sub=>this.SortByParams=sub)
    this.shareData.currentSortDir.subscribe(sub=>this.SortDir=sub)
    this.shareData.currentSearch.subscribe(source=>this.search=source)
    console.log('okayless',this.SortByParams)
    // a deprication here
    this.myService.AddApiGet(this.SellRent).subscribe((data:Property[])=>{
      // list of property | card
      this.properties=data;
      // const newProperty=JSON.parse(<string>localStorage.getItem('newProp'))
      // if(newProperty.SellRent===this.SellRent){
      //   we are putting the saved obj in d prop array resulting to our issue 
      //   this.properties=[newProperty,...this.properties]
      //   // issue?:after successfully adding one property class obj,to add a new one the old one will disappear
      // }
      console.log(this.properties)

    }
    // ,error=>{
    //   console.log(error)
    // }
    )
  }
  handleSearch(){
    this.search=this.City
  }
  handleClear(){
    this.City=''
    this.search=''
  }

  handleSortOrder(){
    // toggle
    if(this.SortDir==='ascend'){
      this.SortDir='descend'
    }else{
      this.SortDir='ascend'
    }
  }


}
