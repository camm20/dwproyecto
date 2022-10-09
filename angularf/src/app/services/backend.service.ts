import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiURL = "http://0.0.0.0/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.Token.get()
    })
  }

  constructor(private http:HttpClient, private Token:TokenService, private Auth:AuthService) { }
  signup(data:any){
    return this.http.post(this.apiURL + '/auth/registrar',data);
  }
  login(data:any){
    return this.http.post(this.apiURL + '/auth/login',data);
  }

  getMarcajes(){
    return this.http.get<any>(this.apiURL + '/marcajes/view/' + this.Auth.getUid(),this.httpOptions);
  }

  setMarcaje(){
    return this.http.post(this.apiURL + '/marcajes',JSON.stringify({'user_id':this.Auth.getUid()}),this.httpOptions);
  }


}
