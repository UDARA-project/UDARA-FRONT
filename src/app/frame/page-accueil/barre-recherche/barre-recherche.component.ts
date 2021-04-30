import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommuneService } from 'src/app/services/commune.service';
import { CompteUtilisateurService } from 'src/app/services/compte-utilisateur.service';
import { FavoriService } from 'src/app/services/favori.service';
import { FilConversationService } from 'src/app/services/fil-conversation.service';
import { IndicateurAirService } from 'src/app/services/indicateur-air.service';
import { MessageService } from 'src/app/services/message.service';
import { NiveauMeteoService } from 'src/app/services/niveau-meteo.service';
import { NotifService } from 'src/app/services/notif.service';
import { RubriqueService } from 'src/app/services/rubrique.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  nomCommunes: string[];
  @ViewChild('input') inputElement: ElementRef;
  @Input() loading: boolean;

  constructor(
    private communeService: CommuneService,
    private compteUtilisateurService: CompteUtilisateurService,
    private favoriService: FavoriService,
    private filConversationService: FilConversationService,
    private indicateurAirService: IndicateurAirService,
    private messageService: MessageService,
    private niveauMeteoService: NiveauMeteoService,
    private notifService: NotifService,
    private rubriqueService: RubriqueService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.loading = true;
    this.communeService.get().subscribe(array => {
      this.nomCommunes = array.map(item => item.name)
      this.loading = false;
    });
  }

  search() {
    this.onEnter(this.inputElement.nativeElement.value);
  }

  onEnter(nomCommune: string) {
    console.log(nomCommune);

    this.indicateurAirService.getByName(nomCommune, "no2").subscribe(res => console.log(res))

    /* let extras: NavigationExtras = {
      skipLocationChange: false,
      replaceUrl: true,
      queryParams: { q: value },
      state: null
    };
    this.router.navigateByUrl('/').then(() =>
      this.router.navigate(['list'], extras)); */
          //this.indicateurAirService.get().subscribe(r => console.log(r));
    //this.niveauMeteoService.get().subscribe(r => console.log(r));
  }



  test() {
    this.compteUtilisateurService.get().subscribe(r => console.log(r));
    this.favoriService.get().subscribe(r => console.log(r));
    this.filConversationService.get().subscribe(r => console.log(r));
    this.messageService.get().subscribe(r => console.log(r));
    this.notifService.get().subscribe(r => console.log(r));
    this.rubriqueService.get().subscribe(r => console.log(r));
  }
}