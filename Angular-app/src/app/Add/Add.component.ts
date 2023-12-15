import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router} from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import { IPropertyBase } from '../model/IPropertyBase';
import { Property } from '../model/Property';
import { MyServiceService } from '../services/my-service.service';
import { AlertifyServiceService } from '../services/alertify-service.service';
@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddComponent implements OnInit {
  //  @ViewChild('Form') addPropertyForm!: NgForm;
  //  @ViewChild('formTabs') formTabs: TabsetComponent;
   addPropertyForm!: FormGroup;
  @ViewChild('formTabs')formTabs!: TabsetComponent;
  propertyType:string[]=['Housing',"Apartment",'Duplex']
  furnishType:string[]=['Fully',"Semi",'Unfurnished']
  NextClicked!:boolean
  Property=new Property()
  // value:string='okay'
  propertyView:IPropertyBase={
    Id: null,
    Name: '',
    SellRent: null,
    PType: '',
    Price: null,
    FType: '',
    BHK: null,
    BuiltArea: null,
    City: '',
    RTM: null
  };

  // ----------------------
  // constructorFn
  // ---------------------
  // #region
    constructor(
      private router:Router,
      private fb:FormBuilder ,
      private Service:MyServiceService,
      private alertify:AlertifyServiceService
      ) { }
    // #endregion


// read data
  ngOnInit() {
    this.createAddPropertyForm()
  }

  // #region
    // ----------------------
    // ---------------------
    // #region
    // #endregion
  // #endregion

// --------------------------
// createAddPropertyFormFn
// -------------------
// #region
createAddPropertyForm(){
  this.addPropertyForm=this.fb.group({
    basicInfo:this.fb.group({
      SellRent:['1',Validators.required],
      PType:[null,Validators.required],
      FType:[null],
      City:[null],
      BHK:[null],
      Name:[null,Validators.required],
    }),
    priceInfo:this.fb.group({
      Price:[null,Validators.required],
      BuiltArea:[null,Validators.required],
      CarpetArea:[null],
      Security:[null],
      Maintenance:[null],
    }),
    AddressInfo:this.fb.group({
      FloorNos:[null],
      TotalFloor:[null],
      Address:[null,Validators.required],
      LandMark:[null],
    }),
    OtherInfo:this.fb.group({
      RTM:[null,Validators.required],
      PosessionOn:[null],
      GatedCommunity:[null],
      AOP:[null],
      RTM_dir:[null],
      Description:[null],
      
    }),
  })
}
// #endregion

// ------------------------------------
// Getter Methods
// -----------------------------------------
// #region
get BasicInfo(){
  return this.addPropertyForm.controls['basicInfo'] as FormGroup;
}
get SellRent(){
  return this.BasicInfo.controls['SellRent'] as FormControl;
}
get BHK(){
  return this.BasicInfo.controls['BHK'] as FormControl;
}
get PType(){
  return this.BasicInfo.controls['PType'] as FormControl;
}
get Name(){
  return this.BasicInfo.controls['Name'] as FormControl;
}
get City(){
  return this.BasicInfo.controls['City'] as FormControl;
}
get FType(){
  return this.BasicInfo.controls['FType'] as FormControl;
}
get PriceInfo(){
  return this.addPropertyForm.controls['priceInfo'] as FormGroup;
}
get Price(){
  return this.PriceInfo.controls['Price'] as FormControl;
}
get Security(){
  return this.PriceInfo.controls['Security'] as FormControl;
}
get Maintenance(){
  return this.PriceInfo.controls['Maintenance'] as FormControl;
}
get BuiltArea(){
  return this.PriceInfo.controls['BuiltArea'] as FormControl;
}
get CarpetArea(){
  return this.PriceInfo.controls['CarpetArea'] as FormControl;
}
get AdressInfo(){
  return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
}
get Address(){
  return this.AdressInfo.controls['Address'] as FormControl;
}
get FloorNos(){
  return this.AdressInfo.controls['FloorNos'] as FormControl;
}
get TotalFloor(){
  return this.AdressInfo.controls['TotalFloor'] as FormControl;
}
get LandMark(){
  return this.AdressInfo.controls['LandMark'] as FormControl;
}
get OtherInfo(){
  return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
}
get RTM(){
  return this.OtherInfo.controls['RTM'] as FormControl;
}
get AOP(){
  return this.OtherInfo.controls['AOP'] as FormControl;
}
get GatedCommunity(){
  return this.OtherInfo.controls['GatedCommunity'] as FormControl;
}
get Description(){
  return this.OtherInfo.controls['Description'] as FormControl;
}
get Posession(){
  return this.OtherInfo.controls['PosessionOn'] as FormControl;
}
// #endregion

  handleclick(){
    this.router.navigate(['/'])
  }
  // -----------
  // TabValidationFn
  // -------------
  // #region


  TabValid():boolean{
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active=true;
      return false;
    }
    if(this.PriceInfo.invalid){
      this.formTabs.tabs[1].active=true;
      return false;
    }
    if(this.AdressInfo.invalid){
      this.formTabs.tabs[2].active=true;
      return false;
    }
    if(this.OtherInfo.invalid){
      this.formTabs.tabs[3].active=true;
      return false;
    }
    return true
  }
  // #endregion
  
  handleSubmit(){
    // console.log('less see ',
    // this.AOP.value,
    // this.RTM.value,
    // this.Posession.value,
    // this.Description.value,
    // this.GatedCommunity.value,
    // new Date().toString()
    // )


    // to validate sellrent
    this.NextClicked=true
    // on handle submit shouldtake us back to invalid formGroup
    // tabvalid fn here
    // this.TabValid()
    if(this.TabValid()){
      this.mapProperty();
      this.Service.addProperty(this.Property);
      console.log('congrats')
      this.alertify.success('new property added')
      console.log('okay',this.addPropertyForm)
    // dont use kebba for ur formGroup
    // console.log('okay',this.addPropertyForm.value.BasicInfo.Name) tD
    console.log('okay',this.addPropertyForm.value.basicInfo.Name)
    console.log( 'comeon form tab',this.formTabs)
    if(this.SellRent.value==='2'){
      this.router.navigate(['/rent'])
    }else{
      this.router.navigate(['/'])

    }
    }else{
      console.log('pls check ur form again')
      this.alertify.error('pls properly fillin the form again thank u')
    }
   

  }
  
// -----------
// Map property into a class (for a bigger form)
// -------------
// #region
  mapProperty():void{
    this.Property.Id=this.Service.newPropId();
    // basicInfo
    this.Property.SellRent= +this.SellRent.value;
    this.Property.BHK= +this.BHK.value;
    this.Property.PType= this.PType.value;
    this.Property.FType= this.FType.value;
    this.Property.Name= this.Name.value;
    this.Property.City= this.City.value;
    // PriceInfo
    this.Property.Price=      this.Price.value;
    this.Property.Security=   this.Security.value;
    this.Property.Maintenance=this.Maintenance.value;
    this.Property.BuiltArea=  this.BuiltArea.value;
    this.Property.CarpetArea= this.CarpetArea.value;
    // AddressInfo
    this.Property.Address=    this.Address.value;
    this.Property.FloorNos=   this.FloorNos.value;
    this.Property.TotalFloor= this.TotalFloor.value;
    this.Property.Address2= this.LandMark.value;

    // otherInfo
    this.Property.AOP=              this.AOP.value;
    this.Property.RTM=              this.RTM.value;
    this.Property.Posession=      this.Posession.value;
    this.Property.Description=    this.Description.value;
    this.Property.Gated= this.GatedCommunity.value;
    this.Property.PostedOn=   new Date().toString()
    
  }
// #endregion

  // ,isCurrentTabValid:boolean
  selectTab(tabId:number){
      this.NextClicked=true
      this.formTabs.tabs[tabId].active=true;
    // if(isCurrentTabValid){
    // }
    console.log(this.formTabs)
  }
}
