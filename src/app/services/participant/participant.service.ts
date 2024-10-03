import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  baseUrl = 'http://localhost:3000/participants'

  constructor(private _http:HttpClient) {
  }

  getAllParticipants(){
    return this._http.get(this.baseUrl);
  }

  getParticipantById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`)
  }
}
