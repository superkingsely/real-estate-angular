import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, reduce } from 'rxjs';
// import { IPropertyBase } from '../model/IPropertyBase';
import { Property } from '../model/Property';


@Injectable({
  // singleton
  providedIn: 'root'
  // root == app.module
})
export class MyServiceService {

  // propId!:string;
constructor(private http:HttpClient) { }
// method for the service
GetPropById(Id:number){
      return this.AddApiGet().pipe(map(datas=>{
        return datas.find(dataobj=>dataobj.Id===Id);
      }))
}
AddApiGet(SellRent?:number): Observable<Property[]>{
  // api url
  console.log('sellrent',SellRent)
 return this.http.get<Property[]>('data/propertise.json')
 .pipe(
  map((data:Array<Property>)=>{
    console.log('map data',data)

    const properties:Array<Property>=[];
    // GET; just come here to retrive the list from the local and push to the app-list(properties)
    const localProperties=JSON.parse(<string>localStorage.getItem('newProp'))
    // this.propId=(data.length+1).toString();
    // console.log('come on',this.propId)
    console.log(localProperties)
    if(localProperties){
      localProperties.map((localProp:Property)=>{
        // console.log('less see id',)
        // cause of the optional param
        if(SellRent){

          if(localProp.SellRent===SellRent){
            properties.push(localProp)
          }
        }else{
          properties.push(localProp)
        }
      })
    }

    data.map((data:Property)=>{
      // console.log('less see id',)
      // for the seed data too
      if(SellRent){

        if(data.SellRent===SellRent){
          properties.push(data)
        }
      }else{
        properties.push(data)
      }
    })
    return properties

    // for (const id in data){
    //   if(data.hasOwnProperty(id)){
    //     console.log(id)
    //     // for each obj of the array
    //     properties.push(data);
    //   }
    //   else{
    //     console.log('no id')
    //   }
    // }
    // console.log(properties)
  })
 )
}

// handle the property class object to save object to d localstorage
// Create
// to solve our issue ,we provide a fn to create an array and save properties in local
addProperty(property:Property){
  let newProp=[property]
  if(localStorage.getItem('newProp')){
    newProp=[property,...JSON.parse(<string>localStorage.getItem('newProp'))]
  }
  localStorage.setItem('newProp',JSON.stringify(newProp))
}

// to generate an incremental id for our newly added propertycard

newPropId(){
  if(localStorage.getItem('PID')){
    localStorage.setItem('PID',String(+<string>localStorage.getItem('PID')+1))
    return +<string>localStorage.getItem('PID');
  }else{
    localStorage.setItem('PID','101')
    return 101
    // localStorage.getItem('PID')
  }
}

}
function acc(acc: number | null, value: unknown, index: number): number | null {
  throw new Error('Function not implemented.');
}

