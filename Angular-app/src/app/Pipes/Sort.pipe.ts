import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Sort'
})
export class SortPipe implements PipeTransform {
  // the value here is gotten form the relative pipe or parent pipe (filter which return any[])
  transform(value: string[], args?: any[]): any {
    const sortField=args![0]
    const sortDirection=args![1]
    let multiplier=1
    if(sortDirection==='descend'){
      multiplier=-1
    }
    // a,b==propObj
    value.sort((a:any,b:any)=>{
      if(a[sortField]<b[sortField]){
        return -1*multiplier
      }else if(a[sortField]>b[sortField]){
        return 1*multiplier
      }else{
        return 0
      }
    })
    return value;
  }

}
