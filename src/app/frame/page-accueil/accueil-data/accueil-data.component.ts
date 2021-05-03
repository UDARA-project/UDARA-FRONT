import { Component, Input, OnInit } from '@angular/core';
import { Commune } from 'src/app/models/commune.interface';
import { IndicateurAir } from 'src/app/models/indicateurAir.interface';
import { NiveauMeteo } from 'src/app/models/niveauMeteo.interface';
import { CommuneService } from 'src/app/services/commune.service';
import { IndicateurAirService } from 'src/app/services/indicateur-air.service';
import { NiveauMeteoService } from 'src/app/services/niveau-meteo.service';


interface MeteosWithUnit {
  nom: string;
  valeurs: string[];
}

interface IndicateursWithUnit {
  nom: string;
  valeurs: string[];
}

@Component({
  selector: 'app-accueil-data',
  templateUrl: './accueil-data.component.html',
  styleUrls: ['./accueil-data.component.css']
})
export class AccueilDataComponent implements OnInit {

  loadingSearch: boolean;
  nomCommune: string;
  indicateurAirs: IndicateurAir[];
  niveauMeteos: NiveauMeteo[];
  indicateurWithUnit: IndicateursWithUnit[] = [];
  meteoWithUnit: MeteosWithUnit[] = [];
  commune: Commune;
  meteoGlobale: string = "../../../../assets/images/soleil.svg";
  indicateurGlobale: string = "../../../../assets/images/emoji-3.svg";
  temperatureActuelle: number;
  evolutionPolluant: number;
  nomIndicateurs: string[] = ["co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3"];
  nomNiveaux: string[] = ["Température", "Nuage", "Vent", "Pluie"]
  echelleTemps: string[] = ["JOURNALIERE", "HEBDOMADAIRE", "MENSUEL"];

  constructor(private communeService: CommuneService,
    private indicateurAirService: IndicateurAirService,
    private niveauMeteoService: NiveauMeteoService) { }

  ngOnInit(): void {
    this.renderVisiteur()
  }

  renderVisiteur() {
    this.loadingSearch = true;
    this.indicateurAirService.search(this.nomIndicateurs, this.echelleTemps[0]).subscribe(res => {
      res.forEach(elt => {
        let newValue = elt.valeurs.map(r => r+"%");
        this.indicateurWithUnit.push({nom:elt.nom, valeurs:newValue});
      });
      this.niveauMeteoService.search(this.nomNiveaux, this.echelleTemps[0]).subscribe(res => {
        res.forEach(elt => {
          let newValue = [];
          if (elt.nom == "Température") {
            newValue = elt.valeurs.map(r => r+"°C");
          } else if (elt.nom == "Nuage" || elt.nom == "Pluie") {
            newValue = elt.valeurs.map(r => r+"%");
          } else if (elt.nom == "Vent") {
            newValue = elt.valeurs.map(r => r+"m/s");
          }
          this.meteoWithUnit.push({nom:elt.nom, valeurs:newValue});
        });

        console.log(this.niveauMeteos);

        this.commune = {
          id: null,
          name: null,
          lat: null,
          lon: null,
          departement: null,
          region: null,
          population: null
        }
        this.loadingSearch = false;
      })
    })
  }

  renderSearchInsideParent(data) {
    this.loadingSearch = true;
    this.nomCommune = data.nomCommune;
    this.indicateurAirs = data.indicateurAirs;
    this.niveauMeteos = data.niveauMeteos;
    this.communeService.findByName(data.nomCommune).subscribe(r => {
      this.commune = r;
      this.generateMeteoGlobale();
      this.generateIndicateurGlobale();
      this.loadingSearch = false;
    })
  }

  generateMeteoGlobale() {
   /*  let nombreValeur = this.niveauMeteos[0].valeurs.length;
    this.temperatureActuelle = Math.round(this.niveauMeteos[0].valeurs[nombreValeur - 1]);
    let nuageValeur = this.niveauMeteos[1].valeurs[nombreValeur - 1];
    let ventValeur = this.niveauMeteos[2].valeurs[nombreValeur - 1];
    let pluieValeur = this.niveauMeteos[3].valeurs[nombreValeur - 1];
    if (nuageValeur > 33 && nuageValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+soleil.svg"
    } else if (nuageValeur > 66 && ventValeur <= 10 && pluieValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage.svg"
    } else if (nuageValeur > 66 && ventValeur <= 10 && pluieValeur > 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+pluie.svg"
    } else if (nuageValeur > 66 && ventValeur > 10 && pluieValeur <= 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+vent.svg"
    } else if (nuageValeur > 66 && ventValeur > 10 && pluieValeur > 66) {
      this.meteoGlobale = "../../../../assets/images/nuage+vent+pluie.svg"
    } */
  }

  generateIndicateurGlobale() {
/*     let nombreValeur = this.indicateurAirs[0].valeurs.length;
    let cumulJour: number = 0;
    let cumulHier: number = 0;
    for (const indicateur of this.indicateurAirs) {
      cumulJour += indicateur.valeurs[nombreValeur - 1];
      cumulHier += indicateur.valeurs[nombreValeur - 2]
    }
    this.evolutionPolluant = Math.round(cumulHier / (cumulHier - cumulJour));
    if (this.evolutionPolluant > 25) {
      this.indicateurGlobale = "../../../../assets/images/emoji-1.svg"
    } else if (this.evolutionPolluant > 10) {
      this.indicateurGlobale = "../../../../assets/images/emoji-2.svg"
    } else if (this.evolutionPolluant < 25) {
      this.indicateurGlobale = "../../../../assets/images/emoji-5.svg"
    } else if (this.evolutionPolluant < 10) {
      this.indicateurGlobale = "../../../../assets/images/emoji-4.svg"
    } */
  }

}
