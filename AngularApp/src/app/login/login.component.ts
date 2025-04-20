import { Component } from '@angular/core';
import { LoginService } from './loginService';
import { FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from './Models/LoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(
    private loginService:LoginService
  ){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  login(){
    //console.log("username : ",this.loginForm.value.username)
    //console.log("password : ",this.loginForm.value.password)

    let request:LoginRequest = new LoginRequest()
    request.setUserName(this.loginForm.value.username)
    request.setPassWord(this.loginForm.value.password)
    let result = this.loginService.login(request)
    console.log("result: ",result)
  }

}
