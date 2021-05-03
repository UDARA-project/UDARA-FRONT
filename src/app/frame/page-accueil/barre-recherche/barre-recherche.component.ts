import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommuneService } from 'src/app/services/commune.service';
import { IndicateurAirService } from 'src/app/services/indicateur-air.service';
import { NiveauMeteoService } from 'src/app/services/niveau-meteo.service';
import { IndicateurAir } from 'src/app/models/indicateurAir.interface';
import { NiveauMeteo } from 'src/app/models/niveauMeteo.interface';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  loadingCommune: boolean;
  nomCommunes: string[];
  indicateurAirs: IndicateurAir[];
  niveauMeteos: NiveauMeteo[];
  nomIndicateurs: string[] = ["co","no","no2","o3","so2","pm2_5","pm10","nh3"];
  nomNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  echelleTemps: string[] = ["JOURNALIERE", "HEBDOMADAIRE", "MENSUEL"];
  @ViewChild('input') inputElement: ElementRef;
  @Output() searchChild = new EventEmitter();

  constructor(
    private communeService: CommuneService,
    private indicateurAirService: IndicateurAirService,
    private niveauMeteoService: NiveauMeteoService,
  ) { }

  ngOnInit(): void {
    this.initializeCommunes();
  }

  initializeCommunes() {
    this.loadingCommune = true;
    this.communeService.getEveryName().subscribe(array => {
      this.nomCommunes = array;
      this.loadingCommune = false;
    });
  }

  search() {
    this.onEnter(this.inputElement.nativeElement.value);
  }

  onEnter(nomCommune: string) {
    this.indicateurAirService.searchByCommune(nomCommune, this.nomIndicateurs, this.echelleTemps[0]).subscribe(res => {
      this.indicateurAirs = res;
      this.niveauMeteoService.searchByCommune(nomCommune, this.nomNiveaux, this.echelleTemps[0]).subscribe(res => {
        this.niveauMeteos = res;
        this.searchChild.emit({nomCommune:nomCommune, indicateurAirs:this.indicateurAirs, niveauMeteos:this.niveauMeteos});
      })
    })
  }

}