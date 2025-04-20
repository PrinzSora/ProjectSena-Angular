import { Injectable } from "@angular/core";
import { UtilService } from "../UtilService";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "./Models/LoginRequest";

@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(
        private utilService:UtilService,
        private http:HttpClient
    ){}
    
    testService() :string{
        return 'hello';
    } 
    
    async login(request:LoginRequest):Promise<any>{
        return await this.http.post<any>('http://localhost:8080/membership/login/login_with_email',request).subscribe()
    }

}

