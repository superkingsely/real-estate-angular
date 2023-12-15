import { Injectable } from '@angular/core';
import { User } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user:User){
  let users:User[]=[]
  // check d storage for users
  if(localStorage.getItem('Users')){
    users=JSON.parse(<string>localStorage.getItem('Users'));
    users=[user,...users]
  }else{
    users = [user];
  }
  // if local storage == empty[]
  localStorage.setItem('Users',JSON.stringify(users))
}


}
