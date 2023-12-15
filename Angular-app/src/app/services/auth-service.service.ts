import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }

authUser(user:any){
  let db=[]
  if(localStorage.getItem('Users')){
    db=JSON.parse(<string>localStorage.getItem('Users'));
    console.log('db=',db)
  }
  return db.find((uso: { Name: any; Password: any; })=>uso.Name===user.name && uso.Password===user.password)
}

}
