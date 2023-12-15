import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  todaysDate=new Date()
  City=''
  search=''
  SortByParams=''
  SortDir='ascend'
  // after subscribing data will be passed to this source varable and also be retrived by d 2nd comp 
  private sortByparamsSource=new BehaviorSubject<string>('');
  private sortDirSource=new BehaviorSubject<string>('');
  private searchSource=new BehaviorSubject<string>('');
  // u are calling this on both components and suscribing to it
  currentSortByParams=this.sortByparamsSource.asObservable();
  currentSortDir=this.sortDirSource.asObservable();
  currentSearch=this.searchSource.asObservable();
  constructor() { }
  // the component passing the data will use this func
changeSortByParas(SortByParams:string){
  this.sortByparamsSource.next(SortByParams)
}
changeSortDir(SortDir:string){
  this.sortDirSource.next(SortDir)
}
changeSearch(search:string){
  this.searchSource.next(search)
}

}
