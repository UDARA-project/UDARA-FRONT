import { Component, Input, OnInit } from '@angular/core';
import { IndicateurAir } from 'src/app/models/indicateurAir.interface';
import { NiveauMeteo } from 'src/app/models/niveauMeteo.interface';

@Component({
  selector: 'app-accueil-data',
  templateUrl: './accueil-data.component.html',
  styleUrls: ['./accueil-data.component.css']
})
export class AccueilDataComponent implements OnInit {

loading: boolean;
nomCommune: string;
indicateurAirs: IndicateurAir[];
niveauMeteos: NiveauMeteo[];

  constructor() { }

  ngOnInit(): void {
  }

  renderSearchParent(data) {
    this.nomCommune = data.nomCommune;
    this.indicateurAirs = data.indicateurAirs;
    this.niveauMeteos = data.niveauMeteos;
  }

}
