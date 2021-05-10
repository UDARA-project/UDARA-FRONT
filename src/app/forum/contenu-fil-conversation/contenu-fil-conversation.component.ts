import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { FilConversation } from 'src/app/models/filConversation.interface';
import { Message } from 'src/app/models/message.interface';
import { CompteUtilisateurService, FilConversationService, MessageService } from 'src/app/services';

@Component({
  selector: 'app-contenu-fil-conversation',
  templateUrl: './contenu-fil-conversation.component.html',
  styleUrls: ['./contenu-fil-conversation.component.css']
})
export class ContenuFilConversationComponent implements OnInit {

  fil : FilConversation
  utilisateur : CompteUtilisateur
  messages : Message[]

  constructor(private route: ActivatedRoute,
    private router : Router,
    private serviceFilConversation : FilConversationService,
    private userService : CompteUtilisateurService,
    private serviceMessage: MessageService
    ) { }

  ngOnInit(): void {
    this.getFilConversation()
    this.chargerUtilisateur();
  }

  getFilConversation(){
    this.route.params.subscribe(params => {
      console.log("params", params);
      
      this.serviceFilConversation.findById(params.id).subscribe(response =>{
        console.log("FilConversation recup", response)
        this.fil = response
        console.log(this.fil)
      })
      console.log("params id", params.id);
      this.serviceMessage.searchByFilConversation(params.id).subscribe(res =>{
        
        this.messages = res
        console.log("message", this.messages)
      })
    })
  }

  // ajoutMessage(form: NgForm){
  //   console.log("form", form.value)

  //   let message : Message
  //   message.nom = form.value.nom

  //   let date = new Date()
  //   message.date = date

  //   console.log(message)
  // }

  chargerUtilisateur() {
    this.userService.getByEmail(localStorage.getItem('token')).subscribe(user => {
        console.log('utilisateur', user);
        this.utilisateur = user;
    });
  }

}
