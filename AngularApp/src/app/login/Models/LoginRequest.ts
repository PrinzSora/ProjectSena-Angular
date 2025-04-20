
export class LoginRequest {

    private userName: string
    private passWord: string 

    
    constructor(userName?:string,passWord?:string){
        this.userName = userName ?? ''
        this.passWord = passWord ?? ''
    }

    public getUserName(): string {
        return this.userName
    }
    public getPassWord(): string {
        return this.passWord
    }


    public setUserName(value: string) {
        this.userName = value
    }
    public setPassWord(value: string) {
        this.passWord = value
    }


}
