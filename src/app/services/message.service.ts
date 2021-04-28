import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Message } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url: string = environment.urlBack + '/api/messages/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Message[]>(this.url);
  }

  findById(id : number) {
    return this.http.get<Message>(this.url + id);
  }

  create(message : Message) {
    return this.http.post(this.url, message);
  }

  update(message : Message) {
    return this.http.put(this.url + message.id, message);
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }

}