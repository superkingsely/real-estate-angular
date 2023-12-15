import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {

// okay: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;



  logModel!:FormGroup;
  constructor(private auth:AuthServiceService ,private alert:AlertifyServiceService,private router:Router) { }

  ngOnInit() {

    this.logModel=new FormGroup({
      name:new FormControl(null),
      password:new FormControl(null)
    })
  }
 
  handlesubmit(loginModel: FormGroup<any>) {
    console.log(loginModel.value)
    // login result
    // add tokken to authorize
    const token=this.auth.authUser(loginModel.value)
    if(token){
      localStorage.setItem('token',token.Name)
      this.alert.success('welcome '+ token.Name)
      this.router.navigate(['/'])
    }else{
      this.alert.error('Failed')
    }
  }
}