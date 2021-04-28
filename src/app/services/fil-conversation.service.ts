import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FilConversation } from '../models/filConversation.interface';

@Injectable({
  providedIn: 'root'
})
export class FilConversationService {

  private url: string = environment.urlBack + '/api/filconversations/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<FilConversation[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<FilConversation>(this.url + id);
  }

  create(filConversation : FilConversation) {
    return this.http.post(this.url, filConversation);
  }

  update(filConversation : FilConversation) {
    return this.http.put(this.url + filConversation.id, filConversation);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }

}