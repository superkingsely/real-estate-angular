import { Attribute, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertifyServiceService } from '../services/alertify-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyListComponent } from '../Property/property-list/property-list.component';
import { MyServiceService } from '../services/my-service.service';
import { DataShareService } from '../services/dataShare.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('select') select:any;
  luser!:string;
  todaysDate=new Date()
  City=''
  search=''
  SortByParams:string=''
  SortDir='ascend'
  values=['City','Price']
  value!:string;
  

loggedin(): any {
  this.luser=<string>localStorage.getItem('token')
  return localStorage.getItem('token')
}

logout():any{
  localStorage.removeItem('token')
  this.router.navigate(['/Login'])
  this.alert.success(this.loggedin()+' logged out')

}

  constructor(
    private alert:AlertifyServiceService,
    private router:Router,
    private shareData:DataShareService
    ) { }

  ngOnInit() {
    this.shareData.currentSortByParams.subscribe(sub=>this.SortByParams=sub)
    this.shareData.currentSortDir.subscribe(sub=>this.SortDir=sub)
    this.shareData.currentSearch.subscribe(source=>this.search=source)
  }

  handleSearch(){
    this.search=this.City
    this.shareData.changeSearch(this.City)
  }
  handleClear(){
    this.City=''
    this.search=''
    this.shareData.changeSearch(this.City='')

  }

  handleSortOrder(){
    // toggle
    if(this.SortDir==='ascend'){
      this.SortDir='descend'
    this.shareData.changeSortDir('descend')
    console.log('nedd dir if',this.SortDir)

    }else{
      this.SortDir='ascend'
    this.shareData.changeSortDir(this.SortDir)
    console.log('nedd dir else',this.SortDir)

    }
  }
  
  handleselect(select:any){
    if(select.target.value==="City"){
    console.log('okay click it work',select)
    this.shareData.changeSortByParas(this.SortByParams='City')

    }else{
    console.log('nawaho')
    this.shareData.changeSortByParas(this.SortByParams='Price')
    }
  }
}
