import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilConversation } from 'src/app/models/filConversation.interface';
import { FilConversationService } from 'src/app/services';

@Component({
  selector: 'app-contenu-fil-conversation',
  templateUrl: './contenu-fil-conversation.component.html',
  styleUrls: ['./contenu-fil-conversation.component.css']
})
export class ContenuFilConversationComponent implements OnInit {

  fil : FilConversation

  constructor(private route: ActivatedRoute,
    private router : Router,
    private serviceFilConversation : FilConversationService) { }

  ngOnInit(): void {
    this.getFilConversation()
  }

  getFilConversation(){
    this.route.params.subscribe(params => {
      console.log("params", params);
      
      this.serviceFilConversation.findById(params.id).subscribe(response =>{
        console.log("FilConversation recup", response)
        this.fil = response
        console.log(this.fil)
      })
    })
  }

}
