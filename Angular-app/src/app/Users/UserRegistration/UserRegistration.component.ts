import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user-interface';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
// import * as alertyfy from 'alertifyjs'

@Component({
  selector: 'app-UserRegistration',
  templateUrl: './UserRegistration.component.html',
  styleUrls: ['./UserRegistration.component.css'],
})
export class UserRegistrationComponent implements OnInit {

  regFormModel!: FormGroup;
  user!: User;
  IsSubmitted!: boolean;

  constructor(private userService: UserServiceService,private alertyfy:AlertifyServiceService) {}

  ngOnInit() {
    this.regFormModel = new FormGroup(
      {
        userName: new FormControl(null, [Validators.required]),
        userEmail: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
        userMobile: new FormControl(null, [Validators.required,this.numbers]),
        userPassword: new FormControl(null, [Validators.required]),
        userConfirmPassword: new FormControl(null, [Validators.required]),
      },
      [Validators.required, this.matchvalidation]
    );
    // costum validators takes place at the formGroup!
    const check =this.regFormModel.get('userMobile')?.errors
    console.log(check)
  }

  numbers(fc:FormControl):ValidationErrors | null{
      const mobile=fc.value
      const num=5
      if(typeof(mobile)!== typeof(num)){
        return null
        return{'number':false}
      }
      return null;
  }

  matchvalidation(c: AbstractControl): ValidationErrors | null {
    return c.get('userPassword')?.value === c.get('userConfirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  handlesubmit() {
    this.IsSubmitted = true;
    if (this.regFormModel.valid) {
      console.log('regformmodel =', this.regFormModel);
      // userdata obj
      // this.user = Object.assign(this.user, this.regFormModel.value);
      this.userService.addUser(this.userData());
      this.regFormModel.reset();
      this.IsSubmitted = false;
      this.alertyfy.success('Congrats,')
      
    }else{
      console.log(this.regFormModel.status)
      this.alertyfy.error('pls Register')
    }
    console.log('what now')
  }

  userData():User{
    return this.user={
      Name:this.regFormModel.get('userName')?.value,
      Email:this.regFormModel.get('userEmail')?.value,
      Mobile:this.regFormModel.get('userMobile')?.value,
      Password:this.regFormModel.get('userPassword')?.value,
    }
  }
}
