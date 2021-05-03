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
    return this.http.get<FilConversation[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<FilConversation>(`${this.url}/${id}`);
  }

  create(filConversation : FilConversation) {
    return this.http.post(this.url, filConversation);
  }

  update(filConversation : FilConversation) {
    return this.http.put(`${this.url}/${filConversation.id}`, filConversation);
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}