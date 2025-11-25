import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { routes } from './../app.routes';
import { Router } from '@angular/router';


interface User {
  name?:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private loggedInKey = 'loggedIn'

  baseUrl:string = "http://localhost:8080/livescores"
  playerUrl:string = "http://localhost:8080/players"
  pointTableUrl:string = "http://localhost:8080/pointtable"
  matchesUrl:string = "http://localhost:8080/matches"
  t20Url:string = "http://localhost:8080/t20"
  testUrl:string = "http://localhost:8080/test"
  odiUrl:string = "http://localhost:8080/odi"

  userLoginAPI:string = "http://localhost:8080"

  constructor(private http : HttpClient , public router:Router , private jwtHelper: JwtHelperService) { }

getMatchScore(){
  return this.http.get(this.baseUrl)
}

getPlayerData(){
  return this.http.get(this.playerUrl)
}

getPointTable(){
  return this.http.get(this.pointTableUrl)
}
 
matches(){
  return this.http.get(this.matchesUrl)
}

addPlayerData(players:any){
  return this.http.post(this.playerUrl,players);
}

updatePlayer(id:string){
  return this.http.get(`${this.playerUrl}/${id}`);
}

updatePlayerData(playerData:any){
  return this.http.put(`${this.playerUrl}/${playerData._id}`, playerData);
}

deletePlayers(id:string){
  return this.http.delete(`${this.playerUrl}/${id}`);
}

t20Data(){
  return this.http.get(this.t20Url);
}

testData(){
  return this.http.get(this.testUrl);
}

odiData(){
  return this.http.get(this.odiUrl);
}

usersSignUp(user:User):Observable<any>{
  return this.http.post(`${this.userLoginAPI}/signup`,user)
}

usersLogin(user: User):Observable<any>{
  return this.http.post(`${this.userLoginAPI}/login`,user)
}

login(){
  sessionStorage.setItem(this.loggedInKey,'true')
}

logout(){
  sessionStorage.removeItem(this.loggedInKey)
}

isLoggedIn():boolean{
  return sessionStorage.getItem(this.loggedInKey) === 'true'
}

}
