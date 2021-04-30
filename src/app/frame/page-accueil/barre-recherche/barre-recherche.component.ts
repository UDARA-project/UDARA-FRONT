import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
import { IndicateurAir } from 'src/app/models/indicateurAir.interface';
import { NiveauMeteo } from 'src/app/models/niveauMeteo.interface';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  nomCommunes: string[];
  indicateurAirs: IndicateurAir[];
  niveauMeteos: NiveauMeteo[];
  nomIndicateurs: string[] = ["co","no","no2","o3","so2","pm2_5","pm10","nh3"];
  nomNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  echelleTemps: string[] = ["JOURNALIERE", "HEBDOMADAIRE", "MENSUEL"];
  @ViewChild('input') inputElement: ElementRef;
  @Input() loading: boolean;
  @Output() searchChild = new EventEmitter();

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
    this.communeService.getEveryName().subscribe(array => {
      this.nomCommunes = array;
      this.loading = false;
    });
  }

  search() {
    this.onEnter(this.inputElement.nativeElement.value);
  }

  onEnter(nomCommune: string) {
    this.indicateurAirService.getAllByName(nomCommune, this.nomIndicateurs, this.echelleTemps[0]).subscribe(res => {
      this.indicateurAirs = res;
      this.niveauMeteoService.getAllByName(nomCommune, this.nomNiveaux, this.echelleTemps[0]).subscribe(res => {
        this.niveauMeteos = res;
        this.searchChild.emit({nomCommune:nomCommune, indicateurAirs:this.indicateurAirs, niveauMeteos:this.niveauMeteos });
      })
    })
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