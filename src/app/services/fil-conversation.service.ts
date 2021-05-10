import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilConversation } from '../models/filConversation.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class FilConversationService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/filconversations')
   }

  get() {
    return this.http.get<FilConversation[]>(`${this.url}`);
  }

  findById(id : number) {
    return this.http.get<FilConversation>(`${this.url}/${id}`);
  }

  findByRubrique(id : number) {
    return this.http.get<FilConversation[]>(`${this.url}/rubrique/${id}`);
  }

  create(filConversation : FilConversation) {
    filConversation.id = null;
    console.log("serviceFil create", filConversation)
    return this.http.post(this.url, filConversation);
  }
  
  delete(id : number) {
    console.log("id",id)
    return this.http.delete(`${this.url}/${id}`)
  }

}