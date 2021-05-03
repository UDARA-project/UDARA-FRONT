import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.interface';
import { AbstractHttpService } from './abstractHttp.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http, 'api/messages')
   }

  get() {
    return this.http.get<Message[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Message>(`${this.url}/${id}`);
  }

  create(message : Message) {
    return this.http.post(this.url, message);
  }

  update(message : Message) {
    return this.http.put(`${this.url}/${message.id}`, message);
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}