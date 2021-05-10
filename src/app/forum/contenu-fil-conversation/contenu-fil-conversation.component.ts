import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteUtilisateur } from 'src/app/models/compteUtilisateur.interface';
import { FilConversation } from 'src/app/models/filConversation.interface';
import { Message } from 'src/app/models/message.interface';
import { Rubrique } from 'src/app/models/rubrique.interface';
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
  filsConversations : FilConversation[] = []

  constructor(private route: ActivatedRoute,
    private router : Router,
    private serviceFilConversation : FilConversationService,
    private userService : CompteUtilisateurService,
    private serviceMessage: MessageService,
    
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

        this.filterByRubrique(this.fil.rubrique)
      })
      console.log("params id", params.id);
      this.serviceMessage.searchByFilConversation(params.id).subscribe(res =>{
        
        this.messages = res
        console.log("message", this.messages)
      })

      
    })
  }

  ajoutMessage(form: NgForm){
    console.log("form", form.value)

    let message : Message
    message.nom = form.value.nom

    let date = new Date()
    message.date = date

    this.serviceMessage.create(message).subscribe(res => {
      console.log(res)
    })
  }

  chargerUtilisateur() {
    this.userService.getByEmail(localStorage.getItem('token')).subscribe(user => {
        console.log('utilisateur', user);
        this.utilisateur = user;
    });
  }

  filterByRubrique(rubrique: Rubrique){
    console.log("filterByRubrique rubrique :", rubrique);
    this.serviceFilConversation.findByRubrique(rubrique.id).subscribe(res => {
      console.log("res filsConversation rubrique",res)
      this.filsConversations = res
    })
  }

}
